import React, { useState } from "react";
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
import CartDealAddOnsPreview from "./CartDealAddOnsPreview";
import CartAddOnsExpanded from "./CartAddOnsExpanded";
import CartDealAddOns from "./CartDealAddOns";
import CartDealMenuItems from "./CartDealMenuItems";
import { ICartDeal, ICartItem } from "@/interface/ICart";
import { toast } from "@/app/shared/utils/toast";



export default function CartDealCard({
           item
} : {
  item: ICartDeal | ICartItem
}) {



  const deal = item as ICartDeal

  const updateItem = useCartStore((state) => state.updateItem)

  

  const [expanded, setExpanded] = useState(false);
  const [addonsExpanded, setAddonsExpanded] = useState(false);

  const visibleAddons = deal.addOns.slice(0, 3);
  const totalAddonCount = deal.addOns.length

  

  const remainingAddons = Math.max(
    totalAddonCount - visibleAddons.length,
    0
  );



  const onIncrease = () => {
     
     updateItem({
      ...deal,
      quantity: deal.quantity + 1
     })



  }



  const onDecrease = () => {


    if (!(deal.quantity > 0)) {
      return  toast.error("You cannot decrease more!!!")
    }

      
     updateItem({
      ...deal,
      quantity: deal.quantity - 1
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
        source={require("@/assets/images/deal1.jpeg")}
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

        <Text className="mt-1 font-poppins-medium text-base text-zinc-300">
           {
            deal.items.map((item) => (
                 item.quantity + " " + item.title + "  • "
            ))
          }
        </Text>

        {/* Savings */}

        <View className="mb-5 mt-5 self-start rounded-full bg-[#1C2621] px-4 pl py-2">
          <Text className="font-poppins-semibold text-sm text-[#44D17A]">
            You Save ${deal.discount}
          </Text>
        </View>

        {/* Included Items */}
 

            <CartDealMenuItems
            onPress={() => setExpanded(!expanded)}
            expanded={expanded}
            menuItems={deal.items}

            />
      

        {/* Add-ons */}
         
         <CartDealAddOns
               onPress={() => {
                setAddonsExpanded(!addonsExpanded)
               }}
               remainingAddons = {remainingAddons}
               visibleAddons ={visibleAddons}
               addons  = {item.addOns}
               addonsExpanded = {addonsExpanded}

         />
                                              
        {/* Divider */}

        <View className="my-5 h-[1px] bg-border" />

        {/* Footer */}

        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-poppins-medium text-[11px] text-zinc-500">
              Deal Total
            </Text>

            <Text className="mt-0.5 font-poppins-bold text-3xl text-white">
              ${deal.price}
            </Text>
          </View>

          <View className="-mr-4">
            <Counter
              quantity={deal.quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          </View>
        </View>
      </View>
    </View>
  );
}