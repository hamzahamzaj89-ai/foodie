import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  ArrowLeft,
  Check,
  CircleCheckBig,
  Clock3,
  CookingPot,
  MapPin,
  PackageCheck,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Header from "../components/Header";
import OrderStatusHeader from "../components/OrderStatusPage/OrderStatusHeader";
import OrderStatusTimeLineStep from "../components/OrderStatusPage/OrderStatusTimeLineStep";

type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "picked_up"
  | "delivered";

type StatusStep = {
  id: OrderStatus;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
};

const STATUS_STEPS: StatusStep[] = [
  {
    id: "pending",
    title: "Pending",
    description: "Order received",
    icon: Clock3,
  },
  {
    id: "confirmed",
    title: "Confirmed",
    description: "Restaurant accepted your order",
    icon: CircleCheckBig,
  },
  {
    id: "preparing",
    title: "Preparing",
    description: "Your food is being prepared",
    icon: CookingPot,
  },
  {
    id: "picked_up",
    title: "Out for Delivery",
    description: "Rider is on the way",
    icon: MapPin,
  },
  {
    id: "delivered",
    title: "Delivered",
    description: "Enjoy your meal",
    icon: PackageCheck,
  },
];

const STATUS_INDEX: Record<OrderStatus, number> = {
  pending: 0,
  confirmed: 1,
  preparing: 2,
  picked_up: 3,
  delivered: 4,
};

export default function OrderStatusScreen() {
  //getting the params 
    const {status , orderNumber} = useLocalSearchParams();

  // Later this will come from your order/Supabase data.
  const currentStatus: OrderStatus = status as OrderStatus;

  const currentIndex = STATUS_INDEX[currentStatus];

  const currentStep = STATUS_STEPS[currentIndex];


  const totalSteps = STATUS_STEPS.length

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1">
        {/* Header */}

  <View className="px-5">
               <Header title="Order Status" description={"Track your order"}/>

  </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 0,
          }}
        >
          {/* Current Status */}

          <OrderStatusHeader currentStep={currentStep}/>

          {/* Timeline */}

          <View className="mt-10">
            {STATUS_STEPS.map((step, index) => {
                          return(<>
                          
                 <OrderStatusTimeLineStep key={step.id} stepIndex={STATUS_INDEX[step.id]} step={step} currentIndex={currentIndex} totalSteps={totalSteps} index={index}/>
                          </>)
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}