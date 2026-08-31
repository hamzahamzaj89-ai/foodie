import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";

import OrderTabs from "@/app/customer/components/Tabs";
import DateHeader from "@/app/customer/components/DateHeader";
import OrderCard from "@/app/customer/components/OrderCard";
import DealOrderCard from "@/app/customer/components/DealOrderCard";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "../components/TabHeader";
import { useInfiniteOrders } from "@/app/shared/hooks/useOrders";
import StatusScreen from "../screens/StatusScreen";
import Loader from "@/app/shared/components/Loader";
import { formatOrderDate } from "@/app/shared/utils/formatOrderDate";
import {
  CircleCheckBig,
  Clock3,
  CookingPot,
  LucideIcon,
  MapPin,
  PackageCheck,
} from "lucide-react-native";
import {
  OrderStatus,
  STATUS_INDEX,
  STATUS_STEPS,
} from "@/app/shared/utils/getOrderStatus";

const tabs = ["Ongoing", "Completed", "Cancelled"];

let lastDate = "";


export default function OrdersScreen() {
  const [selectedTab, setSelectedTab] = useState("Ongoing");

  const [status , setStatus] = useState(["pending", "confirmed", "preparing", "picked_up"])

  useEffect(() => {
    function checkCondition() {
      if (selectedTab === "Completed") {
        return (setStatus(["delivered"]));
      } else if (selectedTab === "Cancelled") {
        return (setStatus(["cancelled"]));
      } else {
        return (setStatus(["pending", "confirmed", "preparing", "picked_up"]));
      }
    }

    checkCondition();
  }, [selectedTab]);



  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
    isFetchingNextPage,
  } = useInfiniteOrders(status);

  if (error)
    return (
      <StatusScreen type="error" message={error.message} title={error.name} />
    );

  const orders = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) ?? [];
  }, [data]);

  const skeletons = Array.from({ length: 4 }, (_, index) => ({
    id: `skeleton-${index}`,
    index,
  }));

  interface Skeletons {
    id: string;
    index: number;
  }

  return (
    <SafeAreaView className="flex-1 bg-black px-4">
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 90,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <>
            {isPending ? (
              <>
                <View className="flex-1 justify-center items-center h-[180px]">
                  <Loader />
                </View>
              </>
            ) : (
              <View className="h-[500px] flex-col justify-center items-center">
                  <StatusScreen
                type="error"
                message={`There is no ${selectedTab} orders available`}
                title="404 error"
              />
              </View>
            )}
          </>
        }
        ListHeaderComponent={
          <>
            {/* Header */}

            <TabHeader
              title={"My Orders"}
              description={"Track your current & previous orders"}
            />

            {/* Tabs */}

            <View className="mt-2 mb-1">
              <OrderTabs
                selected={selectedTab}
                onSelect={setSelectedTab}
                tabs={tabs}
              />
            </View>
          </>
        }

        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <>
              <View className="h-[100px] w-[100%]">
                <Loader />
              </View>
            </>
          ) : null
        }

        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}

        renderItem={({ item }) => {
          const orderDate = formatOrderDate(item.createdAt);
          const showHeader = lastDate !== orderDate;

          lastDate = orderDate;

          return (
            <>
              {showHeader && <DateHeader title={orderDate} />}

              {item.dealIncluded ? (
                <DealOrderCard
                
                id={item.id}
                  image={item.imageUrl}
                  title={item.name}
                  previewItem="2 Cheese Burgers"
                  moreItems={item.itemsLength - 1}
                  price={Number(item.total.toFixed(2))}
                  status={item.status as OrderStatus}
                  Icon={
                    STATUS_STEPS[STATUS_INDEX[item.status as OrderStatus]]
                      .icon as LucideIcon
                  }
                />
              ) : (
                <OrderCard
                  imageUrl={item.imageUrl}
                  title={item.name}
                  moreItems={item.itemsLength - 1}
                  price={Number(item.total.toFixed(2))}
                  status={item.status as OrderStatus}
                  Icon={
                    STATUS_STEPS[STATUS_INDEX[item.status as OrderStatus]]
                      .icon as LucideIcon
                  }
                />
              )}
            </>
          );
        }}
      />
    </SafeAreaView>
  );
}
