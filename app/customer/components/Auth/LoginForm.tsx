import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import { Mail } from "lucide-react-native";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

type Props = {
  email: string;
  password: string;

  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;

  onForgotPassword: () => void;
};

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onForgotPassword,
}: Props) {
  return (
    <View className="mt-4 px-5">
      {/* Email */}

      <AuthInput
        label="Email Address"
        placeholder="Enter your email"
        value={email}
        onChangeText={onEmailChange}
        keyboardType="email-address"
        icon={
          <Mail
            size={20}
            color="#FF8A2B"
            strokeWidth={2}
          />
        }
      />

      {/* Password */}

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={onPasswordChange}
      />

      {/* Forgot Password */}

      <Pressable
        onPress={onForgotPassword}
        className="self-end"
      >
       
      </Pressable>
    </View>
  );
}