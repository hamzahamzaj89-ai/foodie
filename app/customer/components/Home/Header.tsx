import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import {
  Bell,
  MapPin,
  ChevronDown,
  ShoppingBag,
} from "lucide-react-native";

export default function Header() {
  return (
    <View className="mt-0  w-[100%]  mb-0">

      {/* Top Row */}

      <View className="flex-row items-center justify-between">

        {/* Left */}

             <Pressable className="mt-0 flex-row items-center self-start rounded-full   py-2.5">


          <View className="ml-0">
             <Text className="text-white text-[1.3rem] font-poppins-bold mx-2">
          Deliver to 
        </Text>


           <View className="fle flex-row ">
            <Text className="text-zinc-400 mx-2 relative -top-1">
            Islamabad, Islamabd Pakistan
        </Text>

        <ChevronDown
             size={18}
          color="#a1a1aa"
          style={{
            marginBottom : 1
          }}
        
        />
           
           </View>
          </View>




      

      </Pressable>


     
        {/* Notification */}

       <View className="flex flex-row gap-x-1">
             <Pressable className=" px-1 rounded-2xl  items-center justify-center">

          <Bell
            size={22}
            color="white"
            strokeWidth={2.3}
          />

        </Pressable>



             <Pressable className="px-1 rounded-2xl  items-center justify-center">

          <ShoppingBag
            size={22}
            color="white"
            strokeWidth={2.3}
          />

        </Pressable>
       </View>

      </View>

     

 
    </View>
  );
}