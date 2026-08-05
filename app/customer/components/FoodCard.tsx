import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { Plus } from "lucide-react-native";
import clsx from "clsx"
import { router } from "expo-router";
import { IMenuCard } from "@/interface/IMenuCard";
export default function FoodCard({item , index , onPress}: {item:IMenuCard , index:number , onPress: () => void}) {
  return (
    <Pressable onPress={onPress} className={clsx("w-[165px] relative pt-10" , index % 2 && "pt-10")}>
      {/* Floating Image */}

      <Image
        source={{
          uri: item.image_url,
        }}
        resizeMode="contain"
        className={clsx("absolute  self-center  z-10 w-[190px] h-[160px]" , index % 2 ? "-top-16" : "-top-16")}
      />

      {/* Card */}

      <View
        className="relative -top-8 rounded-[28px] bg-[#111317] border border-[#23272F] px-4 pt-[72px] pb-4"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 18,
          },
          shadowOpacity: 0.35,
          shadowRadius: 30,
          elevation: 12,
        }}
      >
        {/* Food Name */}

        <Text className="text-center text-[17px] text-white font-poppins-semibold">
          {item.title}
        </Text>

        {/* Subtitle */}

        <Text className="mt-1 text-center text-[11px] text-zinc-500 font-poppins-medium">
          Double Patty • Cheddar Cheese
        </Text>

        {/* Rating */}
        

     

        {/* Bottom */}

        <View className="mt-1 flex-row items-center justify-between">
          <View className="mt-2">
         

            <Text className="text-[22px] text-buttonBackground  font-poppins-bold">
              {item.price}
            </Text>
          </View>

          <Pressable
            className="w-11 h-11 rounded-2xl bg-[#FF8A2B] justify-center items-center"
            android_ripple={{ color: "#ffffff22", borderless: false }}
          >
            <Plus
              size={22}
              color="white"
              strokeWidth={2.8}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}