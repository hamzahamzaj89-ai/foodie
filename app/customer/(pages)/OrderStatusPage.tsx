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
import { getOrderStatus, OrderStatus, STATUS_INDEX, STATUS_STEPS } from "@/app/shared/utils/getOrderStatus";


export default function OrderStatusScreen() {
  //getting the params 
    const {status , orderNumber} = useLocalSearchParams();



  // Later this will come from your order/Supabase data.
  const currentStatus: OrderStatus = status as OrderStatus;


  const {currentIndex , currentStep , totalSteps} = getOrderStatus(status as OrderStatus)




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