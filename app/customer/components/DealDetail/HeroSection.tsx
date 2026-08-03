import React from "react";
import {
  Image,
  Pressable,
  View,
} from "react-native";

import { useRouter } from "expo-router";

import {
  ChevronLeft,
  Heart,
} from "lucide-react-native";

export default function HeroSection() {
  const router = useRouter();

  return (
    <View className="flex flex-col w-[100%]">



      <Image
        source={require("@/assets/images/deal1.jpeg")}
        resizeMode="contain"
        className="w-full h-[170px] rounded-2xl"
        
      />

      {/* Back */}

  



    </View>
  );
}