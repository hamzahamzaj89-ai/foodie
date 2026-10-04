import { useMutation } from "@tanstack/react-query";

import { signIn } from "@/app/services/auth.services";
import { toast } from "../../utils/toast";
import { signInWithGoogle } from "@/app/lib/google-sign-in";

export function useSignIn() {
  return useMutation({
    mutationFn: signIn,
  });
}









export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: signInWithGoogle,

      onSuccess: (data:any) =>  {
          
         toast.success("success");


        console.log(data);

   
      return;
    },
      onError: (error:any) =>  {
        console.error('Google login error:', error);

     }
   
  },


  
  

);
};