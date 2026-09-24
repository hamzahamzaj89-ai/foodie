import { supabase } from "../lib/supabase";
import { toast } from "../shared/utils/toast";



export const saveToken = async ({expoPushToken , userId , platform , permission}: {expoPushToken: string | null , userId: string | undefined , platform: 'android' | 'ios' , permission: "granted" | "denied" | "undetermined"}) => {
  

   if (!userId) {
   
       return toast.error("User is not authorized for the notifications")
    
   }



   if (!expoPushToken) {
     return toast.error("Token is null")
   }



   console.log("hello")

const {data , error } = await supabase.rpc("sync_push_token", {
  p_token: expoPushToken,
  p_platform: platform,
  p_permission_granted: permission,
});



if (error) {
  console.log(error);
  return error;

}



return data;

} 


