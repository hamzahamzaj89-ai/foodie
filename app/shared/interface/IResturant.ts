export default interface IRestaurant {
  id: string;

  name: string;

  slug: string;

  description: string | null;

  logo_url: string | null;

  cover_image_url: string | null;

  address: string;

  phone: string | null;

  email: string | null;

  opening_time: string | null;

  closing_time: string | null;

  delivery_fee: number;

  is_open: boolean;

  is_active: boolean;

  created_at: string;

  updated_at: string;
}