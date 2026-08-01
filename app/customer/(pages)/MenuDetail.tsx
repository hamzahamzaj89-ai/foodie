import React from "react";
import {
  FlatList,
  SafeAreaView,
  View,
} from "react-native";

import HeroSection from "@/app/customer/components/MenuDetail/HeroSection";
import ProductInfo from "@/app/customer/components/MenuDetail/ProductInfo";
import SizeSelector from "@/app/customer/components/MenuDetail/SizeSelector";
import CustomizationSection from "@/app/customer/components/MenuDetail/CustomizationCards";
import AddOnSection from "@/app/customer/components/MenuDetail/CustomizationCards";
import BottomActionBar from "@/app/customer/components/MenuDetail/ActionBar";

const customizations = [
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

const addOns = [
  {
    id: "1",
    name: "French Fries",
    price: 2.99,
    image: require("@/assets/images/french_fries.png"),
  },
  {
    id: "2",
    name: "Coca-Cola",
    price: 1.99,
    image: require("@/assets/images/french_fries.png"),
  },
  {
    id: "3",
    name: "Chicken Nuggets",
    price: 4.99,
    image: require("@/assets/images/french_fries.png"),
  },
];





export default function MenuDetailsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <FlatList
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
        ListHeaderComponent={
          <>
            <HeroSection />

            <View className="px-5">
              <ProductInfo />

              <SizeSelector />

              <CustomizationSection
                title="Customization"
                data={customizations}
              />

              <AddOnSection
                title="Add-ons"
                data={addOns}
              />
            </View>
          </>
        }
        renderItem={null}
      />

      <BottomActionBar />
    </SafeAreaView>
  );
}