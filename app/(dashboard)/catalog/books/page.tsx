import { BookTable } from "@/components/books/book-table";

export default function BooksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Books Catalog</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Manage your library's collection of books. Add, edit, or search titles.
        </p>
      </div>

      <BookTable />
    </div>
  );
}
