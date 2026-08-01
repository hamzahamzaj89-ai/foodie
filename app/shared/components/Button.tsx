import { View, Text, Pressable } from "react-native";
import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react-native";

interface Props {
  text: string;
  Icon: LucideIcon;
  left?: boolean;
  right?: boolean;
  onPress: () => void;
}

const Button = ({ text, Icon, left, right , onPress }: Props) => {
  return (
    <Pressable onPress={onPress} className="bg-buttonBackground py-4  rounded-2xl gap-x-2 flex flex-row  justify-center">
      {left && (
        <>
          <Text className="font-poppins-semibold text-white text-base">
            {text}
          </Text>

          <Icon
            size={20}
            color="white"
            strokeWidth={2.5}
          />
        </>
      )}

      {right && (
        <>
          <Icon
            size={20}
            color="white"
            strokeWidth={2.5}
          />

          <Text className="font-poppins-semibold text-white text-base">
            {text}
          </Text>
        </>
      )}
    </Pressable>
  );
};

export default Button;
