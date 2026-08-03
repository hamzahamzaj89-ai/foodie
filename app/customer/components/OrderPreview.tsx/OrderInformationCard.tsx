import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import {
  ChevronRight,
  CreditCard,
  Headphones,
  MapPin,
  RotateCcw,
} from "lucide-react-native";

type Props = {
  addressTitle: string;
  address: string;

  paymentMethod: string;
  paymentDetails: string;

  onSupportPress: () => void;
  onReorderPress: () => void;
};

export default function OrderInformationCard({
  addressTitle,
  address,
  paymentMethod,
  paymentDetails,
  onSupportPress,
  onReorderPress,
}: Props) {
  return (
    <View
      className="mt-6 rounded-3xl bg-card p-5"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        elevation: 8,
      }}
    >
      <Text className="font-poppins-bold text-xl text-white">
        Order Information
      </Text>

      {/* Delivery Address */}

      <View className="mt-6 flex-row">
        <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#171A1F]">
          <MapPin
            size={22}
            color="#FF8A2B"
            strokeWidth={2.4}
          />
        </View>

        <View className="ml-4 flex-1">
          <Text className="font-poppins-semibold text-base text-white">
            Delivery Address
          </Text>

          <Text className="mt-2 font-poppins-medium text-sm text-zinc-400">
            {addressTitle}
          </Text>

          <Text className="mt-1 font-poppins-medium text-sm leading-6 text-zinc-500">
            {address}
          </Text>
        </View>
      </View>

      <View className="my-6 h-[1px] bg-[#23262D]" />

      {/* Payment */}

      <View className="flex-row">
        <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#171A1F]">
          <CreditCard
            size={22}
            color="#FF8A2B"
            strokeWidth={2.4}
          />
        </View>

        <View className="ml-4 flex-1">
          <Text className="font-poppins-semibold text-base text-white">
            Payment Method
          </Text>

          <Text className="mt-2 font-poppins-medium text-sm text-zinc-400">
            {paymentMethod}
          </Text>

          <Text className="mt-1 font-poppins-medium text-sm text-zinc-500">
            {paymentDetails}
          </Text>
        </View>
      </View>

      <View className="my-6 h-[1px] bg-[#23262D]" />

      {/* Contact Support */}

      <Pressable
        onPress={onSupportPress}
        className="flex-row items-center justify-between"
      >
        <View className="flex-row items-center">
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#171A1F]">
            <Headphones
              size={22}
              color="#FF8A2B"
              strokeWidth={2.4}
            />
          </View>

          <View className="ml-4">
            <Text className="font-poppins-semibold text-base text-white">
              Contact Support
            </Text>

            <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
              Need help with this order?
            </Text>
          </View>
        </View>

        <ChevronRight
          size={20}
          color="#71717A"
        />
      </Pressable>

      {/* Reorder Button */}

      <Pressable
        onPress={onReorderPress}
        className="mt-8 h-14 flex-row items-center justify-center rounded-2xl bg-[#FF8A2B]"
      >
        <RotateCcw
          size={20}
          color="#050608"
          strokeWidth={2.5}
        />

        <Text className="ml-3 font-poppins-bold text-base text-[#050608]">
          Reorder
        </Text>
      </Pressable>
    </View>
  );
}