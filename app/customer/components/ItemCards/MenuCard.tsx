import React, { useMemo } from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import {
  Minus,
  Plus,
  ChevronDown,
} from "lucide-react-native";
import { useCartStore } from "../../store/useCartStore";
import { ICartDeal, ICartItem } from "@/interface/ICart";
import { toast } from "@/app/shared/utils/toast";
import Counter from "../Counter";
import clsx from "clsx";

type Addon = {
  id: string;
  name: string;
};

type CartMenuCardProps = {
  title?: string;
  customization?: string;
  price?: number;
  quantity?: number;
  image?: any;
  addons?: Addon[];
  totalAddonCount?: number;
  onMinus?: () => void;
  onPlus?: () => void;
  onAddonsPress?: () => void;
};

export default function CartMenuCard({
   item,
   type = "cart"
}: {
    item: ICartItem | ICartDeal,
    type?:string
}) {


  const menu = item as ICartItem


   const updateItem = useCartStore((state) => state.updateItem)

  //useMemo
  //calculatingPrices
     let  customizationsPrice = useMemo(()=> {
                return menu.customizations.reduce((crr , cus) => {
                           if (!cus.required) {
                            return  crr + cus.price;
                           }

                           return crr
  
                } , 0)
     } , [menu.customizations])
  
     let addOnsPrice = useMemo(() => {
  
  
       return menu.addOns.reduce((crr , cus) => {
                         return  crr + cus.price;
                         
                } , 0)
  
     } , [menu.addOns])
  
  
     let requiredCustomizationsPrice = useMemo(() => {
  
      return menu.customizations.reduce((crr , cus) => {
  
          if (cus.required) {
                   return crr + cus.price;
          }
           
          return crr
      } , 0)
  
     }, [menu.customizations])
  




  const visibleAddons = menu.addOns.slice(0, 3);
  const totalAddonCount = menu.addOns.length
  const remainingAddons = Math.max(
    totalAddonCount - visibleAddons.length,
    0
  );




  const onIncrease= () => {
      
      if (!menu) {
          return toast.error("404" , "no menu is found")
      }



     updateItem({
          ...menu,
          quantity : menu.quantity + 1
     }
     )
       

  }


  const onDecrease = () => {
         if (!menu) {
          return toast.error("404" , "No menu is found")
      }


      if (menu.quantity <= 1) {
          return toast.error("You cannot decarese more")
      } 


     updateItem({
          ...menu,
          quantity : menu.quantity - 1
     }
     )

 

  }






  return (
    <View
      className="rounded-3xl bg-card p-4"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 18,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        elevation: 5,
      }}
    >
      {/* Main Product */}

      <View className="flex-row">
        {/* Food Image */}

        <View className="h-24 w-24 relative items-center justify-center rounded-2xl bg-primaryCard">
          <Image
            source={{
              uri: menu.imageUrl ?? ""
            }}
            resizeMode="contain"
            className="absolute h-24 w-[90px]"
          />
        </View>

        {/* Details */}

        <View className="ml-4 flex-1 text-center flex-wrap  flex-row items-center   mt-0">
          {/* Name */}

           <View>
              <Text
            numberOfLines={1}
            className="font-poppins-semibold text-lg text-white"
          >
            {menu.title}
          </Text>

           </View>
          {/* Customization */}

            {
              menu.customizations.length > 0 && (<>
              <Text
            numberOfLines={1}
            className="mt-1 font-poppins-medium text-xs text-zinc-400"
          >


            {menu.customizations.slice(0,3).map((item , index) => 
                       <>

                       {index !== menu.customizations.length -1  ? item.name +  "   • " : item.name }
                       


                       </>
            )}
            
          </Text>
              </>)
            }

          {/* Addons */}

          {
            menu.addOns.length > 0 && (<>

            
          <Pressable
            onPress={() => {}}
            className="mt-3 flex-row items-center"
          >
            {/* Overlapping addon images */}

            <View className="h-8 flex-row items-center">
              {visibleAddons.map((addon, index) => (
                <View
                  key={addon.id}
                  className="h-7 w-7 overflow-hidden rounded-full border-0 bg-primaryCard"
                  style={{
                    marginLeft: index === 0 ? 0 : -9,
                    zIndex: visibleAddons.length - index,
                  }}
                >
                  <Image
                    source={{
                      uri: menu.addOns[index].image_url
                    }}
                    resizeMode="contain"
                    className="h-full w-full"
                  />
                </View>
              ))}
            </View>

            {/* More Addons */}

            {remainingAddons > 0 && (
              <Text className="ml-2 font-poppins-medium text-[11px] text-zinc-400">
                +{remainingAddons} more
              </Text>
            )}

            <ChevronDown
              size={14}
              color="#A1A1AA"
              strokeWidth={2.2}
              style={{
                marginLeft: 3,
              }}
            />
          </Pressable>
            </>)
          }

        </View>
      </View>

      {/* Divider */}

          {type === "cart" ? (<>
          <View className="my-4 h-[1px] bg-white/5" />
          </>) : (<>
                    <View className="my-1 h-[1px] " />


          </>)}

      {/* Bottom */}

      <View className="flex-row items-center justify-between">
        {/* Price */}

        <View>
          <Text className="font-poppins-medium text-[11px] text-zinc-500">
            Item total
          </Text>

          <Text className={clsx(
            "mt-0.5 font-poppins-bold text-xl text-buttonBackground",
             type === "orderPreview" && "text-buttonBackground"
          )}>
            ${(((menu.price + requiredCustomizationsPrice) * menu.quantity) + customizationsPrice + addOnsPrice).toFixed(2)}
          </Text>
        </View>

        {/* Quantity */}

        {
          type === "cart" ? (<>
              <View className="-mr-4">
            <Counter
              quantity={menu.quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          </View>
          </>) : (<>

          <View className=" px-4 py-2 rounded-3xl bg-primaryCard ">
            <Text className="text-buttonBackground -mb-1  font-poppins-semibold ">
              QTY ×{menu.quantity}
            </Text>

          </View>
          </>)
        }
      </View>
    </View>
  );
}