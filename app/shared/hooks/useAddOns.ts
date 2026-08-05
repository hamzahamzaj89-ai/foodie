import { queryKeys } from "@/app/constants/queryKeys";
import { getAddOns } from "@/app/services/addOns.services";
import { useQuery } from "@tanstack/react-query";


export function useAddOns() {
  return useQuery({
    queryKey:  queryKeys.public.addOns,

    queryFn: () => getAddOns(),
    staleTime: 1000 * 60 * 60, // 1 hour

    
  });
}



