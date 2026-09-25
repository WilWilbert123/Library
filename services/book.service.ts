import { createClient } from "@/lib/supabase/server";
import { Book, BookFormData } from "@/types/book";

export class BookService {
  static async getBooks(search?: string, page = 1, pageSize = 20) {
    const supabase = await createClient();
    let query = supabase
      .from("books")
      .select(`
        *,
        publisher:publishers(id, name),
        category:categories(id, name),
        authors:book_authors(author:authors(id, name)),
        copies:book_copies(id, status)
      `, { count: "exact" });

    if (search) {
      query = query.or(`title.ilike.%${search}%,isbn.ilike.%${search}%,call_number.ilike.%${search}%`);
    }

    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data, count, error } = await query
      .range(from, to)
      .order("created_at", { ascending: false });

    // --- TEMPORARILY ADDED FOR UI PREVIEW (since no DB exists yet) ---
    if (error || !data) {
      console.warn("Supabase query failed, returning mock data for preview.");
      const mockData = [
        {
          id: "1", title: "Clean Code: A Handbook of Agile Software Craftsmanship", isbn: "978-0132350884", call_number: "QA76.76.C65",
          authors: [{ name: "Robert C. Martin" }],
          category: { name: "Software Engineering" },
          copies_count: 5, available_copies_count: 3
        },
        {
          id: "2", title: "Atomic Habits", isbn: "978-0735211292", call_number: "BF335.C54",
          authors: [{ name: "James Clear" }],
          category: { name: "Self-Help" },
          copies_count: 8, available_copies_count: 0
        },
        {
          id: "3", title: "Design Patterns: Elements of Reusable Object-Oriented Software", isbn: "978-0201633610", call_number: "QA76.64.D47",
          authors: [{ name: "Erich Gamma" }, { name: "Richard Helm" }],
          category: { name: "Software Engineering" },
          copies_count: 3, available_copies_count: 2
        },
        {
          id: "4", title: "Dune", isbn: "978-0441172719", call_number: "PS3558.E63",
          authors: [{ name: "Frank Herbert" }],
          category: { name: "Science Fiction" },
          copies_count: 12, available_copies_count: 1
        },
        {
          id: "5", title: "The Martian", isbn: "978-0553418026", call_number: "PS3643.E47",
          authors: [{ name: "Andy Weir" }],
          category: { name: "Science Fiction" },
          copies_count: 6, available_copies_count: 6
        },
        {
          id: "6", title: "Sapiens: A Brief History of Humankind", isbn: "978-0062316097", call_number: "CB113.H3",
          authors: [{ name: "Yuval Noah Harari" }],
          category: { name: "History" },
          copies_count: 7, available_copies_count: 4
        },
        {
          id: "7", title: "The Pragmatic Programmer", isbn: "978-0135957059", call_number: "QA76.6.H8",
          authors: [{ name: "David Thomas" }, { name: "Andrew Hunt" }],
          category: { name: "Software Engineering" },
          copies_count: 4, available_copies_count: 2
        },
        {
          id: "8", title: "1984", isbn: "978-0451524935", call_number: "PR6029.R8",
          authors: [{ name: "George Orwell" }],
          category: { name: "Fiction" },
          copies_count: 15, available_copies_count: 5
        },
        {
          id: "9", title: "Thinking, Fast and Slow", isbn: "978-0374533557", call_number: "BF441.K23",
          authors: [{ name: "Daniel Kahneman" }],
          category: { name: "Psychology" },
          copies_count: 9, available_copies_count: 0
        },
        {
          id: "10", title: "Introduction to Algorithms", isbn: "978-0262033848", call_number: "QA76.6.C66",
          authors: [{ name: "Thomas H. Cormen" }],
          category: { name: "Computer Science" },
          copies_count: 2, available_copies_count: 2
        }
      ];
      
      let filteredMock = mockData;
      if (search) {
        filteredMock = mockData.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
      }
      return { books: filteredMock, count: filteredMock.length };
    }
    // -----------------------------------------------------------------

    // Transform relation data
    const books = data.map((book: any) => ({
      ...book,
      authors: book.authors?.map((a: any) => a.author) || [],
      copies_count: book.copies?.length || 0,
      available_copies_count: book.copies?.filter((c: any) => c.status === 'AVAILABLE').length || 0,
      copies: undefined // Remove raw copies data from final output
    }));

    return { books, count: count || 0 };
  }

  static async getBookById(id: string) {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("books")
      .select(`
        *,
        publisher:publishers(id, name),
        category:categories(id, name),
        authors:book_authors(author:authors(id, name)),
        subjects:book_subjects(subject:subjects(id, name))
      `)
      .eq("id", id)
      .single();

    if (error) throw error;

    return {
      ...data,
      authors: data.authors?.map((a: any) => a.author) || [],
      subjects: data.subjects?.map((s: any) => s.subject) || [],
    };
  }

  static async createBook(data: BookFormData) {
    const supabase = await createClient();
    const { author_ids, subject_ids, ...bookData } = data;

    // Create book
    const { data: book, error: bookError } = await supabase
      .from("books")
      .insert(bookData)
      .select()
      .single();

    if (bookError) throw bookError;

    // Attach authors
    if (author_ids && author_ids.length > 0) {
      const authorInserts = author_ids.map(author_id => ({
        book_id: book.id,
        author_id
      }));
      await supabase.from("book_authors").insert(authorInserts);
    }

    // Attach subjects
    if (subject_ids && subject_ids.length > 0) {
      const subjectInserts = subject_ids.map(subject_id => ({
        book_id: book.id,
        subject_id
      }));
      await supabase.from("book_subjects").insert(subjectInserts);
    }

    return book;
  }
}
