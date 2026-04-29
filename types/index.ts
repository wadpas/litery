import { z } from "zod";
import { insertBookSchema, insertProductSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Book = z.infer<typeof insertBookSchema> & {
  id: string;
  price: number;
  rating: string;
  numReviews: number;
  isFeatured: boolean;
  createdAt: Date;
};
