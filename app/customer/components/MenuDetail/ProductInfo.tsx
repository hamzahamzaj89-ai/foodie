import React from "react";
import {
  Text,
  View,
} from "react-native";
import {
  Clock3,
  Flame,
  Star,
} from "lucide-react-native";


interface IProductInfo {
  title:string,
  description: string | null,
  rating: number | null,
  reviewsCount: number | null,
  calories: number 
}

export default function ProductInfo({productInfo} : {productInfo: IProductInfo}) {
  return (
    <View className="-mt-4">
      {/* Food Name */}


      <Text className="font-poppins-bold text-[32px] text-white">
        {productInfo.title}  
      </Text>

      {/* Rating + Time + Calories */}

      <View className="mt-3 flex-row items-center">
        {/* Rating */}

        <View className="mr-5 flex-row items-center">
          <Star
            size={16}
            color="#FFB547"
            fill="#FFB547"
             style={{
                marginBottom: 3
            }}
          />

          <Text className="ml-2 font-poppins-semibold text-white">
            {productInfo.rating ?? 0}
          </Text>

          <Text className="ml-1 font-poppins-medium text-zinc-400">
            ({productInfo.reviewsCount ?? 0})
          </Text>
        </View>

        {/* Time */}

        <View className="mr-5  flex-row items-center">
          <Clock3
            size={15}
            color="#9CA3AF"
            style={{
                marginBottom: 3
            }}
          />

          <Text className="ml-2 font-poppins-medium text-zinc-400">
            20-25 min
          </Text>
        </View>

        {/* Calories */}

        <View className="flex-row items-center">
          <Flame
            size={15}
            color="#FF8A2B"
             style={{
                marginBottom: 3
            }}
          />


          <Text className="ml-2 font-poppins-medium text-zinc-400">

            {productInfo.calories ?? 0}
          </Text>
        </View>
      </View>

      {/* Description */}

      <Text className="mt-4 font-poppins-medium leading-6 text-zinc-400">
        {productInfo.description}
      </Text>
    </View>
  );
}