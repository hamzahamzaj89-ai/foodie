import { IOrderPayload } from "@/interface/IOrderPayLoad";
import { supabase } from "../lib/supabase";
import { toast } from "../shared/utils/toast";
import { IOrderCard } from "@/interface/IOrder";





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







export async function getOrders (status:string) {


const { data, error } = await supabase
  .from("orders")
  .select(`
    status,
    name:firstOrderName,
    imageUrl:firstOrderImage,
    total,
    itemsLength: order_items_length,
    createdAt: created_at
    `)
  .eq("status", status)
  .order("created_at", { ascending: false });


  if (error) {
    console.log(error)
     throw error
  }



  return data as IOrderCard[];




}
