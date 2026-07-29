import React from "react";
import {
  Text,
  View,
} from "react-native";

export default function DateHeader({
  title,
}: {
  title: string;
}) {
  return (
    <View className=" px-1 mb-4 mt-2">
      <Text className="font-poppins-semibold text-xl text-white">
        {title}
      </Text>
    </View>
  );
}