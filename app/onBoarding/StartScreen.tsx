import React from "react";
import { View, Text, Pressable , Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  UtensilsCrossed,
  ArrowRight,
  Zap,
  Leaf,
  ShieldCheck,
  SkipForwardIcon,
  SkipBack,
  LucideSkipBack,
} from "lucide-react-native";
import Button from "../shared/components/Button";
import BorderButton from "../shared/components/BorderButton";
import { router } from "expo-router";

export default function StartScreen() {
  return (
    <View className="flex-1 bg-black px-6">

      {/* Logo */}
      <View className="items-center mt-5">

             <Image source={require("@/assets/images/foodie-logo.png")}  resizeMode="cover"
             className="w-[200px] h-[200px]"

          />
  
      </View>

    

      {/* Content */}
      <View className="items-center mt-[-40px]">

        <Text className="text-4xl font-poppins-bold text-white text-center leading-[46px]">
          Delicious food,{"\n"}delivered fast.
        </Text>

        <Text className="mt-4 text-center text-base text-zinc-400 font-poppins-medium leading-7 px-5">
          Order from your favorite restaurants and enjoy
          fresh meals delivered right to your doorstep.
        </Text>

        {/* Features */}
        <View className="w-full mt-8 gap-4">

          <View className="flex-row items-center rounded-2xl bg-black  border-white/10  px-4 py-3">

          
            <View className="w-10 h-10 rounded-xl bg-orange-500/15 items-center justify-center">
              <Zap
                size={18}
                color="#FF8A2B"
                strokeWidth={2.5}
              />
            </View>

            <View className="ml-4">
              <Text className="font-poppins-semibold text-white">
                Fast Delivery
              </Text>

              <Text className="font-poppins text-zinc-400 text-sm mt-[2px]">
                Hot meals delivered in minutes.
              </Text>
            </View>
          </View>

          <View className="flex-row items-center rounded-2xl  border-white/10  px-4 py-3">
            <View className="w-10 h-10 rounded-xl bg-green-500/15 items-center justify-center">
              <Leaf
                size={18}
                color="#22C55E"
                strokeWidth={2.5}
              />
            </View>

            <View className="ml-4">
              <Text className="font-poppins-semibold text-white">
                Fresh Ingredients
              </Text>

              <Text className="font-poppins text-zinc-400 text-sm mt-1">
                Quality meals prepared every day.
              </Text>
            </View>
          </View>

          <View className="flex-row items-center rounded-2xl  border-white/10  px-4 py-3">
            <View className="w-10 h-10 rounded-xl bg-violet-500/15 items-center justify-center">
              <ShieldCheck
                size={18}
                color="#8B5CF6"
                strokeWidth={2.5}
              />
            </View>

            <View className="ml-4">
              <Text className="font-poppins-semibold text-white">
                Secure Payments
              </Text>

              <Text className="font-poppins text-zinc-400 text-sm mt-1">
                Fast and protected checkout experience.
              </Text>
            </View>
          </View>

        </View>

      </View>

      {/* Bottom Buttons */}
      <View className="pb-10 pt-8">

        <Button
        text="Get Started"
        Icon={ArrowRight}
        onPress={() => {router.replace("/onBoarding/onBoarding")}}
        left={true}
        />

         <View className=" mt-2.5"/>


         <BorderButton
         text="Skip"
        Icon={LucideSkipBack}
        onPress={() => {router.replace("/onBoarding/SelectRole")}}
        left={true}
        />

       

      </View>

    </View>
  );
}