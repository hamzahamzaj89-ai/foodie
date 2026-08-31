import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import {
  ChevronRight,
  CircleCheckBig,
} from "lucide-react-native";
import { router } from "expo-router";
import { OrderStatus } from "@/app/shared/utils/getOrderStatus";

type Props = {
  status: OrderStatus;
  deliveredAt: string;
};

export default function OrderStatusCard({
  status,
  deliveredAt,
}: Props) {
  return (
    <Pressable onPress={() => {router.push("/customer/(pages)/OrderStatusPage")}} className=" mt-4 rounded-2xl bg-card p-5">
     <View className="flex px-1 flex-row justify-between items-center">
         <Text className="font-poppins-bold text-2xl text-white">
        Order Status
      </Text>

      <ChevronRight
      color={"white"}
      size={22}
      strokeWidth={2.7}

      />
     </View>

      <View className="mt-5 flex-row items-center">
        <View className="h-14 w-14 items-center justify-center rounded-full bg-primaryCard">
          <CircleCheckBig
            size={26}
            color="#22C55E"
            strokeWidth={2.8}
          />
        </View>

        <View className="ml-4 flex-1">
          <Text className="font-poppins-semibold text-lg text-white">
            {status}
          </Text>

          <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
            Delivered on {deliveredAt}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}