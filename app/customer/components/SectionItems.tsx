import { useInfiniteSections } from "@/app/shared/hooks/useSection";
import { useResturantStore } from "@/app/shared/store/useResturantStore";
import React, { useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import StatusScreen from "../screens/StatusScreen";
import Loader from "@/app/shared/components/Loader";
import SectionSkeletonList from "./skeletons/Sections/SectionSkeletonList";
import { useAppStore } from "@/app/shared/store/useAppStore";


export default function SectionItems({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (text: string) => void;
}) {

  const defaultSection = useAppStore((state) => state.defaultSection)
  const restaurantId = useResturantStore(
    (state) => state.selectedRestaurant?.id,
  );

  if (!restaurantId) {
    return <></>;
  }

  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
    isFetchingNextPage,
  } = useInfiniteSections(restaurantId as string);

  const sections = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) ?? [];
  }, [data]);


  if (error) return <></>;

  return (
    <FlatList
      horizontal
      data={sections.length > 0 ? [defaultSection , ...sections]: []}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 12,
      }}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />}

      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}

      ListEmptyComponent={
        <>
          {isPending ? (
            <>
              <SectionSkeletonList/>
            </>
          ) : (

            <>

                          <SectionSkeletonList/>

            </>

          )}
        </>
      }

      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isFetchingNextPage ? (
          <>
                        <SectionSkeletonList/>

          </>
        ) : null
      }

      renderItem={({ item }) => {
        const active = selected === item.id;

        return (
          <Pressable
            onPress={() => onSelect(item.id)}
            className="py-3.5 px-4"
            style={{
              borderRadius: 16,

              justifyContent: "center",
              alignItems: "center",

              backgroundColor: active ? "#FF8A2B" : "#111317",

              elevation: active ? 6 : 2,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: active ? "#050608" : "#FFFFFF",
              }}
            >
              {item.title}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}
