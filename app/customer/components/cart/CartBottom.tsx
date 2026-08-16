import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useResturantStore } from '@/app/shared/store/useResturantStore'

const CartBottom = ({orderPrice , qualifiesForFreeDelivery}:{orderPrice : number, qualifiesForFreeDelivery:boolean}) => {

  const deliveryFee = useResturantStore((state) => state.selectedRestaurant?.delivery_fee)?? 0


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
                  ${orderPrice.toFixed(2)}
                </Text>
              </View>

              <View className="mt-3 flex-row justify-between">
                <Text className="font-poppins-medium text-zinc-400">
                  Delivery Fee
                </Text>

                <Text className="font-poppins-semibold text-[#44D17A]">
                {(qualifiesForFreeDelivery)  ?  "FREE" : "$"+deliveryFee.toFixed(2)}
                </Text>
              </View>

              <View className="my-5 h-[1px] bg-white/5" />

              <View className="flex-row justify-between">
                <Text className="font-poppins-bold text-lg text-white">
                  Total
                </Text>

                <Text className="font-poppins-bold text-xl text-white">
                  ${(deliveryFee + orderPrice).toFixed(2)}
                </Text>
              </View>
            </View>
    
    </>
  )
}

export default CartBottom