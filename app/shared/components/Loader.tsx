import React from "react";
import {
  ActivityIndicator,
  Text,
  View,
} from "react-native";

type Props = {
  visible?: boolean;
  text?: string;
};

export default function Loader({
  visible = true,
  text = "Loading...",
}: Props) {
  if (!visible) return null;

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <ActivityIndicator
        size="large"
        color="#FF8A2B"
      />

      <Text className="mt-5 font-poppins-medium text-base text-zinc-400">
        {text}
      </Text>
    </View>
  );
}