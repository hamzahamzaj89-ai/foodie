import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import {
  ArrowRight,
  ShoppingBag,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import SecondaryButton from "@/app/shared/components/SecondaryButton";
import Button from "@/app/shared/components/Button";

export default function OrderSuccess() {


   const {status , orderNumber} = useLocalSearchParams();




  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 flex-col justify-between px-5">

        {/* Success Content */}

        <View className="  justify-between mt-10">

          {/* Celebration Image */}

            <View className="flex-row w-[100%] justify-center">
              <Image
            source={require("@/assets/images/balloons.png")}
            resizeMode="contain"
            className="h-[150px]  w-[100px] "
          />
            </View>

          {/* Status */}

            <View className="flex-row justify-center ">
               <View className="mt-4 flex  flex-row justify-center items-center rounded-full bg-[#1C2621] px-4 py-2">
            <View className="h-2 w-2 rounded-full bg-[#44D17A]" />

                <Text className="ml-2 font-poppins-semibold mt-[3px] text-[11px] tracking-wide text-[#44D17A]">
              ORDER PLACED SUCCESSFULLY
            </Text>
          </View>
            </View>

          {/* Title */}

          <Text className="mt-5 text-center font-poppins-bold text-[28px] leading-9 text-white">
            Your Order Has Been Placed!
          </Text>

          {/* Description */}

          <Text className="mt-3 max-w-[320px] text-center font-poppins-medium text-sm leading-6 text-zinc-500">
            Your order has been sent to the restaurant.
            Sit back and relax while we prepare your
            delicious meal.
          </Text>

          {/* Order ID */}

         <View className="flex-row justify-center">
              <View className="mt-6 rounded-2xl border-0 border-[#24272D] bg-[#111317] px-6 py-3">
            <Text className="text-center font-poppins-medium text-[10px] tracking-wider text-zinc-500">
              ORDER NUMBER
            </Text>

            <Text className="mt-1 text-center font-poppins-semibold text-sm text-white">
              #{orderNumber}
            </Text>
          </View>
        </View>
         </View>

        {/* Bottom Buttons */}

        <View className="mb-20">

          {/* Track Order */}
            <Button
            text={"Track Order"}
            left
            Icon={ArrowRight}
            onPress={()=> {
              router.replace({
                pathname: "/customer/OrderStatusPage",
                params: {
                  orderNumber,
                  status
                }
              })
            }}
            />


            <View className="mt-3"></View>

          {/* Continue Shopping */}
          <SecondaryButton
          text="Continue Shpping"
          onPress={() => {router.replace("/customer/Home")}}
          right
          Icon={ShoppingBag}
          />

        </View>
      </View>
    </SafeAreaView>
  );
}