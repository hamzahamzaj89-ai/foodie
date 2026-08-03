import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ChevronLeft, Heart } from 'lucide-react-native'
import { router } from 'expo-router'

const Header = ({

    title,
    description,
    onPress

} : {

    title:string,
    description?: string | null
    onPress: () => void


}) => {
  return (
   
              <View className="flex flex-row w-full   py-1 pt-0 pb-0 justify-between items-center ">
                <View className='flex flex-row gap-x-2 items-center'>
                           <Pressable
           onPress={onPress}
           className=" flex flex-row mb-[5px] justify-center items-center rounded-full p-1 bg-card"
         >
           <ChevronLeft
             size={28}
             color="white"
             strokeWidth={2.7}
             
           />


             
         </Pressable>
                  
              <View className='flex flex-col ml-1'>
                
         <Text className='text-white font-poppins-bold text-[1.7rem]'>
                {title}
             </Text>

               {description && (<>
               
               <Text className='-mt-2 font-poppins-medium text-zinc-400 text-sm'>
                {description}
             </Text>

             <View className='mb-3'>

             </View>
               
               </>)}
              </View>


                </View>
   
    
   
              </View>
   
  )
}

export default Header