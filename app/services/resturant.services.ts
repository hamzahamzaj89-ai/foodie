import { supabase } from "@/app/lib/supabase";

export async function getResturant(restaurantId: string) {
  const { data, error } = await supabase
    .from("restaurants")
    .select(`
      id,
      name,
      description,
      logo_url,
      address,
      delivery_fee,
      is_open
    `)
    .eq("id", restaurantId)
    .single();

  if (error) {
    throw error;
  }

  console.log(data)

  return data;
}