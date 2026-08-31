import React, { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react-native";

import ViewDealItems from "./ViewDealItems";
import Counter from "../Counter";
import { useCartStore } from "../../store/useCartStore";
import CartDealAddOnsPreview from "./DealAddOnsPreview";
import CartAddOnsExpanded from "./AddOnsExpanded";
import CartDealAddOns from "./DealAddOns";
import CartDealMenuItems from "./DealMenuItems";
import { ICartDeal, ICartItem } from "@/interface/ICart";
import { toast } from "@/app/shared/utils/toast";
import clsx from "clsx";
import { IOrderDeal } from "@/interface/IOrder";
import { IDealCardProps } from "@/interface/ICard";





export default function CartDealCard({
           item,
           type = "cart"

} : {
  item: ICartDeal
  type:string
}) {



    const deal = item



  

  const updateItem = useCartStore((state) => state.updateItem)

  
   let oldDealPrice = 0;

  const [expanded, setExpanded] = useState(false);
  const [addonsExpanded, setAddonsExpanded] = useState(false);

  const visibleAddons = deal.addons.slice(0, 3);
  const totalAddonCount = deal.addons.length


  

    let addOnsPrice = useMemo(() => {
    
            
         return deal.addons.reduce((sum , crr) => {
                             if (!crr.included) {
                                return  sum + ((crr).price?? 0) ;
                             }
                            return sum;

                           
                  } , 0)
    
       } , [deal.addons])

  const remainingAddons = Math.max(
    totalAddonCount - visibleAddons.length,
    0
  );

   
  

  const onIncrease = () => {
     
     updateItem({
      ...deal,
      quantity: deal.quantity + 1,

     })
  }



  const onDecrease = () => {

    
    if (!(deal.quantity > 0)) {
      return  toast.error("You cannot decrease more!!!")
    }

      
     updateItem({
      ...deal,
     quantity: deal.quantity - 1,

     })

  }


  return (
    <View
      className="overflow-hidden rounded-3xl bg-card"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        elevation: 8,
      }}
    >
      {/* Banner */}

      <Image
        source={{
          uri: deal.imageUrl as string
        }}
        resizeMode="cover"
        className="h-44 w-full"
      />

      {/* Content */}

      <View className="p-5">
        {/* Deal Name */}

        <Text className="font-poppins-bold text-2xl text-white">
           {deal.title}
        </Text>

        {/* Deal Summary */}

        <Text className="mt-1 font-poppins-medium text-base text-zinc-300" numberOfLines={3}>
           {
            deal.items.map((item , index) => (
                       (index !== deal.items.length -1)  ? item.quantity + " " + item.title +  "    • " : item.title 
            ))
          }
        </Text>

        {/* Savings */}

        <View className="mb-5 mt-5 self-start rounded-full bg-[#1C2621] px-4 pl py-2">
          <Text className="font-poppins-semibold text-sm text-[#44D17A]">
            You Save ${( Math.round(deal.oldPrice) - Math.round(deal.price))}
          </Text>
        </View>

        {/* Included Items */}
 

            <View className="">
                <CartDealMenuItems
            onPress={() => setExpanded(!expanded)}
            expanded={expanded}
            menuItems={deal.items}

            />
            </View>
      

        {/* Add-ons */}
         
          <View className="">
             <CartDealAddOns
               onPress={() => {
                setAddonsExpanded(!addonsExpanded)
               }}
               remainingAddons = {remainingAddons}
               visibleAddons ={visibleAddons}
               addons  = {item.addons}
               addonsExpanded = {addonsExpanded}

         />
          </View>
                                              
        {/* Divider */}

        <View className="my-5 h-[1px] bg-border" />

        {/* Footer */}

        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-poppins-medium text-[11px] text-zinc-500">
              Deal Total
            </Text>

            <Text className={clsx(
              ["mt-0.5 font-poppins-bold text-3xl ",
              type ==="cart"? "text-buttonBackground" : "text-buttonBackground"
              ]
            )}>
              ${(deal.price * deal.quantity )  + addOnsPrice}
            </Text>
          </View>

          {
          type === "cart" ? (<>
              <View className="-mr-4">
            <Counter
              quantity={deal.quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          </View>
          </>) : (<>

          <View className=" px-4 py-2 rounded-3xl bg-primaryCard ">
            <Text className="text-buttonBackground -mb-1  font-poppins-semibold ">
              QTY ×{deal.quantity}
            </Text>

          </View>
          </>)
        }
        </View>
      </View>
    </View>
  );
}