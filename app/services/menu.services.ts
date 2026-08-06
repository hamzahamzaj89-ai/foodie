
import { supabase } from "@/app/lib/supabase";
import {IMenuItem} from "../../interface/IMenu";
import { IMenuCard } from "../../interface/IMenuCard";

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
    .range(start, start + PAGE_SIZE);


   
 
   if (error) throw error;

   
   const hasNextPage = data.length > PAGE_SIZE;


   return {

      data: data  as IMenuCard[],
      hasNextPage

   }




}




export async function getMenu(menuId: string) {
  const { data, error } = await supabase
    .from("menu")
    .select(`
      id,
      title,
      description,
      calories,

      old_price,
      average_rating,
      reviews_count,

      price,
      image_url,

      menu_customization_group(
        display_order,
        
        customization_group(
          id,
          name,
          description,
          required,
          min_selection,
          max_selection,

          customizations(
            id,
            name,
            description,
            image_url,
            price
          )
        )
      )
    `)
    .eq("id", menuId)
    .order("display_order", {
      referencedTable: "menu_customization_group",
      ascending: true,
    })
    .single();

  if (error) {
    throw error;
  }


  
  if (!data) {
  throw new Error("menu item not found");
}



  return data as IMenuItem;
}