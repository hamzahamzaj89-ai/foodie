import React from "react";
import {
  Text,
  View,
} from "react-native";

type Props = {
  title: string;
  description: string;
};

export default function AuthHeader({
  title,
  description,
}: Props) {
  return (
    <View className="mt-8 px-6">
      {/* Title */}

      <Text className="font-poppins-bold text-4xl text-white">
        {title}
      </Text>

      {/* Description */}

      <Text
        className="mt-3 font-poppins-medium text-base leading-7 text-zinc-400"
      >
        {description}
      </Text>
    </View>
  );
}