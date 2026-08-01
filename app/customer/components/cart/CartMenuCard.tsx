import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import {
  Minus,
  Plus,
} from "lucide-react-native";

export default function CartMenuCard() {
  return (
    <View
      className="flex-row items-center rounded-3xl border border-border bg-card p-4"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 18,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        elevation: 5,
      }}
    >
      {/* Image */}

      <View className="h-24 w-24 relative items-center justify-center rounded-2xl bg-[#0F1115]">
        <Image
          source={require("@/assets/images/burger.png")}
          resizeMode="contain"
          className="h-24 w-[90px] absolute "
        />
      </View>

      {/* Details */}

      <View className="ml-4 flex-1 justify-center">
        <Text
          numberOfLines={1}
          className="font-poppins-semibold text-lg text-white"
        >
          Cheese Burger
        </Text>

        <Text
          numberOfLines={1}
          className="mt-1 font-poppins-medium text-xs text-zinc-400"
        >
          Double Patty • Extra Cheese
        </Text>

        <Text className="mt-3 font-poppins-bold text-xl text-white">
          $14.99
        </Text>
      </View>

      {/* Quantity */}

      <View className="ml-3 items-center">
        <Pressable className="h-9 w-9 items-center justify-center rounded-full bg-[#20242B]">
          <Minus
            size={18}
            color="white"
            strokeWidth={2.5}
          />
        </Pressable>

        <Text className="my-3 font-poppins-bold text-base text-white">
          2
        </Text>

        <Pressable className="h-9 w-9 items-center justify-center rounded-full bg-[#FF8A2B]">
          <Plus
            size={18}
            color="#050608"
            strokeWidth={2.8}
          />
        </Pressable>
      </View>
    </View>
  );
}