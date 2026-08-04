import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

type Props = {
  text: string;
  actionText: string;
  onPress: () => void;
};

export default function AuthFooter({
  text,
  actionText,
  onPress,
}: Props) {
  return (
    <View className="mb-8 mt-0 flex-row items-center justify-center">
      <Text className="font-poppins-medium text-base text-zinc-400">
        {text}
      </Text>

      <Pressable onPress={onPress}>
        <Text className="ml-2 font-poppins-semibold text-base text-[#FF8A2B]">
          {actionText}
        </Text>
      </Pressable>
    </View>
  );
}