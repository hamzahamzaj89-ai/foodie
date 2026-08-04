import React from "react";
import { View } from "react-native";

import { Mail, UserRound } from "lucide-react-native";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

type Props = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  onNameChange: (text: string) => void;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onConfirmPasswordChange: (text: string) => void;
};

export default function SignupForm({
  name,
  email,
  password,
  confirmPassword,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
}: Props) {
  return (
    <View className="mt-8 px-6">
      {/* Full Name */}

      <AuthInput
        label="Full Name"
        placeholder="Enter your full name"
        value={name}
        onChangeText={onNameChange}
        autoCapitalize="words"
        icon={
          <UserRound
            size={20}
            color="#FF8A2B"
            strokeWidth={2}
          />
        }
      />

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
        placeholder="Create a password"
        value={password}
        onChangeText={onPasswordChange}
      />

      {/* Confirm Password */}

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={onConfirmPasswordChange}
      />
    </View>
  );
}