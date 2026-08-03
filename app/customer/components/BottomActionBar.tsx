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
import Counter from "./Counter";

export default function BottomActionBar() {


  const [quantity , setQuantity] = useState(1)
 

  return (
    
    <View
      className="absolute bottom-0 left-0 right-0 rounded-t-[30px] bg-card px-5 pt-5 pb-8"
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


        <Counter
           quantity={quantity}
           onIncrease={() => {setQuantity((prev) => prev + 1)}}
           onDecrease={() => { quantity > 0 &&  setQuantity((prev) => prev - 1)}}
        
        />
     
   

        {/* Add To Cart */}

        <Pressable className="flex-1 flex-row items-center justify-center  mt-[2px] rounded-2xl bg-buttonBackground px-5 py-[13px]">
         

          <View className="flex-row items-center">
            <ShoppingBag
              size={20}
              color="black"
            />

            <Text className="ml-2 mt-1 font-poppins-bold text-black">
              Add to Cart   $20
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );




}