import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { BriefcaseBusiness, Home, MapPin } from 'lucide-react-native'

const AddressTypes = ({addressType , setAddressType}: {addressType : string , setAddressType: any}) => {

    const  addressTypes =
      [
        {
          type: "home",
          label: "Home",
          icon: Home,
        },
        {
          type: "work",
          label: "Work",
          icon: BriefcaseBusiness,
        },
        {
          type: "other",
          label: "Other",
          icon: MapPin,
        },
      ] 
    
    
  return (
    <View className="mb-5">
  <Text className="mb-1 font-poppins-semibold text-[11px] tracking-[1.2px] text-zinc-500">
    SAVE ADDRESS AS
  </Text>

  <View className="flex-row gap-3">
    {addressTypes.map(({ type, label, icon: Icon }) => {
      const selected = addressType === type;

      return (
        <Pressable
          key={type}
          onPress={() => setAddressType(type)}
          className={`flex-1 flex-row items-center justify-center gap-2 rounded-xl border py-3 ${
            selected
              ? "border-[#FF8A2B] bg-[#FF8A2B]/10"
              : "border-zinc-800 bg-card"
          }`}
        >
          <Icon
            size={17}
            strokeWidth={selected ? 2.2 : 1.8}
            color={selected ? "#FF8A2B" : "#71717A"}
          />

          <Text
            className={`font-poppins-semibold text-xs ${
              selected ? "text-white" : "text-zinc-400"
            }`}
          >
            {label}
          </Text>
        </Pressable>
      );
    })}
  </View>
</View>
  )
}

export default AddressTypes