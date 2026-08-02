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

export default function ProductInfo() {
  return (
    <View className="-mt-4">
      {/* Food Name */}

      <Text className="font-poppins-bold text-[32px] text-white">
        Cheese Burger
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
            4.8
          </Text>

          <Text className="ml-1 font-poppins-medium text-zinc-400">
            (1.2k)
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
            650 kcal
          </Text>
        </View>
      </View>

      {/* Description */}

      <Text className="mt-4 font-poppins-medium leading-6 text-zinc-400">
        Double grilled beef patty layered with melted cheddar cheese,
        crisp lettuce, fresh tomatoes, pickles and our signature
        house sauce served inside a freshly toasted brioche bun.
      </Text>
    </View>
  );
}