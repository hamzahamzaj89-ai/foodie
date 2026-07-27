import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LiquidFoodCard from "../components/liquid-ui/LiquidFoodCard";
import GlassCard from "../components/Card";
import FoodCard from "../components/Card";

const Home = () => {
  return (
    <>
      <View className="flex-1 bg-black p-4">
        <SafeAreaView className="flex-1 flex-row gap-x-2 justify-center items-center p-4">

            <View className="flex flex-row">
              <FoodCard/>
              <FoodCard/>

            </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Home;
