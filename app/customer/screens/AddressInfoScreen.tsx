import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";
import {
  ArrowLeft,
  ChevronRight,
  LogIn,
  LogInIcon,
  MapPin,
  Plus,
} from "lucide-react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/app/shared/components/Button";



export default function AddressInfoPage() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 px-5">
        {/* Header */}

        <View className="flex-row items-center pt-2">
          <Pressable
            onPress={() => router.back()}
            className="h-11 w-11 items-center justify-center rounded-2xl bg-card"
            android_ripple={{
              color: "rgba(255,255,255,0.08)",
            }}
          >
            <ArrowLeft
              size={21}
              color="#FFFFFF"
              strokeWidth={2.3}
            />
          </Pressable>

          <View className="ml-4">
            <Text className="font-poppins-bold text-xl text-white">
              Delivery Address
            </Text>

            <Text className="mt-0.5 font-poppins-medium text-xs text-zinc-500">
              Where should we deliver?
            </Text>
          </View>
        </View>

        {/* Main Content */}

        <View className="flex-1 items-center justify-center">
          {/* Icon */}

          <View className="mb-7 h-24 w-24 items-center justify-center rounded-[30px] bg-primaryCard">
            <View className="h-16 w-16 items-center justify-center rounded-full bg-[#FF8A2B]/15">
              <MapPin
                size={32}
                color="#FF8A2B"
                strokeWidth={2.2}
              />
            </View>
          </View>

          {/* Title */}

          <Text className="text-center font-poppins-bold text-2xl text-white">
            Choose your delivery
            {"\n"}
            address
          </Text>

          {/* Description */}

          <Text className="mt-3 max-w-[320px] text-center font-poppins-medium text-sm leading-6 text-zinc-500">
            Sign in to access your saved addresses,
           
          </Text>

          {/* Actions */}

          <View className="mt-10 w-full">
            {/* Sign In */}

               <Button
                 onPress={() => {router.push("/customer/(auth)/SignIn")}}
                 text={"Continue to SignIn"}
                 left={true}
                 Icon={LogInIcon}
               />


          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}