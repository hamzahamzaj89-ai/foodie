import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react-native'
import ViewDealItems from './ViewDealItems'
import { ICartItem } from '@/interface/ICart'

const CartDealMenuItems = ({
  onPress,
  expanded,
  menuItems
  
}: {
  onPress: () => void
  expanded: boolean
  menuItems: ICartItem[]
}) => {
  return (


    <>
     <Pressable
          onPress={onPress}
          className="flex-row items-center justify-between"
        >
          <View className="flex-1">
            <Text className="font-poppins-semibold text-base text-white">
              Included Items
            </Text>

            {!expanded && (
              <Text
                numberOfLines={1}
                className="mt-1 font-poppins-medium text-xs text-zinc-500"
              >
                2 Burgers • 2 Fries • 2 Drinks
              </Text>
            )}
          </View>

           {
            expanded? (<>
             <ChevronDown
            size={20}
            color="#A1A1AA"
       
          /></>) : (<>
           <ChevronUp
            size={20}
            color="#A1A1AA"
           
          /></>)
           }



        </Pressable>



   {expanded && (
          <View className="mt-4 rounded-2xl bg-[#15181D] px-3 -mx- py-3">
            <ViewDealItems 
            

              menuItems={menuItems}
              
            />
          </View>
        )}



        </>
     
  )
}

export default CartDealMenuItems