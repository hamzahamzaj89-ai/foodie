import React, { useState } from "react";
import {
  ScrollView,
  View,
} from "react-native";

import DealHero from "@/app/customer/components/DealDetail/HeroSection";
import DealInfo from "@/app/customer/components/DealDetail/InfoSection";
import IncludedItemsSection from "@/app/customer/components/DealDetail/DealItemsSection";
import AddExtrasSection from "@/app/customer/components/ExtraSection";
import SpecialInstructions from "@/app/customer/components/SpecialInstruction";
import BottomActionBar from "../components/BottomActionBar";
import { SafeAreaView } from "react-native-safe-area-context";
import DealHeader from "../components/DealDetail/DealHeader";

export default function DealDetail() {
  const [quantity, setQuantity] = useState(1);

  const dealPrice = 34.99;

  // Later you can include selected add-ons
  const addOnPrice = 0;

  const total = (dealPrice + addOnPrice) * quantity;




  const AddOns = [
  {
    id: "1",
    name: "Extra Cheese",
    price: 1.5,
    image: require("@/assets/images/cheese.png"),
  },
  {
    id: "2",
    name: "Beef Patty",
    price: 3,
    image: require("@/assets/images/burger_petty.png"),
  },
  {
    id: "3",
    name: "Jalapeños",
    price: 0.8,
    image: require("@/assets/images/cheese.png"),
  },
];

  return (
      <>
    <SafeAreaView className="flex-1 bg-black px-4 pt-0">
      <View className="flex-1">

        <DealHeader/>

        
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 140,
          }}
        >
          {/* Hero Image */}

          <DealHero />

          {/* Deal Information */}

          <DealInfo />

          {/* Included Items */}

          <IncludedItemsSection />

          {/* Add Extras */}

          <AddExtrasSection 

          title={"Add Extra Items"}
          data={AddOns}
          
          />

          {/* Notes */}

          <SpecialInstructions />
        </ScrollView>

        {/* Sticky Bottom */}

         
      </View>


    </SafeAreaView>

   

   
      <View>
       
       <BottomActionBar/>

      </View>
    


      </>
      
      
    
  );
}