import { View, Text, Pressable } from "react-native";
import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react-native";

interface Props {
  text: string;
  Icon: LucideIcon | null;
  left?: boolean;
  right?: boolean;
  onPress: () => void;
}

const BorderButton = ({ text, Icon, left, right , onPress }: Props) => {
  return (
    <Pressable onPress={onPress} className= "border-[2px] border-buttonBackground py-4 rounded-2xl flex flex-row gap-x-2 justify-center">
      {left && (
        <>
          <Text className="font-poppins-semibold text-buttonBackground text-base">
            {text}
          </Text>

            {
              Icon && (
                <Icon
            size={20}
            color="#FF8A2B"
            strokeWidth={2.5}
           
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
            color="#FF8A2B"
            strokeWidth={2.5}
           
          />
              )
            }
          <Text className="font-poppins-semibold text-buttonBackground text-base">
            {text}
          </Text>
        </>
      )}
    </Pressable>
  );
};

export default BorderButton;
