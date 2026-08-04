import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

type Props = {
  onGooglePress: () => void;
  onApplePress?: () => void;

  showApple?: boolean;
};

export default function SocialLogin({
  onGooglePress,
  onApplePress,
  showApple = true,
}: Props) {
  return (
    <View className="mt-4 px-5">
      {/* Google */}

      <Pressable
        onPress={onGooglePress}
        className="mb-4 flex-row items-center justify-center rounded-2xl bg-card px-5 py-4"
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.12,
          shadowRadius: 16,
          shadowOffset: {
            width: 0,
            height: 8,
          },
          elevation: 5,
        }}
      >
        <Image
          source={require("@/assets/images/google.png")}
          className="h-7 w-7"
          resizeMode="contain"
        />

        <Text className="ml-4 font-poppins-semibold text-base text-white">
          Continue with Google
        </Text>
      </Pressable>

      {/* Apple */}

      
    </View>
  );
}