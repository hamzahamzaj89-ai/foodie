import { supabase } from "@/app/lib/supabase";

export async function getResturant(restaurantId: string) {
  const { data, error } = await supabase
    .from("restaurants")
    .select(`
      id,
      name,
      description,
      banner_url,
      logo_url,
      address,
      rating,
      reviews_count,
      delivery_fee,
      estimated_delivery_time,
      minimum_order,
      is_open
    `)
    .eq("id", restaurantId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}