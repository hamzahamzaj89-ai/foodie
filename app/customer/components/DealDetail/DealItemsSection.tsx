import React from "react";
import {
  FlatList,
  Text,
  View,
} from "react-native";

import DealItem from "./DealItem";

const includedItems = [
  {
    id: "1",
    image: require("@/assets/images/burger.png"),
    name: "Cheese Burger",
    quantity: 2,
  },
  {
    id: "2",
    image: require("@/assets/images/burger.png"),
    name: "Large Fries",
    quantity: 2,
  },
  {
    id: "3",
    image: require("@/assets/images/burger.png"),
    name: "Coca-Cola",
    quantity: 4,
  },
  {
    id: "4",
    image: require("@/assets/images/burger.png"),
    name: "Chicken Nuggets",
    quantity: 1,
  },
];

export default function DealItemsSection() {
  return (
    <View className="mt-8 ">
      {/* Section Title */}

      <Text className="font-poppins-bold text-xl text-white">
        What's Included
      </Text>

      <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
        Everything you'll receive with this deal.
      </Text>

      <FlatList
        scrollEnabled={false}
        data={includedItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          marginTop: 18,
        }}
        renderItem={({ item }) => (
          <DealItem
            image={item.image}
            name={item.name}
            quantity={item.quantity}
          />
        )}
      />
    </View>
  );
}