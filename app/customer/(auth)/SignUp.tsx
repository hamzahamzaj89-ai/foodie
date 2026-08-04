import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";

import AuthHero from "@/app/customer/components/Auth/AuthHero";
import AuthHeader from "@/app/customer/components/Auth/AuthHeader";
import SignupForm from "@/app/customer/components/Auth/SignUpForm";
import SocialLogin from "@/app/customer/components/Auth/SocialLogin";
import AuthFooter from "@/app/customer/components/Auth/AuthFooter";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  return (
    <SafeAreaView
      edges={["bottom"]}
      className="flex-1 bg-black"
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Hero */}

        <AuthHero
          image={require("@/assets/images/deal1.jpeg")}
        />

        {/* Header */}

        <AuthHeader
          title="Create Account"
          description="Join thousands of food lovers and discover amazing meals near you."
        />

        {/* Form */}

        <SignupForm
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          onNameChange={setName}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onConfirmPasswordChange={setConfirmPassword}
        />

        {/* Create Account Button */}

        <Pressable
          className="mx-6 mt-8 items-center rounded-2xl bg-[#FF8A2B] py-5"
          onPress={() => {}}
        >
          <Text className="font-poppins-bold text-lg text-[#050608]">
            Create Account
          </Text>
        </Pressable>

        {/* Divider */}

        <Text className="mt-8 text-center font-poppins-medium text-zinc-500">
          ─────────── OR ───────────
        </Text>

        {/* Social Login */}

        <SocialLogin
          onGooglePress={() => {}}
          onApplePress={() => {}}
        />

        {/* Footer */}

        <AuthFooter
          text="Already have an account?"
          actionText="Sign In"
          onPress={() => router.back()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}