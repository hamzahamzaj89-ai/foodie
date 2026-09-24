import { queryKeys } from "@/app/constants/queryKeys";
import { queryClient } from "@/app/lib/QueryClient";
import { saveToken } from "@/app/services/expoToken.services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "../utils/toast";

export function useSaveToken() {
  return useMutation({
    mutationFn: saveToken,

     onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.user.token
    });


    toast.success("Your token has been saved");
    

    
}

    
})
}


