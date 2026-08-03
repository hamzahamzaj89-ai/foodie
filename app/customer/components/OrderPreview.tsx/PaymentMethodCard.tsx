import React from "react";
import {
  Text,
  View,
} from "react-native";

import {
  CreditCard,
} from "lucide-react-native";

type PaymentMethodCardProps = {
  method: string;
  details: string;
};

export default function PaymentMethodCard({
  method,
  details,
}: PaymentMethodCardProps) {
  return (
    <View className=" mt-6 rounded-3xl bg-card p-5">
      {/* Header */}

      <View className="flex-row items-center">
        <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#171A1F]">
          <CreditCard
            size={22}
            color="#FF8A2B"
            strokeWidth={2.4}
          />
        </View>

        <Text className="ml-4 font-poppins-bold text-xl text-white">
          Payment Method
        </Text>
      </View>

      {/* Payment Info */}

      <View className="mt-5">
        <Text className="font-poppins-semibold text-base text-white">
          {method}
        </Text>

        <Text className="mt-2 font-poppins-medium text-sm text-zinc-400">
          {details}
        </Text>
      </View>
    </View>
  );
}