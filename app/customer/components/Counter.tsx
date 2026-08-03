import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Minus, Plus } from 'lucide-react-native'

const Counter = ({


    onIncrease,
    onDecrease,
    quantity


} : {
   
    onIncrease: () => void,
    onDecrease: () => void,
    quantity: number


}) => {




  return (
      <View>

                 <View className="mr-4 flex-row items-center rounded-2xl bg-[#111317] p-1">
          <Pressable
            onPress={onDecrease}
            className="h-11 w-11 items-center justify-center rounded-full bg-[#1B1E23]"
          >
            <Minus
              size={18}
              color="white"
              strokeWidth={2.5}
            />
          </Pressable>

          <Text className="mx-5 font-poppins-bold text-lg text-white">
            {quantity}
          </Text>

          <Pressable
            onPress={onIncrease}
            className="h-11 w-11 items-center justify-center rounded-full bg-[#FF8A2B]"
          >
            <Plus
              size={18}
              color="#050608"
              strokeWidth={3}
            />
          </Pressable>
        </View>

     
        </View>

  )
}

export default Counter