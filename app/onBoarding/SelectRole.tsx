import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  UtensilsCrossed,
  UserRound,
  Store,
  ArrowRight,
  User,
  StoreIcon,
} from "lucide-react-native";
import Button from "../shared/components/Button";
import BorderButton from "../shared/components/BorderButton";
import { router } from "expo-router";

export default function SelectRole() {



  return (
    <View className="flex-1 bg-black px-6 pb-6">

      {/* Logo */}
      <View className="items-center mt-8">

          <Image source={require("@/assets/images/foodie-logo.png")} className="w-[150px] h-[150px]" resizeMode="cover"/>

    
      </View>

      {/* Title */}
      <View className="mt-[-35px] items-center">

        <Text className="text-4xl text-center text-white font-poppins-bold leading-[46px]">
          Choose your{"\n"}journey
        </Text>

        <Text className="mt-5 text-center text-zinc-400 font-poppins-medium text-base leading-7 px-2">
          Whether you're craving delicious meals or
          growing your restaurant, choose how you'd
          like to continue.
        </Text>

      </View>

      {/* Illustration */}
      <View className="flex-1 items-center justify-center">

        <Image
          source={require("@/assets/images/selectRole-image.png")}
          className="w-100 h-80"
          resizeMode="contain"
        />

      </View>

      {/* Buttons */}
      <View className="pb-10 flex flex-col gap-4">

         <Button
         text="Continue As Customer"
         right={true}
         onPress={() => {router.replace("/customer/(tabs)/Home")}}
         Icon={User}


         />


         <BorderButton
         text="Continue As Resturant"
         right={true}
         onPress={() => {router.replace("/resturant")}}
         Icon={StoreIcon}
         />

        

      </View>

    </View>
  );
}