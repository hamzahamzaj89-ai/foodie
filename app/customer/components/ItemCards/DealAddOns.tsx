import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react-native'
import CartDealAddOnsPreview from './DealAddOnsPreview'
import CartAddOnsExpanded from './AddOnsExpanded'
import { ICartAddOns } from '@/interface/ICart'

const CartDealAddOns = ({
    onPress,
    addonsExpanded,
    visibleAddons,
    addons,
    remainingAddons

} : {
    onPress: () => void
    addonsExpanded: boolean
    visibleAddons: ICartAddOns[],
    addons: ICartAddOns[],
    remainingAddons: number

}) => {
  return (
   
        <View className="mt-5 rounded-2xl bg-[#15181D] px-4 py-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="font-poppins-semibold text-sm text-white">
                Add-ons
              </Text>

              <Text className="mt-1 font-poppins-medium text-[11px] text-zinc-500">
                Extra items added to this deal
              </Text>
            </View>

            <Pressable
               onPress={onPress}
              className="flex-row items-center"
            >
              <Text className="mr-1 font-poppins-medium text-xs text-[#FF8A2B]">
                {addonsExpanded ? "Hide" : "View"}
              </Text>

            {
              addonsExpanded ? (  <ChevronDown
                size={15}
                color="#FF8A2B"
               
              />) : (  <ChevronUp
                size={15}
                color="#FF8A2B"
                
              />)
            }
            </Pressable>
          </View>

          {/* Add-on Preview */}

          
              <CartDealAddOnsPreview
                    addonsExpanded={addonsExpanded}
                    visibleAddons={visibleAddons}
                    remainingAddons={remainingAddons}
                  
              />
          {/* Expanded Add-ons */}
               


               <CartAddOnsExpanded
                    addons={addons}
                    addonsExpanded={addonsExpanded}
               
               />
        


        </View>

  )
}

export default CartDealAddOns