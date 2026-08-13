import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMenu, getResturantMenus } from "@/app/services/menu.services";
import { queryKeys } from "@/app/constants/queryKeys";
import { useState } from "react";
import { useResturantStore } from "../store/useResturantStore";
import { toast } from "../utils/toast";

export function useInfiniteMenus(resturantId: string, category: string) {

  const [page, setPage] = useState(0);

  return useInfiniteQuery({
    queryKey: queryKeys.public.menus(
      resturantId as string,
      category,
    ),

    queryFn: ({ pageParam }) =>
      getResturantMenus(resturantId, category, pageParam),

    initialPageParam: 0,

    enabled: !!resturantId,
    
    getNextPageParam(lastPage, allPages) {
      if (!lastPage.hasNextPage) {
        return undefined;
      }

      // Next offset
      return allPages.reduce((total, page) => total + page.data.length, 0);
    },
  });
}

export function useMenuItem(menuId: string) {
  return useQuery({
    queryKey: queryKeys.public.menu(menuId),

    queryFn: () => getMenu(menuId),

    enabled: !!menuId,
  });
}
