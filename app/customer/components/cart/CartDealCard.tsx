import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ChevronDown, Minus, Plus } from "lucide-react-native";
import ViewDealItems from "./ViewDealItems";

export default function CartDealCard() {
  const [show, setShow] = useState(false);

  return (
    <View
      className="rounded-3xl border border-border bg-card p-4"
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
      {/* Deal Header */}

      <View className="flex-row">
        {/* Deal Image */}

        <View className="h-24 w-24 items-center justify-center rounded-2xl bg-[#0F1115]">
          <Image
            source={require("@/assets/images/deal1.jpeg")}
            resizeMode="contain"
            className="h-20 w-20 rounded-[16px]"
          />
        </View>

        {/* Deal Info */}

        <View className="ml-4 flex-1 justify-center">
          <View className="self-start rounded-full bg-[#FF8A2B]/15 px-3 py-1">
            <Text className="font-poppins-semibold text-[11px] text-[#FF8A2B]">
              DEAL
            </Text>
          </View>

          <Text
            numberOfLines={1}
            className="mt-2 font-poppins-semibold text-lg text-white"
          >
            Family Feast Combo
          </Text>

          <Text
            numberOfLines={1}
            className="mt-1 font-poppins-medium text-xs text-zinc-400"
          >
            2 Burgers • 2 Fries • 2 Drinks
          </Text>

          <Text className="mt-2 font-poppins-bold text-xl text-white">
            $34.99
          </Text>
        </View>

        {/* Quantity */}

        <View className="ml-3 items-center justify-center">
          <Pressable className="h-9 w-9 items-center justify-center rounded-full bg-[#20242B]">
            <Minus size={18} color="white" />
          </Pressable>

          <Text className="my-3 font-poppins-bold text-base text-white">1</Text>

          <Pressable className="h-9 w-9 items-center justify-center rounded-full bg-[#FF8A2B]">
            <Plus size={18} color="#050608" />
          </Pressable>
        </View>
      </View>

      {/* Divider */}

      <View className="my-4 h-[1px] bg-white/5" />

      {/* Bottom */}

      <View className="flex-row items-center justify-between">
        <View>
          <Text className="font-poppins-medium text-xs text-zinc-400">
            You Save
          </Text>

          <Text className="font-poppins-semibold text-[#44D17A]">$8.50</Text>
        </View>

        <Pressable
          onPress={() => setShow(!show)}
          className="flex-row items-center"
        >
          <Text className="mr-1 font-poppins-medium text-sm text-[#FF8A2B]">
            View Included Items
          </Text>

          <ChevronDown size={18} color="#FF8A2B" />
        </Pressable>
      </View>

      {show && (
        <View className="pt-4 px-2">
          <ViewDealItems />
        </View>
      )}
    </View>
  );
}
