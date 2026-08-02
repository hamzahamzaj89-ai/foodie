import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { Check } from "lucide-react-native";

type Props = {
  selected?: boolean;
};

export default function CustomizationCard({
  selected = false,
}: Props) {
  return (
    <Pressable
      className={` w-[105px] rounded-2xl border-[2px] pt-3 pb-3 px-2 ${
        selected
          ? "border-[#FF8A2B] bg-card"
          : " bg-card"
      }`}
     
    >

        <Text
        numberOfLines={2}
        className="text-center font-poppins-semibold text-sm text-white"
      >
        Extra Cheese
      </Text>

      {/* Floating Image */}

      <Image
        source={require("@/assets/images/french_fries.png")}
        resizeMode="contain"
        className="  self-center h-10 w-15"
      />

      {/* Selected Badge */}


      {/* Name */}

      
      {/* Price */}

      <Text className="mt-1 text-center font-poppins-semibold text-xs text-buttonBackground">
        +$1.50
      </Text>
    </Pressable>
  );
}