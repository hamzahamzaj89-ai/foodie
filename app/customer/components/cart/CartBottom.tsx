import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CartBottom = () => {
  return (
    <>
     <View className="mt-6 rounded-[24px] bg-card p-5">
              <Text className="font-poppins-bold text-xl text-white">
                Order Summary
              </Text>

              <View className="mt-5 flex-row justify-between">
                <Text className="font-poppins-medium text-zinc-400">
                  Subtotal
                </Text>

                <Text className="font-poppins-semibold text-white">
                  $63.97
                </Text>
              </View>

              <View className="mt-3 flex-row justify-between">
                <Text className="font-poppins-medium text-zinc-400">
                  Delivery Fee
                </Text>

                <Text className="font-poppins-semibold text-[#44D17A]">
                  FREE
                </Text>
              </View>

              <View className="my-5 h-[1px] bg-white/5" />

              <View className="flex-row justify-between">
                <Text className="font-poppins-bold text-lg text-white">
                  Total
                </Text>

                <Text className="font-poppins-bold text-xl text-white">
                  $63.97
                </Text>
              </View>
            </View>
    
    </>
  )
}

export default CartBottom