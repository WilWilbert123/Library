import { NextRequest, NextResponse } from "next/server";
import { BookService } from "@/services/book.service";
import { bookSchema } from "@/schemas/book.schema";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    // --- TEMPORARILY DISABLED FOR UI PREVIEW ---
    // const { data: { user } } = await supabase.auth.getUser();
    // 
    // if (!user) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "20");

    const { books, count } = await BookService.getBooks(search, page, pageSize);

    return NextResponse.json({
      data: books,
      meta: {
        total: count,
        page,
        pageSize,
        totalPages: Math.ceil(count / pageSize)
      }
    });
  } catch (error: any) {
    console.error("GET /api/books Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = bookSchema.parse(body);

    const newBook = await BookService.createBook(validatedData);

    return NextResponse.json({ data: newBook }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/books Error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation Error", details: error.errors }, { status: 400 });
    }
    
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
