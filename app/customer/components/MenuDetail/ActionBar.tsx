import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";
import {
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react-native";

export default function BottomActionBar() {
  const [quantity, setQuantity] = useState(1);

  return (
    <View
      className="absolute bottom-0 left-0 right-0 rounded-t-[20px] bg-card px-5 pt-5 pb-8"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 25,
        shadowOffset: {
          width: 0,
          height: -8,
        },
        elevation: 20,
      }}
    >
      <View className="flex-row items-center">
        {/* Quantity */}

        <View>

                 <View className="mr-4 flex-row items-center rounded-2xl bg-[#111317] p-1">
          <Pressable
            onPress={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
            className="h-11 w-11 items-center justify-center rounded-full bg-[#1B1E23]"
          >
            <Minus
              size={18}
              color="white"
              strokeWidth={2.5}
            />
          </Pressable>

          <Text className="mx-5 font-poppins-bold text-lg text-white">
            {quantity}
          </Text>

          <Pressable
            onPress={() =>
              setQuantity(quantity + 1)
            }
            className="h-11 w-11 items-center justify-center rounded-full bg-[#FF8A2B]"
          >
            <Plus
              size={18}
              color="#050608"
              strokeWidth={3}
            />
          </Pressable>
        </View>

     
        </View>

   

        {/* Add To Cart */}

        <Pressable className="flex-1 flex-row items-center justify-center  mt-[2px] rounded-2xl bg-[#FF8A2B] px-5 py-4">
         

          <View className="flex-row items-center">
            <ShoppingBag
              size={20}
              color="black"
            />

            <Text className="ml-2 font-poppins-bold text-black">
              Add to Cart   $20
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}