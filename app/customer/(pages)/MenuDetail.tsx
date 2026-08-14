import React, { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, View } from "react-native";

import HeroSection from "@/app/customer/components/MenuDetail/HeroSection";
import ProductInfo from "@/app/customer/components/MenuDetail/ProductInfo";
import SizeSelector from "@/app/customer/components/MenuDetail/SizeSelector";
import CustomizationSection from "@/app/customer/components/ExtraSection";
import AddOnSection from "@/app/customer/components/ExtraSection";
import BottomActionBar from "@/app/customer/components/BottomActionBar";
import { useLocalSearchParams } from "expo-router";
import { useMenuItem } from "@/app/shared/hooks/useMenu";
import StatusScreen from "../screens/StatusScreen";
import Loader from "@/app/shared/components/Loader";
import { useCartStore } from "../store/useCartStore";
import { ICartAddOns, ICartCustomization, ICartDeal, ICartItem } from "@/interface/ICart";
import { IAddOns } from "@/interface/IAddOns";
import AddOnsSection from "../components/AddOns";
import { ICustomizationGroup, IMenuCustomizationGroup } from "@/interface/IMenu";
import { toast } from "@/app/shared/utils/toast";
import { SafeAreaView } from "react-native-safe-area-context";



export default function MenuDetailsScreen() {
  

  const { menuId } = useLocalSearchParams();

  const cart = useCartStore((state) => state.getCartItem(menuId as string));

  const [customizations, setCustomizations] = useState<ICartCustomization[]>(cart ? (cart as ICartItem).customizations : []);


  const [addOns, setAddOns] = useState<ICartAddOns[]>(cart ? (cart as ICartItem).addOns : []);

  const { data: menu, isPending, error } = useMenuItem(menuId as string);

  const  addItem = useCartStore((state) => state.addItem)

  const  [quantity , setQuantity] = useState<number>(cart?.quantity ?? 1)




  const currentRef = useRef(false);

  console.log(menuId)



  //loader, undefined , error
   if (isPending)  return <Loader />;
    
  
    if (error)  return <StatusScreen type="error" message={error.message} title={error.name} />;
      
    
  
    if (!menu) return <StatusScreen type="error" message="Not Found" title="404 error" />;
    


  
   //caculating prices
     
   let  customizationsPrice = useMemo(()=> {
              return customizations.reduce((crr , cus) => {
                       return  crr + cus.price;

              } , 0)
   } , [customizations])

   let addOnsPrice = useMemo(() => {


     return addOns.reduce((crr , cus) => {
                       return  crr + cus.price;
                       
              } , 0)

   } , [addOns])


   let requiredCustomizationsPrice = useMemo(() => {

    return customizations.reduce((crr , cus) => {

        if (cus.required) {
                 return crr + cus.price;
        }
         
        return crr
    } , 0)

   }, [customizations ])



  const handleCart = () => {

       if (!currentRef.current) {


              toast.error("Please select the required customizations")
              return
       }


          
       if (cart) {

        const cartItem = {
          ...cart,
       
        quantity: quantity,
        customizations: customizations,
        addOns: addOns

    }
     

    addItem(cartItem)
       

   return
           
     
         

       }


        const cartItem:ICartItem = {
        id: menu?.id as string,
        type: "cartItem",
        imageUrl: menu?.image_url as string,
        price: menu?.price as number,
        title: menu?.title as string,
        quantity: quantity,
        customizations: customizations,
        addOns: addOns
 

    }

    addItem(cartItem)



    toast.success("Added to cart successfully")

  };





  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        ListHeaderComponent={
          <>
            <HeroSection imageUrl={menu.image_url} />

            <View className="px-5">
              <ProductInfo
                productInfo={{
                  reviewsCount: menu.reviews_count,
                  rating: menu.average_rating,
                  title: menu.title,
                  description: menu.description,
                  calories: menu.calories,
                }}
              />


              {menu.menu_customization_group.map((item, inwdex) => (
                <>
                  <CustomizationSection
                    data={item.customization_group as any}
                    setData={setCustomizations}
                    selectedCustomizations={customizations}
                    
                    currentRef={currentRef}
                  />
                </>
              ))}

              <AddOnsSection selectedAddOns={addOns} setData={setAddOns} />
            </View>
          </>
        }
        renderItem={null}
      />

      <BottomActionBar
        onPress={handleCart}
        quantity={quantity}
        price={(quantity * (menu.price + requiredCustomizationsPrice)) + (customizationsPrice-requiredCustomizationsPrice) + addOnsPrice}
        setQuantity={setQuantity}
      />




    </View>
  );
}
