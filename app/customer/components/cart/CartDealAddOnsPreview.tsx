import { View, Text, Image } from 'react-native'
import React from 'react'
import { useCartStore } from '../../store/useCartStore'
import { ICartAddOns, ICartDeal } from '@/interface/ICart'

const CartDealAddOnsPreview = ({
     addonsExpanded,
     visibleAddons,
     remainingAddons
}: {

    addonsExpanded: boolean
    visibleAddons: ICartAddOns[]
    remainingAddons: number

}) => {



      const cartItems = useCartStore((state) => state.items)

  return (
   <>


   {!addonsExpanded && (
               <View className="mt-3 flex-row items-center">
                 <View className="h-9 flex-row items-center">
                   {visibleAddons.map((addon, index:number) => (
                     <View
                       key={addon.id}
                       className="h-9 w-9 overflow-hidden rounded-full border-2 border-[#15181D] bg-primaryCard"
                       style={{
                         marginLeft: index === 0 ? 0 : -10,
                         zIndex:
                           visibleAddons.length - index,
                       }}
                     >
                       <Image
                         source={{
                           uri: addon.image_url
                         }}
                         resizeMode="cover"
                         className="h-full w-full"
                       />
                     </View>
                   ))}
                 </View>
   
                 {remainingAddons > 0 && (
                   <Text className="ml-3 font-poppins-medium text-xs text-zinc-400">
                     +{remainingAddons} more add-ons
                   </Text>
                 )}
               </View>
             )}
   
   
   </>
  )
}

export default CartDealAddOnsPreview