import React from "react";
import {
  Image,
  Text,
  View,
} from "react-native";

type IncludedItemRowProps = {
  image: any;
  name: string;
  quantity: number;
};

export default function DealItem({
  image,
  name,
  quantity,
}: IncludedItemRowProps) {
  return (
    <View className="mb-3 flex-row items-center rounded-2xl  p-3">
      {/* Food Image */}

         <View className="relative h-16 w-16 ">
          <Image
        source={image}
        resizeMode="contain"
        className="h-24 w-24 -left-5 bottom-[13px]"
      />
         </View>

      {/* Food Name */}

      <View className="ml-4 flex-1">
        <Text className="font-poppins-semibold text-base text-white">
          {name}
        </Text>

        <Text className="mt-[1px] font-poppins-medium text-sm text-zinc-400">
          Included in this deal
        </Text>
      </View>

      {/* Quantity */}

      <View className="rounded-full bg-[#1A1D22] px-4 py-2">
        <Text className="font-poppins-semibold text-sm text-[#FF8A2B]">
          ×{quantity}
        </Text>
      </View>
    </View>
  );
}