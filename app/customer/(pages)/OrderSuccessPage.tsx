import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Check, ArrowRight, Clock3, ReceiptText } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OrderSuccessPage() {
  return (
    <SafeAreaView className="flex-1 bg-[#050608]">
      <View className="flex-1 px-6">

        {/* Top spacing */}
        <View className="flex-1 justify-center">

          {/* Success Icon */}
          <View className="items-center">
            <View className="h-28 w-28 items-center justify-center rounded-full bg-[#1B120B] border border-[#FF7A00]/20">
              <View className="h-20 w-20 items-center justify-center rounded-full bg-[#FF7A00]">
                <Check size={42} color="white" strokeWidth={3} />
              </View>
            </View>

            {/* Heading */}
            <Text className="mt-8 text-center text-[30px] font-bold text-white">
              Order Successful!
            </Text>

            <Text className="mt-3 max-w-[320px] text-center text-[15px] leading-6 text-zinc-400">
              Your order has been confirmed and is being prepared by the
              restaurant.
            </Text>
          </View>

          {/* Order Card */}
          <View className="mt-10 overflow-hidden rounded-[26px] border border-white/[0.06] bg-[#0D0E12]">

            <LinearGradient
              colors={["#15110D", "#0D0E12"]}
              className="p-5"
            >
              {/* Order number */}
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Order number
                  </Text>

                  <Text className="mt-1 text-[16px] font-semibold text-white">
                    #FD-82941
                  </Text>
                </View>

                <View className="h-11 w-11 items-center justify-center rounded-2xl bg-[#FF7A00]/10">
                  <ReceiptText size={21} color="#FF7A00" />
                </View>
              </View>

              <View className="my-5 h-[1px] bg-white/[0.06]" />

              {/* Estimated delivery */}
              <View className="flex-row items-center">
                <View className="h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04]">
                  <Clock3 size={20} color="#A1A1AA" />
                </View>

                <View className="ml-3">
                  <Text className="text-xs text-zinc-500">
                    Estimated delivery
                  </Text>

                  <Text className="mt-1 text-[15px] font-semibold text-white">
                    25 – 35 minutes
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>

        </View>

        {/* Bottom Actions */}
        <View className="pb-5">

          {/* Track order */}
          <Pressable
            className="h-[58px] flex-row items-center justify-center rounded-2xl bg-[#FF7A00] active:opacity-80"
            onPress={() => {
              // router.push("/order-status");
            }}
          >
            <Text className="text-[16px] font-bold text-white">
              Track My Order
            </Text>

            <ArrowRight
              size={20}
              color="white"
              strokeWidth={2.5}
              className="ml-2"
            />
          </Pressable>

          {/* Continue shopping */}
          <Pressable
            className="mt-3 h-[54px] items-center justify-center rounded-2xl"
            onPress={() => {
              // router.replace("/(tabs)");
            }}
          >
            <Text className="text-[15px] font-semibold text-zinc-400">
              Continue Shopping
            </Text>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
}