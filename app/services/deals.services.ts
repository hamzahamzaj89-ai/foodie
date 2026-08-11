// services/deal.service.ts

import { supabase } from "../lib/supabase";
import { IDealCard } from "../../interface/IDealCard";
import {  IDealDetail } from "@/interface/IDeal";

const PAGE_SIZE = 5;

export async function getActiveDeals(page:number , restaurantId:string) {


   const start = page || 0
   const { data, error }  = await supabase
    .from("deals")
    .select(`
      id,
      image_url
    `)
    .eq("restaurant_id" , restaurantId)
    .filter("start_date", "lte", "now()")
    .filter("end_date", "gte", "now()")
    .order("created_at", { ascending: false })
    .range(start , start + PAGE_SIZE );


  if (error) {
    console.log(error)

    throw error;

  } 

  
   const hasNextPage = data.length > PAGE_SIZE;

    console.log(data)
   return {

      data: data  as IDealCard[],
      hasNextPage

   }

}






export async function getDeal(dealId: string) {
const { data , error } = await supabase
  .from("deals")
  .select(`
    id,
    restaurant_id,
    title,
    description,
    image_url,
    discount_percentage,
    fixed_discount,
    free_delivery,
    start_date,
    end_date,
    subtitle,
    is_active,
    created_at,
    updated_at,

    menus:deals_group(
      quantity,
      menuItem(
        id,
        title,
        description,
        image_url,
        price
      )
    )
  `)
  .eq("id", dealId)
  .single();

  if (error) {
    throw error;
  }


  if (!data) {
  throw new Error("deal item not found");
  return
}



  return data as IDealDetail;
}