import React from "react";
import {
  Image,
  Pressable,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  Heart,
  EllipsisVertical,
} from "lucide-react-native";

export default function HeroSection() {
  return (
    <View className="relative h-[360px] overflow-hidden rounded-b-[34px]">
      {/* Hero Image */}

      <Image
        source={require("@/assets/images/burger.png")}
        resizeMode="cover"
        className="absolute h-full w-full"
      />

      {/* Gradient */}

      <LinearGradient
        colors={[
          "transparent",
          "rgba(5,6,8,0.20)",
          "rgba(5,6,8,0.55)",
          "#050608",
        ]}
        locations={[0.25, 0.55, 0.8, 1]}
        className="absolute inset-0"
      />

      {/* Header Buttons */}

      <View className="absolute left-5 right-5 top-[45px] flex-row justify-between">
        <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-black/35">
          <ArrowLeft
            size={22}
            color="white"
          />
        </Pressable>

        <View className="flex-row">
          <Pressable className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-black/35">
            <Heart
              size={21}
              color="white"
            />
          </Pressable>

          <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-black/35">
            <EllipsisVertical
              size={21}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}