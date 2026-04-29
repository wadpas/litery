import { z } from "zod";

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  brand: z.string().min(3, "Brand must be at least 3 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  stock: z.coerce.number().min(1, "Stock must be at least 1"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  isFeatured: z.boolean(),
  banner: z.string().optional(),
  price: z
    .string()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(value),
      "Price must two decimal places",
    ),
});

export const insertBookSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  author: z.string().min(3, "Author must be at least 3 characters long"),
  description: z
    .string()
    .min(30, "Description must be at least 30 characters long"),
  year: z.coerce.number().min(4, "Year must be a valid number"),
  genre: z.array(z.string()).min(1, "At least one genre is required"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  price: z.coerce.number().min(3, "Price must be at least 3 characters long"),
});
