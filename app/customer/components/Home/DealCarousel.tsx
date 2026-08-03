import { router } from "expo-router";
import React, { useState } from "react";
import { View, Image, Dimensions, Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const CARD_WIDTH = width  ;
const CARD_HEIGHT = 170;

const deals = [
  {
    id: "1",
    image: require("@/assets/images/deal1.jpeg"),
  },
  
 
];

export default function DealCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <View className="mt-4 ">

      <Carousel
        loop={true}
        width={CARD_WIDTH}
        autoPlay={true}
        autoPlayInterval={2000}
        height={CARD_HEIGHT}
        data={deals}
        pagingEnabled
         enabled={true}
        snapEnabled
        
        
        onSnapToItem={(i) => setIndex(i)}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push("/customer/(pages)/DealDetail")} className="overflow-hidden mx-3 rounded-2xl">
            <Image
              source={item.image}
              resizeMode="cover"
              className="w-full h-full"
            />
          </Pressable>
        )}
      />



    </View>
  );
}