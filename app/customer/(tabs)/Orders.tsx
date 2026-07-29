import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
} from "react-native";

import OrderTabs from "@/app/customer/components/Tabs";
import DateHeader from "@/app/customer/components/DateHeader";
import OrderCard from "@/app/customer/components/OrderCard";
import DealOrderCard from "@/app/customer/components/DealOrderCard";
import { SafeAreaView } from "react-native-safe-area-context";



const orders = [
  {
    id: "1",
    date: "Today",
    type: "order",
  },
  {
    id: "2",
    date: "Today",
    type: "deal",
  },
  {
    id: "3",
    date: "Yesterday",
    type: "order",
  },
  {
    id: "4",
    date: "24 July",
    type: "deal",
  },
];




const tabs = [
  "Ongoing",
  "Completed",
  "Cancelled",
];


export default function OrdersScreen() {
  const [selectedTab, setSelectedTab] =
    useState("Ongoing");

  let lastDate = "";

  return (
    <SafeAreaView className="flex-1 bg-[#050608] px-4">
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 90,
          
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Header */}

            <View className="pl-1 pt-0">
              <Text className="font-poppins-bold text-3xl text-white">
                My Orders
              </Text>

              <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
                Track your current & previous orders
              </Text>
            </View>

            {/* Tabs */}

              <View className="mt-6 mb-6">
                <OrderTabs
              selected={selectedTab}
              onSelect={setSelectedTab}
              tabs={tabs}
            />
              </View>
          </>
        }
        renderItem={({ item }) => {
          const showHeader =
            lastDate !== item.date;

          lastDate = item.date;

          return (
            <>
              {showHeader && (
                <DateHeader
                  title={item.date}
                />
              )}

              {item.type === "deal" ? (
                <DealOrderCard />
              ) : (
                <OrderCard />
              )}
            </>
          );
        }}
      />
    </SafeAreaView>
  );
}