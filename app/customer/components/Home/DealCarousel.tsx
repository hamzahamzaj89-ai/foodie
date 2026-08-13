import Loader from "@/app/shared/components/Loader";
import { useDeals } from "@/app/shared/hooks/useDeals";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Image, Dimensions, Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import StatusScreen from "../../screens/StatusScreen";
import DealSkeleton from "../skeletons/Home/DealSkeleton";

const { width } = Dimensions.get("window");

const CARD_WIDTH = width  ;
const CARD_HEIGHT = 170;


export default function DealCarousel({restaurantId}: {restaurantId:string}) {
  const [index, setIndex] = useState(0);

  const {data:deals , isPending , error} = useDeals({
    restaurantId : restaurantId,
  })



   //loader,error,undefined
  
    if (isPending)  return <DealSkeleton/>;
    
  
    if (error)  return <StatusScreen type="error" message={error.message} title={error.name} />;
      
    
  
    if (!deals) return <StatusScreen type="error" message="Not Found" title="404 error" />;
    
  

    console.log("hellloooooooooooo123")




  return (
    <View className="mt-4 ">

      <Carousel
        loop={true}
        width={CARD_WIDTH}
        autoPlay={false}
        autoPlayInterval={2000}
        height={CARD_HEIGHT}
        data={deals.data}
        pagingEnabled
         enabled={true}
        snapEnabled
        
        
        onSnapToItem={(i) => setIndex(i)}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push({
            pathname: "/customer/(pages)/DealDetail",
            params: {
              dealId: item.id
            }
          })} className="overflow-hidden mx-3 rounded-2xl">
            <Image
              source={{
                uri: item.image_url
              }}
              resizeMode="cover"
              className="w-full h-full"
            />
          </Pressable>
        )}
      />



    </View>
  );
}