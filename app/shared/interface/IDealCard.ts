export interface IDealCard {
  id: string;

  title: string;

  description: string | null;

  banner_url: string;

  discount_percentage: number;

  start_date: string;

  end_date: string;

  created_at: string;
}