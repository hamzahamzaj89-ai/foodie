
import { supabase } from "@/app/lib/supabase";
import IMenu from "../shared/interface/IMenu";
import { IMenuCard } from "../shared/interface/IMenuCard";

const PAGE_SIZE = 10;

export async function getResturantMenus(page?: number) {

    

    const start = page || 0

  const { data , error } =  await supabase
    .from("menu")
    .select(`
      id,
      title,
      price,
      image_url,
      rating,
      reviews_count,
      created_at
    `)
    .order("created_at", { ascending: false })
    .range(start, start + PAGE_SIZE + 1);


   
 
   if (error) throw error;

   

    return data  as IMenuCard[]



}