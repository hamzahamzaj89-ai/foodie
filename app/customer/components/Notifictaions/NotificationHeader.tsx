import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

export default function NotificationHeader() {
  return (
    <View className="px-5 pt-5">
      {/* Top Row */}

      <View className="flex-row items-center justify-between">
        <View>
          <Text className="font-poppins-bold text-3xl text-white">
            Notifications
          </Text>

          <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
            Stay updated with your latest activity
          </Text>
        </View>

        <Pressable
          className="rounded-full bg-card px-4 py-2"
          android_ripple={{
            color: "rgba(255,255,255,0.08)",
            borderless: false,
          }}
        >
          <Text className="font-poppins-semibold text-sm text-[#FF8A2B]">
            Clear All
          </Text>
        </Pressable>
      </View>
    </View>
  );
}