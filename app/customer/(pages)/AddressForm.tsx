import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Home,
  Map,
  MapPin,
  PersonStanding,
  Phone,
  PhoneCall,
  User,
  UserRound,
} from "lucide-react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/app/shared/components/InputField";
import Button from "@/app/shared/components/Button";
import { useAppStore } from "@/app/shared/store/useAppStore";
import { toast } from "@/app/shared/utils/toast";
import Header from "../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useInsertAddress } from "@/app/shared/hooks/useAddresses";
import AddressTypes from "../components/AddressTypes";
import { useAddressStore } from "../store/useAddressStore";
export default function AddressForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Lahore");
  const [address, setAddress] = useState("");
  const [specialInstruction , setSpecialInstruction] = useState("")
  const setSelectedAddress  = useAddressStore((state) => state.setSelectedAddress)

   

  const [addressType, setAddressType] = useState<"home" | "work" | "other">("home");

  const {
    mutateAsync: createAddress,
    isPending,
    isError,
    error,
  } = useInsertAddress();

  const session = useAppStore((state) => state.session);

  const isValid =
    name.trim().length > 1 &&
    phone.trim().length >= 10 &&
    city.trim().length > 1 &&
    address.trim().length > 5;

  const handleContinue = () => {};

const handleSaveAndContinue = async () => {
  try {
    // 1. Validate
    if (!name || !phone || !city || !address) {
      throw new Error("Please fill all required fields");
    }

    // 2. Insert address
    const newAddress = await createAddress({
      type: addressType,
      name,
      phone_number: phone,
      city,
      address,
      special_instruction: specialInstruction,
      user_id: session?.user.id as string
    });


    setSelectedAddress(newAddress)

    
    toast.success("Adddress added successfully")


    // navigate to order screen
    router.push("/customer/OrderPreview")

  } catch (error) {
    console.error("Failed to create address:", error);

    // show toast
  }
};

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="px-0">
        <View className="px-5">
          <Header
            title="Create Address"
            description="Create address to save or use for the order"
          />
        </View>
      </View>
      <KeyboardAwareScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 10,
          paddingBottom: 50,
        }}
        enableOnAndroid
        extraScrollHeight={30}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        <AddressTypes addressType={addressType} setAddressType={setAddressType}/>
   
        <InputField
          label="YOUR NAME"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          icon={<>
             <View className="pt-1">
                    <User 
                    size={17}
            strokeWidth={2}
            color={"#71717A"}
                      
                    />
             </View>
          </>}

        />

        <InputField
          label="PHONE NUMBER"
          placeholder="+92 3XX XXXXXXX"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          icon={<>
             <View className="pt-1">
                    <PhoneCall 
                    size={17}
            strokeWidth={2}
            color={"#71717A"}
                    />
             </View>
          </>}
        />

        <InputField
          label="CITY"
          placeholder="Please enter your city name"
          value={city}
          onChangeText={setCity}
          icon={<>
             <View className="pt-1">
                    <Building2
                    size={17}
            strokeWidth={2}
            color={"#71717A"}
                    />
             </View>
          </>}
        />

        <InputField
          label="ADDRESS"
          placeholder="Please enter your address"
          value={address}
          onChangeText={setAddress}
          icon={<>
             <View className="pt-1">
                    <MapPin
                    size={17}
            strokeWidth={2}
            color={"#71717A"}
                    />
             </View>
          </>}
        />

        <View className="mt-3">
          <Text className="mb-2 font-poppins-semibold text-[11px] tracking-wide text-zinc-500">
            SPECIAL INSTRUCTION
          </Text>

          <View className="min-h-[120px] rounded-2xl bg-card px-4 py-3">
            <TextInput
              value={specialInstruction}
              onChangeText={setSpecialInstruction}
              placeholder="Add special instruction for the order"
              placeholderTextColor="#52525B"
              multiline
              textAlignVertical="top"
              className="flex-1 font-poppins-medium text-sm text-white"
            />
          </View>
        </View>

        {/* Preview */}

        {isValid && (
          <View className="mt-6 flex-row rounded-2xl border border-[#1C2621] bg-[#101814] p-4">
            <Text className="text-green-400">
              This Order is Valid to continue with this order
            </Text>
          </View>
        )}

        {/* Buttons */}
        <View className=" mt-4 flex gap-y-4 w-[100%] flex-wrap flex-col">
          {" "}
          <View className="flex-row w-[100%]">
            {" "}
            <Button
              left={true}
              
              text="Continue with order"
              Icon={ChevronRight}
              onPress={handleContinue}
            />{" "}
          </View>{" "}
          <View className="flex-row w-[100%] -mt-2">
            {" "}
            <Button
              left={true}
              text="Save & Continue with order"
              loading={isPending}
              Icon={ChevronRight}
              onPress={handleSaveAndContinue}
            />{" "}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
