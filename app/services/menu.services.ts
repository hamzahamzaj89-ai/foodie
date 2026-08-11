
import { supabase } from "@/app/lib/supabase";
import {IMenuItem} from "../../interface/IMenu";
import { IMenuCard } from "../../interface/IMenuCard";

const PAGE_SIZE = 10;

export async function getResturantMenus(restaurantId:string , category:string ,  page?: number ) {

    

    const start = page || 0

 let query  =   supabase
    .from("menu")
    .select(`
      id,
      title,
      price,
      image_url,
      average_rating,
      reviews_count,
      created_at
    `)
    .eq("restaurant_id" , restaurantId)
    .order("created_at", { ascending: false })
    .range(start, start + PAGE_SIZE);


    if (category !== "") {
        query.eq("category" , category)
    }





    const { data , error }  = await query;

   
 
   if (error) {
    console.log("helo")
   
    throw error;

   } 
   


   
   const hasNextPage = data.length > PAGE_SIZE;
     

   
console.log(hasNextPage)

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