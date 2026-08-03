import BorderButton from "@/app/shared/components/BorderButton";
import { router } from "expo-router";
import { ChevronLeft, ChevronLeftCircle, ChevronLeftCircleIcon, LucideChevronLeftCircle } from "lucide-react-native";
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
                 <Pressable onPress={() => {router.back()}} className=" rounded-full gap-x-4 ">
                      

                      <ChevronLeft
                           color="white"
                           size={24}
                           strokeWidth={3}
                           style={{
                            marginBottom : 4
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