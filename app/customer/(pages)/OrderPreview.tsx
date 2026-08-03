import React from "react";
import {  ScrollView, View } from "react-native";

import OrderStatusCard from "@/app/customer/components/OrderPreview.tsx/OrderStatusCard";
import OrderItemCard from "@/app/customer/components/OrderPreview.tsx/OrderItemCard";
import DealPreviewCard from "@/app/customer/components/OrderPreview.tsx/DealPreviewCard";
import PaymentSummaryCard from "@/app/customer/components/OrderPreview.tsx/DealSummaryCard";
import DeliveryAddressCard from "@/app/customer/components/OrderPreview.tsx/DeliveryAddressCard";
import PaymentMethodCard from "@/app/customer/components/OrderPreview.tsx/PaymentMethodCard";
import SupportCard from "@/app/customer/components/OrderPreview.tsx/SupportCard";
import OrderDetailHeader from "../components/OrderPreview.tsx/OrderPreviewHeader";
import SpecialInstructionCard from "../components/OrderPreview.tsx/SpecialInstructionCard";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderInformationCard from "../components/OrderPreview.tsx/OrderInformationCard";

export default function OrderDetailScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black px-5 ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header */}

        <View className=" -mt-1">
               <Header
               title={"Order Details"}
            description={"See Your Order Details"}
            onPress={() => {}}
            
               />
        </View>

        {/* Order Status */}

        <OrderStatusCard status="Delivered" deliveredAt="Jul 30 • 9:15 PM" />

        {/* Items */}

        <View className="mt-6 bg-card rounded-2xl">
          <OrderItemCard
            image={require("@/assets/images/burger.png")}
            title="Cheese Burger"
            customization="Double Patty • Extra Cheese"
            quantity={2}
            price={24}
          />
          
            <View className="px-4">
                <View className="mt- h-[1px] bg-primaryCard "/>
            </View>

          <OrderItemCard
            image={require("@/assets/images/burger.png")}
            title="Beef Wrap"
            customization="Extra Cheese"
            quantity={1}
            price={12.99}
          />
        </View>

        {/* Deal */}

        <View className="mt-3 ">
          <DealPreviewCard
            image={require("@/assets/images/deal1.jpeg")}
            title="Family Feast Deal"
            subtitle="Perfect for 3–4 People"
            quantity={1}
            price={34.99}
            items={[
              {
                id: "1",
                name: "Cheese Burger",
                quantity: 2,
              },
              {
                id: "2",
                name: "Large Fries",
                quantity: 2,
              },
              {
                id: "3",
                name: "Coca Cola",
                quantity: 4,
              },
            ]}
          />
        </View>

        {/* Special Instructions */}

        <View className="mx-0 mt-6 rounded-3xl bg-card p-0">
          <SpecialInstructionCard note="No onions. Extra ketchup." />
        </View>

        {/* Payment */}

        <PaymentSummaryCard
          itemsTotal={36.99}
          dealsTotal={34.99}
          deliveryFee={2.99}
          serviceFee={1.5}
          tax={3.2}
          discount={8}
        />

        {/* Address */}

       <OrderInformationCard
  addressTitle="Home"
  address="House 24, Street 12, Johar Town, Lahore"
  paymentMethod="Visa"
  paymentDetails="•••• •••• •••• 4242"
  onSupportPress={() => {}}
  onReorderPress={() => {}}
/>
      </ScrollView>
    </SafeAreaView>
  );
}
