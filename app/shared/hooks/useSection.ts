import { queryKeys } from "@/app/constants/queryKeys";
import { getRestaurantSections, getSectionMenusCount } from "@/app/services/sections.services";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useState } from "react";




export function useInfiniteSections(resturantId: string) {

  const [page, setPage] = useState(0);

  return useInfiniteQuery({
    queryKey: queryKeys.public.sections(
      resturantId as string,
    ),

    queryFn: ({ pageParam }) =>
      getRestaurantSections(resturantId, pageParam),

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






export function useSectionMenusCount(sectionId:string , defaultSectionId:string) {


        return useQuery({
    queryKey: queryKeys.public.sectionMenusCount(sectionId),

    queryFn: () => getSectionMenusCount(sectionId , defaultSectionId),

    enabled: !!sectionId,
  });
}






