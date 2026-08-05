import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getActiveDeals } from "@/app/services/deals.services";
import { useState } from "react";
import { queryKeys } from "@/app/constants/queryKeys";

type UseDealsProps = {
  infinite?: boolean;
};

export function useDeals({
  infinite = false,
}: UseDealsProps = {}) {



  const query = useQuery({
    queryKey: queryKeys.public.deals(infinite),

    queryFn: async () => {
      const result = await getActiveDeals(0);

      return result;
    },

    enabled: !infinite,
  });





 
 
 
 

 
 
 
 
    useInfiniteQuery({
     queryKey:  queryKeys.public.deals(infinite),
 
     queryFn: ({ pageParam }) => getActiveDeals(pageParam),
 
       initialPageParam: 0,
 
     getNextPageParam(data) {
 
       if (data && data.length < 11) {
         return undefined;
       }
 
       return data && data.length;
 
     },
   });
 
 
 
  return infinite ? useInfiniteQuery : query;
}