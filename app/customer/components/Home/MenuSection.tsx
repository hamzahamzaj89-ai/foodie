import { View, Text, FlatList } from "react-native";
import React, { useMemo, useState } from "react";
import Loader from "@/app/shared/components/Loader";
import SearchBar from "../SearchBar";
import DealCarousel from "./DealCarousel";
import Categories from "../CategoryItems";
import FoodCard from "../FoodCard";
import { router } from "expo-router";
import { useInfiniteMenus } from "@/app/shared/hooks/useMenu";
import StatusScreen from "../../screens/StatusScreen";
import MenuItems from "../skeletons/Home/MenuItems";
import MenuItemSkeleton from "../skeletons/Home/MenuItemSkeleton";
import { IMenuCard } from "@/interface/IMenuCard";

const MenuSection = ({ restaurantId }: { restaurantId: string }) => {
  const [category, setCategory] = useState("");

  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
    isFetchingNextPage,
  } = useInfiniteMenus(restaurantId, category);

  if (error)
    return (
      <StatusScreen type="error" message={error.message} title={error.name} />
    );



  const menus = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) ?? [];
  }, [data]);

  const skeletons = Array.from({ length: 4 }, (_, index) => ({
    id: `skeleton-${index}`,
    index,
  }));

  interface Skeletons {
    id: string;
    index: number;
  }

  return (
    <View className="flex-1">
      <FlatList
        data={menus ?? []}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginBottom: 28,
        }}
        ListEmptyComponent={
          <>
             {
               isPending ? (
              <>

              <View className="flex-1 justify-center items-center h-[180px]">
                <Loader />
              </View>
              </>
            ) : (
            <StatusScreen type="error" message="Not Found" title="404 error" />
            )

             }
          </>
        }

        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <>
              <View className="h-[100px] w-[100%]">
                <Loader />
              </View>
            </>
          ) : null
        }

        ListHeaderComponent={
          <>
            <View className="px-4 ">
              <SearchBar />
            </View>

            <DealCarousel restaurantId={restaurantId} />

            <View className="px-4 pt-2 pb-14">
              <Categories category={category} setCategory={setCategory} />
            </View>
          </>
        }
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        renderItem={({ item, index }) => (
          <FoodCard
            onPress={() =>
              router.push({
                pathname: "/customer/(pages)/MenuDetail",
                params: {
                  menuId: item.id,
                },
              })
            }
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
};

export default MenuSection;
