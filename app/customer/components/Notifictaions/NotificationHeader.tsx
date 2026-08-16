import BorderButton from "@/app/shared/components/BorderButton";
import { router } from "expo-router";
import { ArrowLeft, ChevronLeft, ChevronLeftCircle, ChevronLeftCircleIcon, ChevronLeftIcon, LucideChevronLeftCircle } from "lucide-react-native";
import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

export default function NotificationHeader() {
  return (
    <View className="pl-1">
      {/* Top Row */}

      <View className="flex-row items-center justify-between">


           <View className="flex flex-row  items-center  ">
                 <Pressable onPress={() => {router.back()}} className=" rounded-2xl h-11 w-11 justify-center flex items-center mb-1 bg-card ">
                      

                      <ArrowLeft
                           color="white"
                           size={24}
                           strokeWidth={3}
                           style={{
                            marginBottom : 0
                           }}

                      />

                 </Pressable>

                 <View>
          <Text className="font-poppins-bold text-[1.8rem] ml-3 text-white">
            Notifications
          </Text>

          
        </View>

           </View>
   




               
                     <Pressable className=" bg-card rounded-2xl  px-4  py-2 pt-3">
                               <Text className="font-poppins-semibold text-white ">
                                  Clear All
                               </Text>
                     </Pressable>
               

      </View>
    </View>
  );
}