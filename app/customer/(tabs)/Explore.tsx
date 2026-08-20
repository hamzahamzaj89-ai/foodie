import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

import SearchBar from "@/app/customer/components/SearchBar";
import FoodCard from "@/app/customer/components/FoodCard";
import SectionItems from "@/app/customer/components/SectionItems";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "../components/TabHeader";

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
  const [selectedSection, setSelectedSection] =  useState<string>("Popular");

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
        data={foods}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginBottom: 26,
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
              onSelect={(text:string) => setSelectedSection(text)}
            />
                  </View>

            {/* Current Section */}

            <View className="mb-10 mt-1 flex-row items-center justify-between px-5">
              <View>
                <Text className="font-poppins-bold text-2xl text-white">
                  {selectedSection}
                </Text>

                <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
                  18 Meals Available
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
        renderItem={({item , index}) => <FoodCard index={index} onPress={() => {}} />}
      />
    </SafeAreaView>
      </View>
  );
}