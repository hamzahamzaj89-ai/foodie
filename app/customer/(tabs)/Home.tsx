import { View, Text, FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlassCard from "../components/FoodCard";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import DealCarousel from "../components/Home/DealCarousel";
import Categories from "../components/CategoryItems";
import { Bell, ShoppingBag } from "lucide-react-native";
import TabHeader from "../components/TabHeader";

const Home = () => {



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


  return (
    <>
  
      <View className="flex-1 bg-black ">
        <SafeAreaView className="flex-1 ">
          <View className=" flex flex-1   mt-[-8px]">

            <View className="flex flex-row px-4 pt-0">
               <TabHeader
                   Home={true}
                   Icon1={Bell}
                   Icon2={ShoppingBag}
               />
            </View>


   <FlatList
      data={foods}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 50,
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 28,
      }}
      ListHeaderComponent={
        <>
          <View className="px-4 ">
            

            <SearchBar />
          </View>

          <DealCarousel />

          <View className="px-4 pt-2 pb-8">
            <Categories />
          </View>


        
        </>
      }
      renderItem={({item, index}) => (
        <FoodCard index={index}/>
      )}
    />


          </View>
          
        </SafeAreaView>
      </View>

    </>
  );
};

export default Home;
