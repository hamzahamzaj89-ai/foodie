import React from "react";
import {
  Image,
  Text,
  View,
} from "react-native";

type OrderItemCardProps = {
  image: any;
  title: string;
  customization?: string;
  quantity: number;
  price: number;
};

export default function OrderItemCard({
  image,
  title,
  customization,
  quantity,
  price,
}: OrderItemCardProps) {
  return (
    <View
      className="mb-4 flex-row rounded-3xl bg-card p-4"
     
    >
      {/* Food Image */}

       <View className="w-24 h-24 relative ">
          <Image
        source={image}
        resizeMode="contain"
        className="h-32 w-32 -left-4 -top-4 absolute rounded-2xl"
      />

       </View>
      {/* Content */}

      <View className="ml-4 flex-1 justify-between">
        {/* Top */}

        <View>
          <Text className="font-poppins-semibold text-lg text-white">
            {title}
          </Text>

          {!!customization && (
            <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
              {customization}
            </Text>
          )}
        </View>

        {/* Bottom */}

        <View className="mt-5 flex-row items-center justify-between">
          <View className="rounded-full bg-[#171A1F] px-4 py-2">
            <Text className="font-poppins-semibold text-sm text-[#FF8A2B]">
              Qty ×{quantity}
            </Text>
          </View>

          <Text className="font-poppins-bold text-xl text-white">
            ${price.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}