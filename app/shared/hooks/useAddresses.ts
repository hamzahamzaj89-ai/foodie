import { queryKeys } from "@/app/constants/queryKeys";
import { queryClient } from "@/app/lib/QueryClient";
import { getUserAddresses, insertAddress } from "@/app/services/addresses.services";
import { useMutation, useQuery } from "@tanstack/react-query";


export function useUserAddresses() {
  return useQuery({

    queryKey:  queryKeys.public["addresses"],

    queryFn: () => getUserAddresses(),

    
  });

}



export function useInsertAddress() {
  return useMutation({
    mutationFn: insertAddress,

     onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.public.addresses
    });
}

    
})
}

