import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { getMenu, getResturantMenus, rateMenu, searchMenus } from "@/app/services/menu.services";
import { queryKeys } from "@/app/constants/queryKeys";
import { useState } from "react";
import { useResturantStore } from "../store/useResturantStore";
import { toast } from "../utils/toast";
import { getSectionsMenus } from "@/app/services/sections.services";
import { queryClient } from "@/app/lib/QueryClient";
import { IMenuItem } from "@/interface/IMenu";

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





export function useInfiniteSectionMenus(sectionId: string , defaultSectionId:string) {

  return useInfiniteQuery({
    queryKey: queryKeys.public.sectionMenus(
      sectionId as string,
    ),




    queryFn: ({ pageParam }) =>
      getSectionsMenus(sectionId, defaultSectionId,   pageParam),

    initialPageParam: 0,

    enabled: !!sectionId,
    
    getNextPageParam(lastPage, allPages) {
      if (!lastPage.hasNextPage) {
        return undefined;
      }

      // Next offset
      return allPages.reduce((total, page) => total + page.data.length, 0);
    },
  });
}










export function useInfiniteSearchMenus(searchText: string) {

  const [page, setPage] = useState(0);

  return useInfiniteQuery({
    queryKey: queryKeys.public.searchMenus(
      searchText as string,
    ),

    queryFn: ({ pageParam }) =>
      searchMenus(searchText, pageParam),

    initialPageParam: 0,

    enabled: searchText.trim() !== "",
    
    getNextPageParam(lastPage, allPages) {
      if (!lastPage.hasNextPage) {
        return undefined;
      }

      // Next offset
      return allPages.reduce((total, page) => total + page.data.length, 0);
    },
  });
}





export function useRateMenu(menuId:string , rating:number) {
  return useMutation({
    mutationFn: rateMenu,


    
     onSuccess: () => {
    queryClient.setQueryData(
      queryKeys.public.menu(menuId),
      (oldData:IMenuItem) => {
        if (!oldData) return oldData;


        const oldRating = oldData.average_rating ?? 0;
        const oldCount = oldData.reviews_count ?? 0;

        if (!oldData.user_rating) {
              

           const newAverage =
          (oldRating * oldCount + rating) / (oldCount + 1);

          return {
          ...oldData,
          user_rating: rating,

          average_rating: Number(newAverage.toFixed(2)),
          reviews_count: oldCount + 1,
        };


        }


        const updatedAverage =
  (((oldRating * oldCount) - oldData.user_rating) + rating) / oldCount;


       return {
          ...oldData,
          user_rating: rating,

          average_rating: Number(updatedAverage.toFixed(2)),
          reviews_count: oldCount,
        };



        

       

        
      }
    );
        
    toast.success("rating addded successfully")
    
}

    
})
}