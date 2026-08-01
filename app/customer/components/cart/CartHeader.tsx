import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ArrowLeft } from 'lucide-react-native'

const CartHeader = () => {
  return (

      <View className="flex-row items-center px-2  pb-3">
        

        <View className="">
          <Text className="font-poppins-bold text-3xl text-white">
            Your Cart
          </Text>

          <Text className="mt-1 font-poppins-medium text-zinc-400">
            Manage you order items from this cart
          </Text>
        </View>
      </View>
  )
}

export default CartHeader