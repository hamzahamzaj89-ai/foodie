export default interface IMenu {
  id: string;

  category: string;

  title: string;

  description: string | null;

  image_url: string | null;

  price: number;

  old_price: number | null;

  average_rating: number;

  reviews_count: number;

  is_available: boolean;

  restaurant_id: string;

  created_at: string;

  updated_at: string;
}