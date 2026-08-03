import React, { useMemo } from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import {
    ChevronLeftIcon,
  CircleAlert,
  CircleCheckBig,
  Info,
} from "lucide-react-native";
import Button from "@/app/shared/components/Button";

type StatusType =
  | "error"
  | "success"
  | "info";

type Props = {
  type?: StatusType;

  title: string;

  message: string;

  buttonTitle?: string;

  onPress?: () => void;
};

export default function StatusScreen({
  type = "info",
  title,
  message,
  buttonTitle,
  onPress,
}: Props) {


  const getIcon = () => {
    switch (type) {
      case "error":
        return (
          <CircleAlert
            size={44}
            color="#FF8A2B"
            strokeWidth={2}
          />
        );

      case "success":
        return (
          <CircleCheckBig
            size={44}
            color="#22C55E"
            strokeWidth={2}
          />
        );

      default:
        return (
          <Info
            size={44}
            color="#FF8A2B"
            strokeWidth={2}
          />
        );
    }
  }

  return (
    <View className="flex-1 items-center justify-center px-4">
      {/* Icon */}

      <View className="h-28 w-28 items-center justify-center rounded-full bg-card">
        {getIcon()}
      </View>

      {/* Title */}

      <Text className="mt-8 text-center font-poppins-bold text-3xl text-white">
        {title}
      </Text>

      {/* Message */}

      <Text className="mt-3 text-center font-poppins-medium text-base leading-6 text-zinc-400">
        {message}
      </Text>

      {buttonTitle && (
          <>

          <View className="mt-4 flex-row ">
         
                <Button
             
           text={buttonTitle}
           Icon={ChevronLeftIcon}
           onPress={() => {onPress && onPress() }}
           right={true}
           
           />
          </View>
          
          </>
      )}
    </View>
  );
}