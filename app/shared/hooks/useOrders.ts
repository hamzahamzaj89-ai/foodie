import { queryKeys } from "@/app/constants/queryKeys";
import { queryClient } from "@/app/lib/QueryClient";
import { createOrder } from "@/app/services/orders.services";
import { useMutation } from "@tanstack/react-query";






export function useCreateOrders() {
  return useMutation({
    mutationFn: createOrder,

     onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.user.orders
    });
}

    
})
}

