import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import {
  BadgePercent,
  CircleCheckBig,
  ChevronRight,
} from "lucide-react-native";

export default function DealOrderCard() {


  return (
    <Pressable
      className=" mb-5 rounded-[28px] border border- bg-card p-4"
      android_ripple={{
        color: "rgba(255,255,255,0.05)",
      }}
    >
      {/* Top */}

      <View className="flex-row">
        {/* Deal Banner */}

        <Image
          source={require("@/assets/images/deal1.jpeg")}
          resizeMode="cover"
          className="h-24 w-24 rounded-3xl"
        />

        {/* Content */}

        <View className="ml-4 flex-1 justify-between">
          <View>
            {/* Deal Badge */}

            <View className="mb-2 self-start flex-row items-center rounded-full bg-[#FF8A2B]/15 px-3 py-1">
              <BadgePercent
                size={14}
                color="#FF8A2B"
                strokeWidth={2.5}
              />

              <Text className="ml-1 font-poppins-semibold text-xs text-[#FF8A2B]">
                Deal
              </Text>
            </View>

            {/* Deal Name */}

            <Text className="font-poppins-semibold text-lg text-white">
              Family Feast Combo
            </Text>

          
          </View>

          {/* Price */}

          <Text className="font-poppins-bold text-xl text-white">
            $34.99
          </Text>
        </View>
      </View>

      {/* Divider */}

      <View className="my-5 h-[1px] bg-border" />

      {/* Bottom */}

      <View className="flex-row items-center justify-between">
        {/* Status */}

        <View className="flex-row items-center rounded-full bg-[#1C2621] px-3 py-2">
          <CircleCheckBig
            size={16}
            color="#22C55E"
            strokeWidth={2.5}
          />

          <Text className="ml-2 font-poppins-semibold text-sm text-[#22C55E]">
            Delivered
          </Text>
        </View>

        {/* Details */}

        <Pressable className="flex-row items-center rounded-2xl border-[2px] border-buttonBackground px-4 py-3">
                 <Text className="font-poppins-semibold text-sm text-[#FF8A2B]">
                   Details
                 </Text>
       
                 <ChevronRight
                   size={16}
                   color="#FF8A2B"
                   strokeWidth={2.5}
                   style={{ marginLeft: 4 }}
                 />
               </Pressable>
      </View>
    </Pressable>
  );
}