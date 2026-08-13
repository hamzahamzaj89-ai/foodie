import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlassCard from "../components/FoodCard";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import DealCarousel from "../components/Home/DealCarousel";
import Categories from "../components/CategoryItems";
import { Bell, ShoppingBag } from "lucide-react-native";
import TabHeader from "../components/TabHeader";
import { useResturant } from "@/app/shared/hooks/useResturant";
import { useInfiniteMenus } from "@/app/shared/hooks/useMenu";
import { IMenuCard } from "@/interface/IMenuCard";
import { router } from "expo-router";
import Loader from "@/app/shared/components/Loader";
import StatusScreen from "../screens/StatusScreen";
import MenuSection from "../components/Home/MenuSection";
import { useResturantStore } from "@/app/shared/store/useResturantStore";

const Home = () => {
  const restaurantId = "27913ca5-c2a2-4174-9ef1-73e466e50410";

  const foods = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];

  const { data: restaurant, error } = useResturant(restaurantId);

  const setSelectedRestaurant = useResturantStore((state) => state.setSelectedRestaurant)

  useEffect(() => {


    if (restaurant) {
         setSelectedRestaurant(restaurant)
    }

  } , [restaurant])



  if (error) {
       return <StatusScreen
       title={error.name}
       message={error.message}
       type="error"
       />
  }
 

  
  return (
    <>
      <View className="flex-1 bg-black ">
        <SafeAreaView className="flex-1 ">
          <View className=" flex flex-1   mt-[-8px]">
            <View className="flex flex-row px-4 pt-0">
              <TabHeader Home={true} Icon1={Bell} Icon2={ShoppingBag} />
            </View>


            

            <MenuSection
            restaurantId={restaurantId}
            />




          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Home;
