import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import {
  Bike,
  BadgePercent,
  CircleCheck,
  CreditCard,
  Heart,
  Bell,
} from "lucide-react-native";

type NotificationCardProps = {
  title: string;
  description: string;
  time: string;
  type:
    | "delivery"
    | "deal"
    | "delivered"
    | "payment"
    | "favorite"
    | "default";

  unread?: boolean;

  onPress?: () => void;
};

export default function NotificationCard({
  title,
  description,
  time,
  type,
  unread = false,
  onPress,
}: NotificationCardProps) {
  const icon = () => {
    switch (type) {
      case "delivery":
        return (
          <Bike
            size={22}
            color="#FF8A2B"
          />
        );

      case "deal":
        return (
          <BadgePercent
            size={22}
            color="#FF8A2B"
          />
        );

      case "delivered":
        return (
          <CircleCheck
            size={22}
            color="#4ADE80"
          />
        );

      case "payment":
        return (
          <CreditCard
            size={22}
            color="#60A5FA"
          />
        );

      case "favorite":
        return (
          <Heart
            size={22}
            color="#FB7185"
          />
        );

      default:
        return (
          <Bell
            size={22}
            color="#FFFFFF"
          />
        );
    }
  };

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        color: "rgba(255,255,255,0.05)",
      }}
      className="mb-4 flex-row items-start rounded-3xl bg-card p-4"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 18,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        elevation: 5,
      }}
    >
      {/* Icon */}

      <View className="h-12 w-12 items-center justify-center rounded-full bg-[#171A1F]">
        {icon()}
      </View>

      {/* Content */}

      <View className="ml-4 flex-1">
        <View className="flex-row items-start justify-between">
          <Text
            numberOfLines={1}
            className="flex-1 font-poppins-semibold text-base text-white"
          >
            {title}
          </Text>

          <Text className="ml-3 font-poppins-medium text-xs text-zinc-500">
            {time}
          </Text>
        </View>

        <Text
          numberOfLines={2}
          className="mt-1 font-poppins-medium text-sm leading-5 text-zinc-400"
        >
          {description}
        </Text>
      </View>

      {/* Unread Dot */}

      {unread && (
        <View className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-[#FF8A2B]" />
      )}
    </Pressable>
  );
}