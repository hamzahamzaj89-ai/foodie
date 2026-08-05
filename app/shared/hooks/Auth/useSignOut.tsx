import { useMutation } from "@tanstack/react-query";

import { signIn, signOut } from "@/app/services/auth.services";
import { toast } from "../../utils/toast";
import { queryClient } from "@/app/lib/QueryClient";

export function useSignOut() {
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
           queryClient.removeQueries({
                queryKey: ["user"],
       });

          toast.success("You have been LogOut")

    },


    onError: (error) => {
          
        toast.error("Attempt failed" , "Please Try Again")
    }
  });
}