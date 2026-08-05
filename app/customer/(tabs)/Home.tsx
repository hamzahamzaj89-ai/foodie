import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlassCard from "../components/FoodCard";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import DealCarousel from "../components/Home/DealCarousel";
import Categories from "../components/CategoryItems";
import { Bell, ShoppingBag } from "lucide-react-native";
import TabHeader from "../components/TabHeader";
import { useResturant } from "@/app/shared/hooks/useResturant";
import { useInfiniteMenus } from "@/app/shared/hooks/useInfiniteMenu";
import IMenu from "@/app/shared/interface/IMenu";
import { IMenuCard } from "@/app/shared/interface/IMenuCard";

const Home = () => {
  const resturantId = "27913ca5-c2a2-4174-9ef1-73e466e50410";

  const foods = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];

  const { data: restaurant, error } = useResturant(resturantId);

  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error: menuError,
    isFetchingNextPage,
  } = useInfiniteMenus(resturantId);

  const menus = useMemo(() => {
    return data?.pages.flatMap((page) => page) ?? [];
  }, [data]);

  return (
    <>
      <View className="flex-1 bg-black ">
        <SafeAreaView className="flex-1 ">
          <View className=" flex flex-1   mt-[-8px]">
            <View className="flex flex-row px-4 pt-0">
              <TabHeader Home={true} Icon1={Bell} Icon2={ShoppingBag} />
            </View>

            <FlatList
              data={menus}
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
              ListHeaderComponent={
                <>
                  <View className="px-4 ">
                    <SearchBar />
                  </View>

                  <DealCarousel />

                  <View className="px-4 pt-2 pb-8">
                    <Categories />
                  </View>
                </>
              }
              renderItem={({ item, index }) => (
                <FoodCard item={item} index={index} />
              )}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Home;
