import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";

import AuthHero from "@/app/shared/components/Auth/AuthHero";
import AuthHeader from "@/app/shared/components/Auth/AuthHeader";
import LoginForm from "@/app/shared/components/Auth/LoginForm";
import SocialLogin from "@/app/shared/components/Auth/SocialLogin";
import AuthFooter from "@/app/shared/components/Auth/AuthFooter";
import Button from "@/app/shared/components/Button";
import { toast } from "../../shared/utils/toast";
import { useSignIn } from "../../shared/hooks/Auth/useSignIn";



export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {mutateAsync, isPending, error} = useSignIn()

  const onSubmit = async () => {


    try {


      await  mutateAsync({
        email,
        password
      })


        router.back();

    } catch (error) {
        toast.error("Sign In Failed " , "Please Try again")
    }

  }

  

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
           <View className="-mt-8">
            
        <AuthHeader
          title="Welcome Back"
          description="Sign in for ordering your favorite meals."
        />
           </View>

        {/* Form */}

        <LoginForm
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onForgotPassword={() => {}}
        />

        {/* Continue Button */}

            <View className="px-5">
                 <View className="mt-2 flex flex-row">
            <Button
            text="Continue"
            left={true}
            onPress={onSubmit}
            disabled={isPending}
            />
           </View>
            </View>

        {/* Divider */}

       

        {/* Social */}

        <SocialLogin
          onGooglePress={() => {}}
          onApplePress={() => {}}
        />

        {/* Footer */}

        <AuthFooter
          text="Don't have an account?"
          actionText="Create Account"
          onPress={() => router.replace("/customer/SignUp")}
        />

        
      </ScrollView>
    </SafeAreaView>
  );
}