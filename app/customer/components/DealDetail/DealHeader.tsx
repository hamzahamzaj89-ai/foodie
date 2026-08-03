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
           className=" flex flex-row mb-1  justify-center items-center rounded-full p-1 "
         >
           <ChevronLeft
             size={28}
             color="white"
             strokeWidth={2.7}
             
           />


             
         </Pressable>

         <Text className='text-white font-poppins-bold text-3xl mb-1'>
                DealDetails
             </Text>
                </View>
   
    
   
              </View>
   
  )
}

export default DealHeader