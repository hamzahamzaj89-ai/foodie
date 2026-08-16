import React from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;

  icon?: React.ReactNode;

  keyboardType?: KeyboardTypeOptions;

  autoCapitalize?:
    | "none"
    | "sentences"
    | "words"
    | "characters";

  autoCorrect?: boolean;
};

export default function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  keyboardType = "default",
  autoCapitalize = "none",
  autoCorrect = false,
}: Props) {
  return (
    <View className="mb-5">
      {/* Label */}

      <Text className="mb-3 ml-1 font-poppins-semibold text-base text-zinc-300">
        {label}
      </Text>

      {/* Input */}

      <View
        className="flex-row items-center rounded-xl bg-card px-5"
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.12,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: 8,
          },
          elevation: 5,
        }}
      >
        {icon && (
          <View className="mr-2 mb-[4px]">
            {icon}
          </View>
        )}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#71717A"
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          className="flex-1 py-5 font-poppins-medium text-base text-white"
          textAlignVertical="center"
        />
      </View>
    </View>
  );
}