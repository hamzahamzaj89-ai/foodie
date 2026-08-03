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
import TabHeader from "../components/TabHeader";



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


                <TabHeader
                   title={"My Orders"}
                   description={"Track your current & previous orders"}
                />
           
            {/* Tabs */}

              <View className="mt-2 mb-6">
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
         <DealOrderCard
  image={require("@/assets/images/deal1.jpeg")}
  title="Family Feast Combo"
  previewItem="2 Cheese Burgers"
  moreItems={5}
  price={34.99}
  status="Delivered"
/>
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