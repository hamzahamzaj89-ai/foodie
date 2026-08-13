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
  customization: ICustomizationOption | IAddOns;
  onPress: () => void;
};

export default function ExtraCard({
  customization,

  selected = false,
  onPress
}: Props) {



  console.log(customization.image_url)

    
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
        numberOfLines={1}
        className="text-center font-poppins-semibold text-sm text-white pb-1"
      >
        {customization?.name}
      </Text> 


      <Image
        source={{
          uri: customization.image_url ?? ""
        }}
        resizeMode="contain"
        className="  self-center h-8 w-14 "
      />

      {/* Selected Badge */}


      {/* Name */}

      
      {/* Price */}

      <Text className="mt-0 text-center font-poppins-semibold text-xs text-buttonBackground pt-1">
        +${customization?.price}
      </Text>
    </View>
  );
}