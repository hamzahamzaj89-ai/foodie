import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { Check, CheckCheckIcon, CheckCircle } from "lucide-react-native";
import { ICustomizationOption } from "@/interface/IMenu";
import { ICartCustomization } from "@/interface/ICart";
import { IAddOns } from "@/interface/IAddOns";

type Props = {
  selected?: boolean | undefined;
  customization: ICustomizationOption | IAddOns| null;
  onPress: () => void;
};

export default function ExtraCard({
  customization,

  selected = false,
  onPress
}: Props) {



    
  return (
    <View
      className={` w-[100px] relative rounded-xl bg-card  pt-2 pb-2 px-2  `}
     
    >


   <Pressable className="absolute inset-0 z-[40]" onPress={onPress}/>


         
         {selected && (
          <View className="absolute right-3 bottom-[8px]">
              <CheckCircle
              color={"orange"}
              size={15}
              />
      </View>
         )}

         

        <Text
        numberOfLines={2}
        className="text-center font-poppins-semibold text-sm text-white"
      >
        {customization?.name}
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
        +${customization?.price}
      </Text>
    </View>
  );
}