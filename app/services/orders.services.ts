import { IOrderPayload } from "@/interface/IOrderPayLoad";
import { supabase } from "../lib/supabase";
import { toast } from "../shared/utils/toast";





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
