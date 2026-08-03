import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

import {
  ChevronRight,
  CircleCheckBig,
} from "lucide-react-native";
import { router } from "expo-router";

type Props = {
  image: any;
  title: string;

  /** First item to preview */
  previewItem: string;

  /** Number of remaining items */
  moreItems: number;

  price: number;

  status: "Delivered" | "Preparing" | "Cancelled";
};

export default function DealOrderCard({
  image,
  title,
  previewItem,
  moreItems,
  price,
  status,
}: Props) {
  const statusColor =
    status === "Delivered"
      ? "#22C55E"
      : status === "Preparing"
      ? "#F59E0B"
      : "#EF4444";

  const statusBackground =
    status === "Delivered"
      ? "#1C2621"
      : status === "Preparing"
      ? "#33260D"
      : "#331A1A";

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

        {/* Preview Item */}

       

        {/* Remaining Items */}

        {moreItems > 0 && (
          <Text className="mt-1 font-poppins-semibold text-sm text-[#FF8A2B]">
            +{moreItems} more items
          </Text>
        )}

        {/* Divider */}


        {/* Status */}

        <View className="flex-row items-center mt-2 justify-between">
          <Text className="font-poppins-semibold text mt-1 text-zinc-400">
            Status
          </Text>

          <View
            className="flex-row items-center rounded-full px-3 py-2"
            style={{
              backgroundColor: statusBackground,
            }}
          >
            <CircleCheckBig
              size={15}
              color={statusColor}
              strokeWidth={2.5}
            />

            <Text
              className="ml-2 font-poppins-semibold text-sm"
              style={{
                color: statusColor,
              }}
            >
              {status}
            </Text>
          </View>
        </View>

        {/* Divider */}

        <View className="my-5 h-[1px] bg-border" />

        {/* Footer */}

        <View className="flex-row items-center justify-between">
          <Text className="font-poppins-bold text-3xl text-white">
            ${price.toFixed(2)}
          </Text>

          <Pressable
            onPress={() =>
              router.push("/customer/(pages)/OrderPreview")
            }
            className="flex-row items-center rounded-2xl border-2 border-buttonBackground px-5 py-3"
          >
            <Text className="font-poppins-semibold text-sm text-[#FF8A2B]">
              Details
            </Text>

            <ChevronRight
              size={16}
              color="#FF8A2B"
              strokeWidth={2.5}
              style={{ marginLeft: 4 }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}