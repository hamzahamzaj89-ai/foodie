import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Home,
  MapPin,
  Plus,
  UserRound,
} from "lucide-react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AddressCard from "../components/AddressCard";
import Button from "@/app/shared/components/Button";

type AddressType = "home" | "work" | "other";

type Address = {
  id: string;
  type: AddressType;
  title: string;
  name: string;
  phone: string;
  city: string;
  address: string;
};

const addresses: Address[] = [
  {
    id: "1",
    type: "home",
    title: "Home",
    name: "Hamza Mukhtiar",
    phone: "+92 300 1234567",
    city: "Lahore",
    address: "House 24, Street 12, Johar Town",
  },
  {
    id: "2",
    type: "work",
    title: "Work",
    name: "Hamza Mukhtiar",
    phone: "+92 300 1234567",
    city: "Lahore",
    address: "Office 12, Main Boulevard, Gulberg",
  },
  {
    id: "3",
    type: "other",
    title: "Other",
    name: "Hamza Mukhtiar",
    phone: "+92 300 1234567",
    city: "Lahore",
    address: "House 18, Model Town",
  },
];

export default function SavedAddresses() {
  const [selectedAddress, setSelectedAddress] =
    useState("1");

  const selected = addresses.find(
    (item) => item.id === selectedAddress
  );

  const handleContinue = () => {
    if (!selected) return;

    // Later pass this address to your checkout/order state.
    //
    // Example:
    //
    // setDeliveryAddress(selected);
    //
    // Then navigate back to checkout.

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
            
            >
              <ArrowLeft
                size={21}
                color="#FFFFFF"
                strokeWidth={2.3}
              />
            </Pressable>

            <View className="ml-4">
              <Text className="font-poppins-bold text-xl text-white">
                Saved Addresses
              </Text>

              <Text className="mt-0.5 font-poppins-medium text-xs text-zinc-500">
                Choose where we should deliver
              </Text>
            </View>
          </View>
        </View>

        {/* Content */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 30,
            paddingBottom: 140,
          }}
        >
          {/* Section Header */}

          <View className="mb-4 flex-row items-center justify-between">
            <Text className="font-poppins-semibold text-sm text-white">
              Your Addresses
            </Text>

            <Text className="font-poppins-medium text-xs text-zinc-400">
              {addresses.length} saved
            </Text>
          </View>

          {/* Address List */}

          {addresses.map((address) => {
            const selected =
              selectedAddress === address.id;

            return (
              <AddressCard
                key={address.id}
                address={address}
                selected={selected}
                onPress={() =>
                  setSelectedAddress(address.id)
                }
                onEdit={() => {
                  // Later:
                  // router.push({
                  //   pathname:
                  //     "/customer/(pages)/EditAddress",
                  //   params: {
                  //     addressId: address.id,
                  //   },
                  // });
                }}
              />
            );
          })}

          {/* Add New Address */}

          <Pressable
            onPress={() =>
              router.push(
                "/customer/(pages)/AddressForm"
              )
            }
            className="mt-3 h-[58px] flex-row items-center justify-center rounded-2xl  bg-card"
            android_ripple={{
              color: "rgba(255,138,43,0.08)",
            }}
          >
            <View className="h-4 w-4 items-center justify-center rounded-xl ">
              <Plus
                size={18}
                color="#FF8A2B"
                strokeWidth={2.6}
              />
            </View>

            <Text className="ml-2 font-poppins-semibold text-sm text-[#FF8A2B]">
              Add New Address
            </Text>
          </Pressable>

          {/* Selected Address Preview */}

          {selected && (
            <View className="mt-7 rounded-2xl border border-[#1C2621] bg-[#101814] p-4">
              <View className="flex-row items-center">
                <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#1C2621]">
                  <Check
                    size={18}
                    color="#44D17A"
                    strokeWidth={2.6}
                  />
                </View>

                <View className="ml-3 flex-1">
                  <Text className="font-poppins-semibold text-sm text-white">
                    Delivering to {selected.title}
                  </Text>

                  <Text
                    numberOfLines={1}
                    className="mt-1 font-poppins-medium text-xs text-zinc-500"
                  >
                    {selected.address}, {selected.city}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Bottom Action */}

          <View className="absolute w-[100%] px-5 py-5 flex justify-center items-center  rounded-t-3xl bg-black bottom-0">

                         <Button
                           onPress={() => {}}
                           text = {"Continue with order"}
                           Icon={ChevronRight}
                           left={true}
                         />

          </View>
      </View>
    </SafeAreaView>
  );
}

