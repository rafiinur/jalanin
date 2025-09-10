import { z } from "zod";

export const travelPackageSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  total_cost: z.number(),
  duration_days: z.number().min(1),
  start_date: z.string(),
  end_date: z.string(),
  image_url: z.instanceof(File),
  group_id: z.string(),
  map_url: z.string().url(),
  category_ids: z.array(z.string()),
  destination_ids: z.array(z.string()),
  packing_items: z.array(z.string()),
  includes: z.array(z.string()),
  excludes: z.array(z.string()),
  highlights: z.array(z.string()),
});

export const destinationSchema = z.object({
  name: z.string().nonempty({ message: "Nama destinasi wajib diisi." }),
  description: z.string().nonempty({ message: "Deskripsi wajib diisi." }),
  city: z.string().nonempty({ message: "Kota wajib diisi." }),
  country: z.string().nonempty({ message: "Negara wajib diisi." }),
  price: z.coerce.number().min(1, { message: "Harga harus lebih dari 0." }),
  tags: z.string().min(1, { message: "Minimal satu tag dibutuhkan." }),
  is_pet_friendly: z.coerce.boolean().default(false),
  image_url: z.union([z.instanceof(File), z.string()]).optional(),
});

export const reviewSchema = z.object({
  rating: z.coerce.number().min(1, { message: "Rating harus diisi." }),
  comment: z.string().min(1, { message: "Komentar harus diisi." }),
  user_id: z.string().uuid(),
});

export const userSchema = z.object({
  full_name: z.string().min(1, { message: "Nama wajib diisi." }),
  email: z.string().email({ message: "Email tidak valid." }),
  password: z.string().min(8, { message: "Password minimal 8 karakter." }),
});
