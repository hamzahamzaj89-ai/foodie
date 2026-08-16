import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  ArrowLeft,
  Building,
  Check,
  ChevronDown,
  ChevronRight,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/app/shared/components/InputField";
import Button from "@/app/shared/components/Button";
import { useAppStore } from "@/app/shared/store/useAppStore";
import { toast } from "@/app/shared/utils/toast";

export default function AddressForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Lahore");
  const [address, setAddress] = useState("");

  const session = useAppStore((state) => state.session)


  const isValid =
    name.trim().length > 1 &&
    phone.trim().length >= 10 &&
    city.trim().length > 1 &&
    address.trim().length > 5;

  const handleContinue = () => {
    if (!isValid) return  toast.error("Please enter all the details");

    // Later:
    // Save these values to your checkout/order state.
    //
    // Example:
    // {
    //   name,
    //   phone,
    //   city,
    //   address
    // }

    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1">
        {/* Header */}

        <View className="px-5">
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
                Delivery Details
              </Text>

              <Text className="mt-0.5 font-poppins-medium text-xs text-zinc-500">
                Where should we deliver?
              </Text>
            </View>
          </View>
        </View>

        {/* Form */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 32,
            paddingBottom: 35,
          }}
        >
          {/* Name */}

          <InputField
            label="YOUR NAME"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            icon={
              <UserRound
                size={18}
                color="#A1A1AA"
                strokeWidth={2.2}
              />
            }
          />

          {/* Phone */}

          <InputField
            label="PHONE NUMBER"
            placeholder="+92 3XX XXXXXXX"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            icon={
              <Phone
                size={18}
                color="#A1A1AA"
                strokeWidth={2.2}
              />
            }
          />

          {/* City */}


             <InputField
            label="City"
            placeholder="Plesae enter you city name"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            icon={
              <Building
                size={18}
                color="#A1A1AA"
                strokeWidth={2.2}
              />
            }
          />

         

          {/* Address */}

          <View className="mt-6">
            <Text className="mb-2 font-poppins-semibold text-[11px] tracking-wide text-zinc-500">
              DELIVERY ADDRESS
            </Text>

            <View className="min-h-[120px] rounded-2xl  bg-card px-4 py-3">
              <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="House number, street, area..."
                placeholderTextColor="#52525B"
                multiline
                textAlignVertical="top"
                className="flex-1 font-poppins-medium text-sm text-white"
              />
            </View>
          </View>

          {/* Address Preview */}

          {isValid && (
            <View className="mt-6 flex-row rounded-2xl border border-[#1C2621] bg-[#101814] p-4">
              <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#1C2621]">
                <Check
                  size={18}
                  color="#44D17A"
                  strokeWidth={2.5}
                />
              </View>

              <View className="ml-3 flex-1">
                <Text className="font-poppins-semibold text-sm text-white">
                  Address looks good
                </Text>

                <Text className="mt-1 font-poppins-medium text-xs leading-5 text-zinc-500">
                  We'll use this information for your current order.
                </Text>
              </View>
            </View>
          )}

          {/* Continue */}
   {session ? (<>

        
           <View className="flex gap-y-4 w-[100%] flex-wrap flex-col">
               <View className="flex-row w-[100%]">
                    <Button
                      left={true}
                      text="Continue with order"
                      Icon={ChevronRight}
                      onPress={() => {}}
                    />
             </View>


               <View className="flex-row w-[100%]">
                    <Button
                      left={true}
                      text="Save & Continue with order"
                      Icon={ChevronRight}
                      onPress={() => {}}
                    />
             </View>
           </View>

   
   
   </>) :  (<>

   
         
             <View className="flex-row w-[100%] mt-4">
                    <Button
                      left={true}
                      text="Continue with order"
                      Icon={ChevronRight}
                      onPress={handleContinue}
                    />
             </View>

   
   </>)}


        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

