import React from "react";
import {
  Text,
  View,
} from "react-native";


interface Props {
  title: string,
  description : string,
  subtitle: string,
  originalPrice: number,
  newPrice: number,
  save: number
}

export default function InfoSection({
  title,
  description,
  save,
  originalPrice,
  newPrice,
  subtitle
}: Props) {


  return (
    <View className=" pt-6">
      {/* Deal Name */}

      <Text className="font-poppins-bold text-3xl text-white">
        {title}
      </Text>

      {/* Subtitle */}

      <Text className="mt-2 font-poppins-medium text-base text-zinc-400">
        {subtitle}
      </Text>

      {/* Save Badge */}

      <View className="mt-5 self-start rounded-full bg-[#1A1208] px-4 py-2">
        <Text className="font-poppins-semibold text-sm text-buttonBackground">
          Save ${save}
        </Text>
      </View>

      {/* Price */}

      <View className="mt-5 flex-row items-end">

        <Text className="font-poppins-bold text-4xl text-white">
          ${newPrice}
        </Text>

        <Text className="ml-3 mb-1 font-poppins-medium text-lg text-zinc-500 line-through">
          ${originalPrice}
        </Text>
      </View>

      {/* Description */}

      <Text className="mt-5 font-poppins-medium text-base leading-6 text-zinc-400">
        Enjoy our best-selling family combo with burgers,
        fries and refreshing drinks at an exclusive bundle
        price. Perfect for sharing with family and friends.
      </Text>
    </View>
  );
}