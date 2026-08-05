// services/deal.service.ts

import { supabase } from "../lib/supabase";
import { IDealCard } from "../shared/interface/IDealCard";

const PAGE_SIZE = 10;

export async function getActiveDeals(page:number) {


    const start = page || 0
   const { data, error }  = await supabase
    .from("deals")
    .select(`
      id,
      title,
      description,
      banner_url,
      discount_percentage,
      start_date,
      end_date,
      created_at
    `)
    .filter("start_date", "lte", "now()")
    .filter("end_date", "gte", "now()")
    .order("created_at", { ascending: false })
    .range(start , start + PAGE_SIZE + 1);


  if (error) throw error;


  return data
}