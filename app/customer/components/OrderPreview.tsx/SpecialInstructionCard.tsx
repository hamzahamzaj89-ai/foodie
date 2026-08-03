import React from "react";
import {
  Text,
  View,
} from "react-native";

type Props = {
  note: string;
};

export default function SpecialInstructionCard({
  note,
}: Props) {
  return (
    <View className=" mt-6 w-full rounded-3xl bg-card p-5">
      <Text className="font-poppins-bold text-xl text-white">
        Special Instructions
      </Text>

      <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
        Customer request for this order
      </Text>

      <View className="mt-5 rounded-2xl bg-primaryCard p-4">
        <Text className="font-poppins-medium text-base leading-7 text-white">
          {note || "No special instructions."}
        </Text>
      </View>
    </View>
  );
}