import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import {
  CircleCheckBig,
  ChevronRight,
} from "lucide-react-native";

export default function OrderCard({
  title,
  imageUrl,
  status,
  moreItems,
 price

}:{
   title:string
   imageUrl:string
   status:string
   moreItems:number 
   price: number
}) {

  return (
    <Pressable
      className=" mb-5   rounded-3xl  bg-card p-4"
     
    >
      {/* Top Section */}

      <View className="flex-row  ">
        {/* Food Image */}

           <View className="w-20 h-24 relative">
              <Image
            source={{
              uri: imageUrl as string
            }}
            resizeMode="contain"
            className="h-36 w-36 absolute -left-5 -top-4 "
          />
           </View>

        {/* Content */}

        <View className="ml-10 mt-3 flex-1 justify-between">
          <View>
            <Text className="font-poppins-semibold text-lg text-white">
              {title}
            </Text>

            <Text className="mt-1 font-poppins-medium text-xs text-zinc-400">
              +{moreItems} More Items
            </Text>

         
          </View>

          <Text className="font-poppins-bold text-xl text-white">
            ${price}
          </Text>
        </View>
      </View>

      {/* Divider */}

      <View className="my-5 h-[1px] bg-border" />

      {/* Bottom */}

      <View className="flex-row items-center justify-between">
        {/* Status */}

        <View className="flex-row items-center rounded-2xl bg-[#1C2621] px-3 py-2">
          <CircleCheckBig
            size={16}
            color="#22C55E"
            strokeWidth={2.5}
          />

          <Text className="ml-2 font-poppins-semibold text-sm text-[#22C55E]">
            {status}
          </Text>
        </View>

        {/* Details */}

        <Pressable className="flex-row items-center rounded-2xl border-[2px] border-buttonBackground px-4 py-3">
          <Text className="font-poppins-semibold text-sm text-[#FF8A2B]">
            Details
          </Text>

          <ChevronRight
            size={16}
            color="#FF8A2B"
            strokeWidth={2.5}
            style={{ marginLeft: 4 }}
          />
        </Pressable>
      </View>
    </Pressable>
  );
}