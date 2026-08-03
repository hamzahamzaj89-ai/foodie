import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function SpecialInstructions({
  value,
  onChangeText,
}: Props) {
  const [note, setNote] = useState("");

  const handleChange = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    } else {
      setNote(text);
    }
  };

  return (
    <View className="mt-8 ">
      {/* Title */}

      <Text className="font-poppins-bold text-xl text-white">
        Special Instructions
      </Text>

      {/* Subtitle */}

      <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
        Let the restaurant know if you have any special requests.
      </Text>

      {/* Input */}

      <TextInput
        multiline
        numberOfLines={5}
        value={value ?? note}
        onChangeText={handleChange}
        placeholder="Add a note for the restaurant..."
        placeholderTextColor="#71717A"
        textAlignVertical="top"
        maxLength={250}
        className="mt-5 rounded-2xl bg-card p-4 font-poppins-medium text-base text-white"
        style={{
          minHeight: 130,
        }}
      />

      {/* Character Count */}

      <Text className="mt-2 self-end font-poppins-medium text-xs text-zinc-500">
        {(value ?? note).length}/250
      </Text>
    </View>
  );
}