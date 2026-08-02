import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { Check, CheckCheckIcon, CheckCircle } from "lucide-react-native";

type Props = {
  selected?: boolean;
};

export default function CustomizationCard({
  selected = false,
}: Props) {
  return (
    <Pressable
      className={` w-[105px] relative rounded-2xl  pt-3 pb-3 px-2  `}
     
    >

      <View className="absolute right-3 bottom-3">
              <CheckCircle
              color={"orange"}
              size={15}
              />
      </View>

         

        <Text
        numberOfLines={2}
        className="text-center font-poppins-semibold text-sm text-white"
      >
        Extra Cheese
      </Text>

      {/* Floating Image */}

      <Image
        source={require("@/assets/images/french_fries.png")}
        resizeMode="contain"
        className="  self-center h-10 w-15"
      />

      {/* Selected Badge */}


      {/* Name */}

      
      {/* Price */}

      <Text className="mt-0 text-center font-poppins-semibold text-xs text-buttonBackground">
        +$1.50
      </Text>
    </Pressable>
  );
}