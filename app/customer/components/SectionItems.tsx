import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

const sections = [
  "Popular",
  "Top Rated",
  "New Arrival",
  "Best Seller",
  "Chef's Choice",
  "Most Loved",
  "Budget Meals",
];

export default function SectionItems({selected , onSelect}: {selected:string , onSelect:(text:string) => void}) {

  return (
    <FlatList
      horizontal
      data={sections}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 12,
      }}
      ItemSeparatorComponent={() => (
        <View style={{ width: 12 }} />
      )}

      renderItem={({ item }) => {
        const active = selected === item;

        return (
          <Pressable
            onPress={() => onSelect(item)}
            className="py-3.5 px-4"
            style={{
              borderRadius: 16,

              justifyContent: "center",
              alignItems: "center",

              backgroundColor: active
                ? "#FF8A2B"
                : "#111317",


             

             



              

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
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}