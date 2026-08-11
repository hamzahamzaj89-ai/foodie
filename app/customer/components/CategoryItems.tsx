import { FlatList, Pressable, Text, View } from "react-native";
import { useState } from "react";
import { categories } from "@/data/categories";

export default function Categories({
  category , 
  setCategory
}:{
  category:string
  setCategory:any
}) {

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
       
        paddingVertical: 16,
        columnGap: 10,
      }}
      data={categories}
      keyExtractor={(item) => item.id}
      
      renderItem={({ item }) => {
        const Icon = item.icon;
        const active = category === item.name;

        return (
          <Pressable
            onPress={() => setCategory( item.name)}
            className={`px-5 py-3 rounded-2xl flex-row items-center ${
              active
                ? "bg-[#FF8A2B]"
                : "bg-card"
            }`}
          >
            <Icon
              size={18}
              color={active ? "#050608" : "#FFFFFF"}
              strokeWidth={2.4}
            />

            <Text
              className={`ml-2 font-poppins-semibold text-sm ${
                active
                  ? "text-black"
                  : "text-white"
              }`}
            >
              {item.name === "" ? "All" : item.name}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}