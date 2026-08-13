import { supabase } from "../lib/supabase";
import { IAddOns } from "../../interface/IAddOns";

export async function getAddOns(restaurantId:string) {
  const { data, error } = await supabase
    .from("add_ons")
    .select(`
      id,
      name,
      description,
      price,
      image_url
    `)
    .eq("restaurant_id" , restaurantId)
  
  if (error) {
    console.log(error)
    throw error;
  }


  return data as IAddOns[];
}