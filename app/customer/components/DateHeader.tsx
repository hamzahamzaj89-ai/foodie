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
    <View className=" px-1 mb-2 mt-4">
      <Text className="font-poppins-bold text-2xl text-white">
        {title}
      </Text>
    </View>
  );
}