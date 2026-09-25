import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  subtitle: z.string().max(255).optional().nullable(),
  isbn: z.string().max(20).optional().nullable(),
  description: z.string().optional().nullable(),
  publisher_id: z.string().uuid("Invalid publisher").optional().nullable(),
  publication_year: z.number().int().min(1000).max(9999).optional().nullable(),
  edition: z.string().max(50).optional().nullable(),
  language: z.string().max(50).optional().nullable(),
  pages: z.number().int().positive().optional().nullable(),
  category_id: z.string().uuid("Invalid category").optional().nullable(),
  call_number: z.string().max(100).optional().nullable(),
  cover_image_url: z.string().url("Invalid URL").optional().nullable(),
  
  // Relations for creation
  author_ids: z.array(z.string().uuid("Invalid author")).optional(),
  subject_ids: z.array(z.string().uuid("Invalid subject")).optional(),
});

export type BookFormData = z.infer<typeof bookSchema>;
