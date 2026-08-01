import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

const sizes = [
  {
    id: "1",
    name: "Small",
    price: 0,
  },
  {
    id: "2",
    name: "Medium",
    price: 2,
  },
  {
    id: "3",
    name: "Large",
    price: 4,
  },
];

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] =
    useState("2");

  return (
    <View className="mt-8">
      {/* Section Title */}

      <View className="flex-row items-center justify-between">
        <Text className="font-poppins-semibold text-xl text-white">
          Size
        </Text>

        <Text className="font-poppins-medium text-sm text-zinc-500">
          Choose One
        </Text>
      </View>

      {/* Sizes */}

      <FlatList
        horizontal
        data={sizes}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 18,
          paddingBottom: 2,
        }}
        ItemSeparatorComponent={() => (
          <View style={{ width: 14 }} />
        )}
        renderItem={({ item }) => {
          const selected =
            item.id === selectedSize;

          return (
            <Pressable
              onPress={() =>
                setSelectedSize(item.id)
              }
              className={`w-[105px] rounded-3xl border p-4 ${
                selected
                  ? "border-[#FF8A2B] bg-[#1A1E23]"
                  : "border-white/5 bg-card"
              }`}
            >
              {/* Name */}

              <Text
                className={`text-center font-poppins-semibold text-base ${
                  selected
                    ? "text-[#FF8A2B]"
                    : "text-white"
                }`}
              >
                {item.name}
              </Text>

              {/* Price */}

              <Text className="mt-2 text-center font-poppins-medium text-xs text-zinc-400">
                {item.price === 0
                  ? "Included"
                  : `+$${item.price}`}
              </Text>

              {/* Indicator */}

              {selected && (
                <View className="mt-4 h-1 rounded-full bg-[#FF8A2B]" />
              )}
            </Pressable>
          );
        }}
      />
    </View>
  );
}