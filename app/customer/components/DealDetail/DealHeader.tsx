import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ChevronLeft, Heart } from 'lucide-react-native'
import { router } from 'expo-router'

const DealHeader = () => {
  return (
   
              <View className="flex flex-row w-full  py-1 pt-0 pb-2 justify-between items-center ">
                <View className='flex flex-row gap-x-2 items-center'>
                           <Pressable
           onPress={() => router.back()}
           className="   items-center justify-center rounded-full "
         >
           <ChevronLeft
             size={28}
             color="white"
             strokeWidth={2.7}
             style={{
                marginBottom: 4
             }}
           />


             
         </Pressable>

         <Text className='text-white font-poppins-bold text-[2rem]'>
                DealDetails
             </Text>
                </View>
   
         {/* Favourite */}
   
         <Pressable className="  items-center justify-center rounded-full ">
           <Heart
             size={28}
             color="white"
             strokeWidth={2.4}
              style={{
                marginBottom: 5
             }}
           />
         </Pressable>
   
   
              </View>
   
  )
}

export default DealHeader