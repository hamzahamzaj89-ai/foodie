import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMenu, getResturantMenus } from "@/app/services/menu.services";
import { queryKeys } from "@/app/constants/queryKeys";
import { useState } from "react";
import { useResturantStore } from "../store/useResturantStore";
import { toast } from "../utils/toast";

export function useInfiniteMenus(resturantId: string) {



    const selectedRestaurant = useResturantStore((state) => state.selectedRestaurant)

const [page , setPage] = useState(0)




  return useInfiniteQuery({
    queryKey:  queryKeys.public.manus(selectedRestaurant?.id as string),

    queryFn: ({ pageParam }) => getResturantMenus(pageParam),

      initialPageParam: 0,

    getNextPageParam(lastPage , allPages) {

      if (!lastPage.hasNextPage) {
        return undefined;
      }

        // Next offset
      return allPages.flat().length;
    },
  });


}




export function useMenuItem(menuId: string) {
  return useQuery({
    queryKey:  queryKeys.public.menu(menuId),

    queryFn: () => getMenu(menuId),

    enabled: !!menuId,

    
  });
}



