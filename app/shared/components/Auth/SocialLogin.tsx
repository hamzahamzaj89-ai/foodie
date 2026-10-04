import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { Circle } from "react-native-animated-spinkit";

type Props = {
  onGooglePress: () => void;
   loading:boolean;

};

export default function SocialLogin({
  onGooglePress,
  loading = false
}: Props) {
  return (
    <View className="mt-2 px-5">



      {loading ?  (<>
      


       
      <Pressable
        onPress={onGooglePress}
        disabled={loading}
        className="mb-4 flex-row items-center justify-center  rounded-2xl bg-card px-5 py-4"
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
      <Circle size={20} color="#FF8A2B" />



      </Pressable>
      
      </>):  (<>
      

      
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
      
      </>)}
      {/* Google */}



      
    </View>
  );
}