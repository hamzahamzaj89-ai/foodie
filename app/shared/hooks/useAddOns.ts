import { queryKeys } from "@/app/constants/queryKeys";
import { getAddOns } from "@/app/services/addOns.services";
import { useQuery } from "@tanstack/react-query";


export function useAddOns(restaurantId:string) {
  return useQuery({

    queryKey:  queryKeys.public.getAddOns(restaurantId),

    queryFn: () => getAddOns(restaurantId),

    
  });
}



