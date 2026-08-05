import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  Eye,
  EyeOff,
  Lock,
} from "lucide-react-native";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChangeText,
}: Props) {
  const [hidden, setHidden] = useState(true);

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
        {/* Lock Icon */}

         <View className="mb-1">
              <Lock
          size={20}
          color="#FF8A2B"
          strokeWidth={2}
        />
         </View>

        {/* Input */}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#71717A"
          secureTextEntry={hidden}
          autoCapitalize="none"
          autoCorrect={false}
          className="flex-1 px-4 py-5 font-poppins-medium text-base text-white"
        />

        {/* Eye */}

        <Pressable
          hitSlop={10}
          onPress={() => setHidden(!hidden)}
        >
          {hidden ? (
            <Eye
              size={20}
              color="#71717A"
              strokeWidth={2}
            />
          ) : (
            <EyeOff
              size={20}
              color="#FF8A2B"
              strokeWidth={2}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}