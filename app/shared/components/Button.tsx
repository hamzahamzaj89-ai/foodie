import { View, Text, Pressable } from "react-native";
import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react-native";
import { ActivityIndicator } from "react-native";
import { Circle } from "react-native-animated-spinkit";

interface Props {

  text: string;
  Icon?: LucideIcon | null;
  left?: boolean;
  right?: boolean;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;

}


const Button = ({
  text,
  Icon,
  left,
  right,
  onPress,
  disabled = false,
  loading = false,
}: Props) => {
  return (
    <>
      {loading ? (
        <>
          <Pressable
            disabled={loading}
            onPress={onPress}
            className="bg-buttonBackground py-4  rounded-2xl gap-x-1 flex flex-row w-[100%] items-center  justify-center"
          >
            <Circle size={20} color="#000" />
          </Pressable>
        </>
      ) : (
        <>
          <Pressable
            disabled={disabled}
            onPress={onPress}
            className="bg-buttonBackground py-4  rounded-2xl gap-x-1 flex flex-row w-[100%] items-center  justify-center"
          >
            {left && (
              <>
                <Text className="font-poppins-bold text-black text-base">
                  {text}
                </Text>

                {Icon && <Icon size={20} color="black" strokeWidth={3} />}
              </>
            )}

            {right && (
              <>
                {Icon && <Icon size={20} color="black" strokeWidth={3} />}

                <Text className="font-poppins-bold text-black text-base">
                  {text}
                </Text>
              </>
            )}
          </Pressable>
        </>
      )}
    </>
  );
};

export default Button;
