import { z } from "zod";

export const travelPackageSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  total_cost: z.coerce.number(),
  duration_days: z.coerce.number(),
  start_date: z.string(),
  end_date: z.string(),
  image_url: z.string().url(),
  created_by: z.string().uuid(),
  group_id: z.string().uuid(),
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
