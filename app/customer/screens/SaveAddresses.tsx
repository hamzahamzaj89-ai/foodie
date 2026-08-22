import React, { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building,
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
import { useUserAddresses } from "@/app/shared/hooks/useAddresses";
import Loader from "@/app/shared/components/Loader";
import StatusScreen from "./StatusScreen";
import Header from "../components/Header";
import AddressListSkeleton from "../components/skeletons/Addresses/AddressSkeletonList";
import { useAppStore } from "@/app/shared/store/useAppStore";
import { useAddressStore } from "../store/useAddressStore";
import { IAddress } from "@/interface/IAddress";
import { toast } from "@/app/shared/utils/toast";
import { capitalize } from "@/app/shared/utils/helpingFunctions";



export default function SavedAddresses() {
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  const setSelectedAddress = useAddressStore((state) => state.setSelectedAddress)
  const selectedAddress = useAddressStore((state) => state.selectedAddress)

  const {data:addresses , isPending , error} = useUserAddresses();


    useEffect(() => {

      if (!addresses || addresses?.length === 0) {
         return 
      }
       
      setSelectedAddress(addresses[selectedAddressIndex])

 
    } , [addresses , selectedAddressIndex])


  if (error) {
     return <StatusScreen
     type="error"
         title="Server Error"
         message={error.message}
         buttonTitle="Go Back"
         right ={true}
         Icon={ArrowLeft}
         onPress={() => {router.back()}}
     />
  }



    if (addresses?.length === 0) {
        return <StatusScreen
        type="info"
         title="Address Not Found"
         message="No addresses is available for this user"
         buttonTitle="Add a address"
         right ={true}
         Icon={Building}
         onPress={() => {router.push("/customer/(pages)/AddressForm")}}
             
        />
  }






  const handleContinue = () => {
    if (!selectedAddress) return toast.error("Plesae add a address for this order");
   
     router.push("/customer/(pages)/OrderPreview")


  };









  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1">
        {/* Header */}
         
         <View className="px-5">
          <Header title="Saved Addresses" description="Choose where we should deliver" />
         </View>

        {/* Content */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10,
            paddingBottom: 140,
          }}
        >
          {/* Section Header */}

          <View className="mb-4 flex-row items-center justify-between">
            <Text className="font-poppins-semibold text-sm text-white">
              Your Addresses
            </Text>

            <Text className="font-poppins-medium text-xs text-zinc-400">
              {addresses?.length} saved
            </Text>
          </View>

          {/* Address List */}

            {
              isPending ? (<> 

               <AddressListSkeleton/>
              
              </>) : (<>
                   {addresses.map((address , index) => {
            const selected = index === selectedAddressIndex
              

            return (
              <AddressCard
                key={address.id}
                address={address}
                selected={selected}
                onPress={() =>
                  setSelectedAddressIndex(index)
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

                </>)
            }
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

          {selectedAddress && (
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
                    Delivering to {capitalize(selectedAddress.type)}
                  </Text>

                  <Text
                    numberOfLines={1}
                    className="mt-1 font-poppins-medium text-xs text-zinc-500"
                  >
                    {selectedAddress.address}, {selectedAddress.city}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Bottom Action */}

          <View className="absolute w-[100%] px-5 py-5 flex justify-center items-center  rounded-t-3xl bg-black bottom-0">

                         <Button
                           onPress={handleContinue}
                           text = {"Continue with order"}
                           Icon={ChevronRight}
                           left={true}
                         />

          </View>
      </View>
    </SafeAreaView>
  );
}

