import { useQuery } from "@tanstack/react-query";
import { getResturant } from "@/app/services/resturant.services";
import { queryKeys } from "@/app/constants/queryKeys";

export function useResturant(restaurantId: string) {
  return useQuery({
    queryKey:  queryKeys.public.restaurant(restaurantId),

    queryFn: () => getResturant(restaurantId),

    enabled: !!restaurantId,

    
  });
}