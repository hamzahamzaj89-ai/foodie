import React from "react";
import {
  FlatList,
  View,
} from "react-native";

import NotificationHeader from "@/app/customer/components/Notifictaions/NotificationHeader";
import NotificationSection from "@/app/customer/components/Notifictaions/NotificationSection";
import { SafeAreaView } from "react-native-safe-area-context";

const notifications = [
  {
    title: "Today",
    data: [
      {
        id: "1",
        type: "delivery",
        title: "Your order is on the way",
        description: "Driver will arrive in about 8 minutes.",
        time: "2 min ago",


      },
      {


        id: "2",
        type: "deal",
        title: "20% OFF on Burgers",
        description: "Limited time offer. Order now!",
        time: "25 min ago",


      },
    ],
  },

  {
    title: "Yesterday",
    data: [
      {
        id: "3",
        type: "delivered",
        title: "Order Delivered",
        description: "Hope you enjoyed your meal.",
        time: "Yesterday",
      },

      {
        id: "4",
        type: "favorite",
        title: "Favorite Restaurant Added New Meals",
        description: "Check out their latest menu.",
        time: "Yesterday",
      },
    ],
  },

  {
    title: "Earlier",
    data: [
      {
        id: "5",
        type: "payment",
        title: "Payment Successful",
        description: "Your payment of $34.99 was completed.",
        time: "27 Jul",
      },

      {
        id: "6",
        type: "coupon",
        title: "Deal Expiring Soon",
        description: "Family Feast expires tonight.",
        time: "26 Jul",
      },
    ],
  },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 35,
        }}
        ListHeaderComponent={<NotificationHeader />}
        renderItem={({ item }) => (
          <View className="mt-8">
            <NotificationSection
              title={item.title}
              notifications={item.data}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}