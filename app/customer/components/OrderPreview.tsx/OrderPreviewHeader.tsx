import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

type Props = {
  orderId: string;
  placedAt: string;
};

export default function OrderDetailHeader({
  orderId,
  placedAt,
}: Props) {
  const router = useRouter();

  return (
    <View className="px-5 pt-5">
      {/* Back */}

      <Pressable
        onPress={() => router.back()}
        className="mb-6 h-11 w-11 items-center justify-center rounded-full bg-card"
      >
        <ChevronLeft
          size={24}
          color="white"
          strokeWidth={2.6}
        />
      </Pressable>

      {/* Title */}

      <Text className="font-poppins-bold text-3xl text-white">
        Order Details
      </Text>

      {/* Order Number */}

      <Text className="mt-2 font-poppins-semibold text-base text-[#FF8A2B]">
        {orderId}
      </Text>

      {/* Date */}

      <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
        Placed on {placedAt}
      </Text>
    </View>
  );
}