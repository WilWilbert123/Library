export interface Author {
  id: string;
  name: string;
  biography?: string | null;
  created_at: string;
}

export interface Publisher {
  id: string;
  name: string;
  address?: string | null;
  contact_email?: string | null;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string | null;
  color_code?: string | null;
}

export interface Subject {
  id: string;
  name: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string | null;
  isbn?: string | null;
  description?: string | null;
  publisher_id?: string | null;
  publication_year?: number | null;
  edition?: string | null;
  language?: string | null;
  pages?: number | null;
  category_id?: string | null;
  call_number?: string | null;
  cover_image_url?: string | null;
  created_at: string;
  updated_at: string;
  
  // Relations
  publisher?: Publisher | null;
  category?: Category | null;
  authors?: Author[];
  subjects?: Subject[];
  copies_count?: number;
  available_copies_count?: number;
}
