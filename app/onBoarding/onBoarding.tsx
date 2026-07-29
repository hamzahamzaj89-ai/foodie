import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Pressable,
  Text,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight } from "lucide-react-native";
import OnboardingSlide from "@/app/shared/components/OnBoardingSlide";
import Pagination from "@/app/shared/components/Pagination";
import { onboardingData } from "@/data/onBoardingData";
import { ISlideData } from "../shared/interface/ISlideData";
import { router } from "expo-router";



const { width } = Dimensions.get("window");

export default function OnboardingScreen() {


  const flatListRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {


    const offsetX = event.nativeEvent.contentOffset.x;

    const index = Math.round(offsetX / width);

    setCurrentIndex(index);

  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {

      router.replace("/onBoarding/SelectRole")
     
      console.log("Get Started");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">

      {/* Slides */}

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item}: {item: ISlideData}) => (
          <View style={{ width }}>
            <OnboardingSlide item={item} />
          </View>
        )}
        onMomentumScrollEnd={handleScroll}
      />

      {/* Bottom Navigation */}

      <View className="px-8 pb-10 flex-row items-center justify-between">

        <Pagination
          currentIndex={currentIndex}
          total={onboardingData.length}
        />

        <Pressable
          onPress={handleNext}
          className=  "border-[2px] border-buttonBackground px-7 py-4 rounded-full flex-row items-center"
        >
          <Text className="text-buttonBackground font-poppins-semibold text-base">
            {currentIndex === onboardingData.length - 1
              ? "Get Started"
              : "Next"}
          </Text>

          <ArrowRight
            size={18}
            color="#FF8A2B"
            style={{ marginLeft: 8 }}
          />
        </Pressable>

      </View>

    </SafeAreaView>
  );
}