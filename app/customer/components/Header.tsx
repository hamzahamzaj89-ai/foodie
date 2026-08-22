import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ArrowLeft, ChevronLeft, Heart } from 'lucide-react-native'
import { router } from 'expo-router'

const Header = ({

    title,
    description,
    onPress,
    buttonText

} : {

    title:string,
    description?: string | null
    onPress?: (() => void)  | null,
    buttonText?: string | null


}) => {
  return (
   
           
        <View className="px-0 flex-row w-[100%] justify-between items-center  pb-2 ">
          <View className="flex-row items-center ">
            <Pressable
              onPress={() => router.back()}
              className="h-11 w-11 items-center justify-center rounded-2xl bg-card"
            
            >
              <ArrowLeft
                size={21}
                color="#FFFFFF"
                strokeWidth={2.3}
              />
            </Pressable>

            <View className="ml-2 -mt-1">
              <Text className="font-poppins-bold text-xl text-white">
                {title}
              </Text>

             {description && (<>
              <Text className="  font-poppins-medium text-xs text-zinc-500">
                {description}
              </Text>
             </>)}
            </View>
          </View>



          {buttonText && (<>
         

           <Pressable className=" bg-card rounded-2xl    py-2 px-4 ">
                                     <Text className="font-poppins-semibold text-white ">
                                      {buttonText}
                                     </Text>
                           </Pressable>
             
          
          </>)}
        </View>
   
  )
}

export default Header