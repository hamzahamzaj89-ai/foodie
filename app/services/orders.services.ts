import { IOrderPayload } from "@/interface/IOrderPayLoad";
import { supabase } from "../lib/supabase";
import { toast } from "../shared/utils/toast";
import { IOrderCard } from "@/interface/IOrder";


const PAGE_SIZE = 4;



export async function createOrder(order:IOrderPayload) {


   if (!order.address || !order.restaurantId) {
           return  toast.error("Please provides all the detail for the order")
   }




 const { data, error } = await supabase.rpc("create_order", {
  p_order: order,
});



  if (error) {
    console.log(error)
    throw error;
  }


  console.log(data)


  return data as any


}








export async function getOrders (status:string[] , page:number) {

const start = page ?? 0;

console.log(status)

const { data, error } = await supabase
  .from("orders")
  .select(`
    id,
    status,
    name:first_order_name,
    imageUrl:first_order_image,
    total,
    itemsLength: order_items_length,
    createdAt: created_at,
    dealIncluded: deal_included
    `)
  .in("status", status)
  .order("created_at", { ascending: false })
  .range(start, start + PAGE_SIZE);


  if (error) {
    console.log(error)
     throw error
  }



     
     const hasNextPage = data.length > PAGE_SIZE;
       
  
     
  console.log(hasNextPage)
  
     return {
  
        data: data  as IOrderCard[],
        hasNextPage
  
     }
  






}
