import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

import {
  ChevronDown,
  Minus,
  Plus,
} from "lucide-react-native";

import ViewDealItems from "./ViewDealItems";
import Counter from "../Counter";

export default function CartDealCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <View
      className="overflow-hidden rounded-3xl bg-card"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        elevation: 8,
      }}
    >
      {/* Banner */}

      <Image
        source={require("@/assets/images/deal1.jpeg")}
        resizeMode="cover"
        className="h-44 w-full"
      />

      {/* Content */}

      <View className="p-5">
        <Text className="font-poppins-bold text-2xl text-white">
          Family Feast Combo
        </Text>

        <Text className="mt-1 font-poppins-medium text-base text-zinc-300">
2 Burgers • 2 Fries • 2 Drinks        </Text>


        <View className="mt-5 mb-4 self-start rounded-full bg-[#1C2621] px-4 py-2">
          <Text className="font-poppins-semibold text-sm text-[#44D17A]">
            You Save $8.50
          </Text>
        </View>

        {/* Divider */}


        {/* Expand */}

        <Pressable
          onPress={() => setExpanded(!expanded)}
          className="flex-row items-center justify-between"
        >
          <Text className="font-poppins-semibold text-base text-[#FF8A2B]">
            View Included Items
          </Text>

          <ChevronDown
            size={20}
            color="#FF8A2B"
            style={{
              transform: [
                {
                  rotate: expanded ? "180deg" : "0deg",
                },
              ],
            }}
          />
        </Pressable>

        {expanded && (
          <View className="mt-5">
            <ViewDealItems />
          </View>
        )}

        {/* Divider */}

        <View className="my-5 h-[1px] bg-border" />

        {/* Footer */}

        <View className="flex-row items-center justify-between">
          <Text className="font-poppins-bold text-3xl text-white">
            $34.99
          </Text>

            <View className="-mr-4">
                <Counter
          quantity={1}
          onIncrease={() => {}}
          onDecrease={() => {}}
          
          />
            </View>
        </View>
      </View>
    </View>
  );
}