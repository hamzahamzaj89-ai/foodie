import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import {
  Headphones,
  ChevronRight,
  RotateCcw,
} from "lucide-react-native";

type Props = {
  onSupportPress: () => void;
  onReorderPress: () => void;
};

export default function SupportCard({
  onSupportPress,
  onReorderPress,
}: Props) {
  return (
    <View className=" mt-6 mb-10 rounded-3xl bg-card p-5">
      <Text className="font-poppins-bold text-xl text-white">
        Need Help?
      </Text>

      <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
        Contact our support team or quickly place this order again.
      </Text>

      {/* Contact Support */}

      <Pressable
        onPress={onSupportPress}
        className="mt-6 flex-row items-center justify-between rounded-2xl bg-primaryCard p-4"
      >
        <View className="flex-row items-center">
          <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#22262D]">
            <Headphones
              size={22}
              color="#FF8A2B"
              strokeWidth={2.3}
            />
          </View>

          <View className="ml-4">
            <Text className="font-poppins-semibold text-base text-white">
              Contact Support
            </Text>

            <Text className="mt-1 font-poppins-medium text-xs text-zinc-400">
              Report an issue with this order
            </Text>
          </View>
        </View>

        <ChevronRight
          size={20}
          color="#71717A"
        />
      </Pressable>

      {/* Reorder */}

      <Pressable
        onPress={onReorderPress}
        className="mt-4 flex-row items-center justify-between rounded-2xl bg-[#FF8A2B] px-5 py-4"
      >
        <View className="flex-row items-center">
          <RotateCcw
            size={22}
            color="#050608"
            strokeWidth={2.4}
          />

          <Text className="ml-3 font-poppins-bold text-base text-black">
            Reorder
          </Text>
        </View>

        <ChevronRight
          size={20}
          color="#050608"
        />
      </Pressable>
    </View>
  );
}