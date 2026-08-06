import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getActiveDeals, getDeal } from "@/app/services/deals.services";
import { useState } from "react";
import { queryKeys } from "@/app/constants/queryKeys";



interface UseDealsProps {
  restaurantId: string;
}

export function useDeals({ restaurantId }: UseDealsProps) {
  return useQuery({
    queryKey: queryKeys.public.deals(restaurantId),

    queryFn: () => getActiveDeals(0),

    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useInfiniteDeals({ restaurantId }: UseDealsProps) {
  return useInfiniteQuery({
    queryKey: queryKeys.public.infiniteDeals(restaurantId),

    queryFn: ({ pageParam }) => getActiveDeals(pageParam),

    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      // No more data
      if (!lastPage.hasNextPage) {
        return undefined;
      }

      // Next offset
      return allPages.flat().length;
    },

    staleTime: 1000 * 60 * 5, // 5 minutes
  });



}


export function useDealItem(dealId: string) {
  return useQuery({
    queryKey:  queryKeys.public.deal(dealId),

    queryFn: () => getDeal(dealId),

    enabled: !!dealId,
  });
}


