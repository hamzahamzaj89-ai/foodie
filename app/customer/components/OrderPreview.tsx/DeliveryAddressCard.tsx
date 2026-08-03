import React from "react";
import {
  Text,
  View,
} from "react-native";

import { MapPin } from "lucide-react-native";

type Props = {
  title: string;
  address: string;
};

export default function DeliveryAddressCard({
  title,
  address,
}: Props) {
  return (
    <View className=" mt-6 rounded-3xl bg-card p-5">
      {/* Header */}

      <View className="flex-row items-center">
        <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#171A1F]">
          <MapPin
            size={22}
            color="#FF8A2B"
            strokeWidth={2.4}
          />
        </View>

        <Text className="ml-4 font-poppins-bold text-xl text-white">
          Delivery Address
        </Text>
      </View>

      {/* Address */}

      <View className="mt-5">
        <Text className="font-poppins-semibold text-base text-white">
          {title}
        </Text>

        <Text className="mt-2 font-poppins-medium text-sm leading-6 text-zinc-400">
          {address}
        </Text>
      </View>
    </View>
  );
}