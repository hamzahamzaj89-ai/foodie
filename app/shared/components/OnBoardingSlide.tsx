import { View, Text, Image } from "react-native";
import { ISlideData } from "../interface/ISlideData";

export default function OnBoardingSlide({item}: {item:ISlideData}) {
  return (
    <View className="flex-1 items-center px-6">

      {/* Logo */}

      <Image
        source={require("@/assets/images/foodie-logo.png")}
        className="w-[130px] h-[130px] mt-0 "
        resizeMode="cover"
      />

      {/* Title */}

      <Text className="mt-[-10px] text-center text-white text-4xl font-poppins-bold">
        {item.title}
      </Text>

      {/* Description */}

      <Text className="mt-4 text-center text-zinc-400 text-base font-poppins-medium leading-7 px-4">
        {item.discription}
      </Text>

      {/* Illustration */}

      <View className="flex-1 items-center justify-center">

        <Image
          source={item.image}
          className="w-100 h-80"
          resizeMode="contain"
        />

      </View>

    </View>
  );
}