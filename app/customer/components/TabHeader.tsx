import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import {
  Bell,
  MapPin,
  ChevronDown,
  ShoppingBag,
  LucideProps,
  LucideIcon,
} from "lucide-react-native";
import { router } from "expo-router";

export default function TabHeader({
    title,
    description,
    Icon1,
    Icon2,
    onIcon1Press,
    onIcon2Press,
    Home

}:{

    title?:string | null
    description?:string | null
    Icon1?:LucideIcon | null
    Icon2?: LucideIcon | null
    onIcon1Press?: () => void | null
    onIcon2Press?: () => void | null
    Home?: boolean | null


}) {
  return (
    <View className="mt-0  w-[100%]  mb-1">

      {/* Top Row */}

      <View className="flex-row items-center justify-between">

        {/* Left */}

        {Home ? (<>

            <View className="h-16 w-20 relative">
                <Image source={require("@/assets/images/foodie-logo.png")} resizeMode="cover" className="absolute w-32 h-32 -bottom-9 -left-4 "/>
            </View>



        </>) : (
           
                <Pressable className="mt-0 flex-row items-center self-start rounded-full   ">


          <View className="ml-0">
             <Text className="text-white text-3xl font-poppins-bold mx-1">
        {title}
        </Text>


             {description && (
              <View className="fle flex-row mt-1 ">
            <Text className="text-zinc-400 mx-1 relative font-poppins-medium -top-1">
           {description}
        </Text>

      
           
           </View>
             )}
          </View>




      

      </Pressable>

             
        )}

     
        {/* Notification */}

       <View className="flex flex-row gap-x-1">
             {Icon1 && (
                <Pressable onPress={() => router.push("/customer/(pages)/NotificationPgae")} className=" px-1 rounded-2xl  items-center justify-center">

          <Icon1
            size={22}
            color="white"
            strokeWidth={2.3}
          />

        </Pressable>
             )}



           {Icon2 && (
              <Pressable onPress={() => router.push("/customer/(tabs)/Cart")} className="px-1 rounded-2xl  items-center justify-center">

          <Icon2
            size={22}
            color="white"
            strokeWidth={2.3}
          />

        </Pressable>
           )}
       </View>

      </View>

     

 
    </View>
  );
}