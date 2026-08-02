import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import {
  BellOff,
  ArrowRight,
} from "lucide-react-native";

export default function NotificationEmpty() {
  return (
    <View className="flex-1 items-center justify-center px-8">
      {/* Icon */}

      <View className="h-24 w-24 items-center justify-center rounded-full bg-card">
        <BellOff
          size={40}
          color="#FF8A2B"
          strokeWidth={2}
        />
      </View>

      {/* Title */}

      <Text className="mt-8 text-center font-poppins-bold text-2xl text-white">
        No Notifications Yet
      </Text>

      {/* Subtitle */}

      <Text className="mt-3 text-center font-poppins-medium text-base leading-6 text-zinc-400">
        We'll notify you about your orders,
        exclusive deals and important updates.
      </Text>

      {/* Button */}

      <Pressable className="mt-8 flex-row items-center rounded-2xl bg-[#FF8A2B] px-6 py-4">
        <Text className="font-poppins-semibold text-base text-[#050608]">
          Browse Menu
        </Text>

        <ArrowRight
          size={18}
          color="#050608"
          strokeWidth={2.8}
          style={{
            marginLeft: 8,
          }}
        />
      </Pressable>
    </View>
  );
}