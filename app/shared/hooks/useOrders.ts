import { queryKeys } from "@/app/constants/queryKeys";
import { queryClient } from "@/app/lib/QueryClient";
import { createOrder, getOrders } from "@/app/services/orders.services";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";


export function useInfiniteOrders( status: string[]) {

  const [page, setPage] = useState(0);



  return useInfiniteQuery({
    queryKey: queryKeys.user.statusOrders(status),

    queryFn: ({ pageParam }) =>
      getOrders(status, pageParam),

    initialPageParam: 0,

    enabled: status.length > 0,
    
    getNextPageParam(lastPage, allPages) {
      if (!lastPage.hasNextPage) {
        return undefined;
      }

      // Next offset
      return allPages.reduce((total, page) => total + page.data.length, 0);


    },
  });
}



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





