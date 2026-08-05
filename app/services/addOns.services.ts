import { supabase } from "../lib/supabase";
import { IAddOns } from "../../interface/IAddOns";

export async function getAddOns() {
  const { data, error } = await supabase
    .from("addOns")
    .select(`
      id,
      name,
      description,
      price,
      image_url
    `)
  
  if (error) {
    throw error;
  }


  return data as IAddOns[];
}