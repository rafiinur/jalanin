export type Destination = {
  id?: string;
  name: string;
  description: string;
  city: string;
  country: string;
  price: number;
  tags: string;
  is_pet_friendly: boolean;
  image_url: string;
  created_by?: string;
};
