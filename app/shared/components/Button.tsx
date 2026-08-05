import { View, Text, Pressable } from "react-native";
import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react-native";

interface Props {
  text: string;
  Icon?: LucideIcon | null;
  left?: boolean;
  right?: boolean;
  onPress: () => void;
  disabled?: boolean 
}

const Button = ({ text, Icon, left, right , onPress , disabled = false }: Props) => {
  return (
    <Pressable disabled={disabled} onPress={onPress} className="bg-buttonBackground py-4  rounded-2xl gap-x-1 flex flex-row w-[100%] items-center  justify-center">
      {left && (
        <>
          <Text className="font-poppins-bold text-black text-base">
            {text}
          </Text>

         
            {
              Icon && (
                <Icon
            size={20}
            color="black"
            strokeWidth={3}
           
          />
              )
            }
        </>
      )}

      {right && (
        <>
         
            {
              Icon && (
                <Icon
            size={20}
            color="black"
            strokeWidth={3}
           
          />
              )
            }

          <Text className="font-poppins-bold text-black text-base">
            {text}
          </Text>
        </>
      )}
    </Pressable>
  );
};

export default Button;
