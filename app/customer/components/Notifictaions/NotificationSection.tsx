import React from "react";
import {
  FlatList,
  Text,
  View,
} from "react-native";

import NotificationCard from "./NotificationCard";

type Notification = {
  id: string;

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
};

type Props = {
  title: string;

  notifications: any[];
};

export default function NotificationSection({
  title,
  notifications,
}: Props) {
  return (
    <View className="px-5">
      {/* Section Title */}

      <Text className="mb-4 font-poppins-semibold text-lg text-white">
        {title}
      </Text>

      {/* Notifications */}

      <FlatList
        scrollEnabled={false}
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationCard
            title={item.title}
            description={item.description}
            time={item.time}
            type={item.type}
            unread={item.unread}
          />
        )}
      />
    </View>
  );
}