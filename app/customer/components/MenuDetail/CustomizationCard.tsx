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
      className={`mr-4 w-[135px] rounded-[28px] border pt-12 pb-4 px-4 ${
        selected
          ? "border-[#FF8A2B] bg-[#181B20]"
          : "border-white/5 bg-card"
      }`}
      style={{
        shadowColor: selected
          ? "#FF8A2B"
          : "#000",
        shadowOpacity: selected
          ? 0.18
          : 0.1,
        shadowRadius: 18,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        elevation: selected ? 10 : 4,
      }}
    >
      {/* Floating Image */}

      <Image
        source={require("@/assets/images/cheese.png")}
        resizeMode="contain"
        className="absolute -top-7 self-center h-20 w-20"
      />

      {/* Selected Badge */}

      {selected && (
        <View className="absolute right-3 top-3 h-6 w-6 items-center justify-center rounded-full bg-[#FF8A2B]">
          <Check
            size={14}
            color="#050608"
            strokeWidth={3}
          />
        </View>
      )}

      {/* Name */}

      <Text
        numberOfLines={2}
        className="text-center font-poppins-semibold text-base text-white"
      >
        Extra Cheese
      </Text>

      {/* Price */}

      <Text className="mt-2 text-center font-poppins-semibold text-[#FF8A2B]">
        +$1.50
      </Text>
    </Pressable>
  );
}