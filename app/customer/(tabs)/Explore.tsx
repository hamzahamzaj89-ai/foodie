import React, { useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import SearchBar from "@/app/customer/components/SearchBar";
import FoodCard from "@/app/customer/components/FoodCard";
import SectionItems from "@/app/customer/components/SectionItems";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "../components/TabHeader";
import { useAppStore } from "@/app/shared/store/useAppStore";
import { ISection } from "@/interface/ISectionPage";
import { useInfiniteSectionMenus } from "@/app/shared/hooks/useMenu";
import StatusScreen from "../screens/StatusScreen";
import Loader from "@/app/shared/components/Loader";
import { router } from "expo-router";
import { useSectionMenusCount } from "@/app/shared/hooks/useSection";

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

export default function Explore() {
  const defaultSection = useAppStore((state) => state.defaultSection);

  const [selectedSection, setSelectedSection] =
    useState<ISection>(defaultSection);

  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
    isFetchingNextPage,
  } = useInfiniteSectionMenus(selectedSection.id, defaultSection.id);





  const {data:menuCount} = useSectionMenusCount(selectedSection.id , defaultSection.id)





  const menus = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) ?? [];
  }, [data]);

  if (error)
    return (
      <StatusScreen type="error" message={error.message} title={error.name} />
    );

  return (
    <View className="flex-1 bg-black ">
      <SafeAreaView className="flex-1 ">
        <View className="px-4">
          <TabHeader
            title={"Explore Now"}
            description={"Discover delicious meals near you"}
          />
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

          ListEmptyComponent={
            <>
              {isPending ? (
                <>
                  <View className="flex-1 justify-center items-center h-[180px]">
                    <Loader />
                  </View>
                </>
              ) : (
                <StatusScreen
                  type="error"
                  message="Not Found"
                  title="404 error"
                />
              )}
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

          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) {
              fetchNextPage();
            }
          }}

          ListHeaderComponent={
            <>
              {/* Header */}

              <View className="px-4 m pt-0">
                <View className="mt-0">
                  <SearchBar />
                </View>
              </View>

              {/* Sections */}

              <View className="mt-2 px-4">
                <SectionItems
                  selected={selectedSection}
                  onSelect={(text: ISection) => setSelectedSection(text)}
                />
              </View>

              {/* Current Section */}

              <View className="mb-[68px] mt-1 flex-row items-center justify-between px-5">
                <View>
                  <Text className="font-poppins-bold text-2xl text-white">
                    {selectedSection.title}
                  </Text>

                  <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
                    {menuCount?? 0} Meals Available
                  </Text>
                </View>

                <Pressable className="rounded-2xl bg-card px-4 py-3">
                  <Text className="font-poppins-semibold text-sm text-white">
                    View All
                  </Text>
                </Pressable>
              </View>
            </>
          }
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
      </SafeAreaView>
    </View>
  );
}
