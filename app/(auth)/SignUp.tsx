import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";

import { router } from "expo-router";

import AuthHero from "@/app/shared/components/Auth/AuthHero";
import AuthHeader from "@/app/shared/components/Auth/AuthHeader";
import SignupForm from "@/app/shared/components/Auth/SignUpForm";
import SocialLogin from "@/app/shared/components/Auth/SocialLogin";
import AuthFooter from "@/app/shared/components/Auth/AuthFooter";
import Button from "@/app/shared/components/Button";
import { useSignUp } from "../shared/hooks/Auth/useSignUp";
import { toast } from "../shared/utils/toast";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =useState("");



  const { mutate, isPending, error } = useSignUp();



  const onSubmit = async () => {

    if (password !== confirmPassword) {
         return toast.error("Password Mismatch" , "Please try again")
    }



  try {



     const data = await mutate({
      email:email,
      password:password,
      fullName:name
      
    });


     console.log("sucess")


     router.push("/(auth)/VerifyEmail")

   
     

    
  } catch (error) {
    console.log(error);
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

        <AuthHero
          image={require("@/assets/images/deal1.jpeg")}
        />

            <View className="-mt-10">
              
        <AuthHeader
          title="Create Account"
          description="Join thousands of food lovers and discover amazing meals near you."
        />
            </View>


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


          <View className="px-5 mt-2">
               <Button
         text="Create Account"
         onPress={onSubmit}
         left={true}
         disabled={isPending}
         
         />

          </View>
        


        <SocialLogin
          onGooglePress={() => {}}
          onApplePress={() => {}}
        />


        <AuthFooter
          text="Already have an account?"
          actionText="Sign In"
          onPress={() => router.back()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}