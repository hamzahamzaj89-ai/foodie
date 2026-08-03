import React from "react";
import {
  Image,
  Text,
  View,
} from "react-native";

type IncludedItem = {
  id: string;
  name: string;
  quantity: number;
};

type DealPreviewCardProps = {
  image: any;
  title: string;
  subtitle: string;
  quantity: number;
  price: number;
  items: IncludedItem[];
};

export default function DealPreviewCard({
  image,
  title,
  subtitle,
  quantity,
  price,
  items,
}: DealPreviewCardProps) {
  return (
    <View
      className="overflow-hidden rounded-3xl bg-card"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        elevation: 8,
      }}
    >
      {/* Banner */}

      <Image
        source={image}
        resizeMode="cover"
        className="h-44 w-full"
      />

      {/* Content */}

      <View className="p-5">
        {/* Deal Name */}

        <Text className="font-poppins-bold text-2xl text-white">
          {title}
        </Text>

        {/* Subtitle */}

        <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
          {subtitle}
        </Text>

        {/* Divider */}

        <View className="my-5 h-[1px] bg-[#23262D]" />

        {/* Included */}

        <Text className="font-poppins-semibold text-base text-white">
          Included
        </Text>

        <View className="mt-3">
          {items.map((item) => (
            <View
              key={item.id}
              className="mb-3 flex-row items-center justify-between"
            >
              <Text className="font-poppins-medium text-sm text-zinc-300">
                {item.name}
              </Text>

              <View className="rounded-full bg-primaryCard px-3 py-1">
                <Text className="font-poppins-semibold text-xs text-[#FF8A2B]">
                  ×{item.quantity}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Divider */}

        <View className="my-5 h-[1px] bg-[#23262D]" />

        {/* Footer */}

        <View className="flex-row items-center justify-between">
          <View className="rounded-full bg-primaryCard px-4 py-2">
            <Text className="font-poppins-semibold text-sm text-[#FF8A2B]">
              Qty ×{quantity}
            </Text>
          </View>

          <Text className="font-poppins-bold text-2xl text-white">
            ${price.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}