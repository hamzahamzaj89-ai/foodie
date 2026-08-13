import React, { useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

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

const addOns = [
  {
    id: "1",
    name: "French Fries",
    price: 2.99,
    image: require("@/assets/images/french_fries.png"),
  },
  {
    id: "2",
    name: "Coca-Cola",
    price: 1.99,
    image: require("@/assets/images/french_fries.png"),
  },
  {
    id: "3",
    name: "Chicken Nuggets",
    price: 4.99,
    image: require("@/assets/images/french_fries.png"),
  },
];

export default function MenuDetailsScreen() {
  

  const { menuId } = useLocalSearchParams();

  const cart = useCartStore((state) => state.getCartItem(menuId as string));

  const [customizations, setCustomizations] = useState<ICartCustomization[]>(cart ? (cart as ICartItem).customizations : []);


  const [addOns, setAddOns] = useState<ICartAddOns[]>(cart ? (cart as ICartItem).addOns : []);

  const { data: menu, isPending, error } = useMenuItem(menuId as string);

  const  addItem = useCartStore((state) => state.addItem)

  const  [quantity , setQuantity] = useState<number>(cart?.quantity ?? 1)

  const [isRequiredCompelete , setIsRequiredCompelete] = useState(false)


  console.log(menuId)



  //loader, undefined , error
   if (isPending)  return <Loader />;
    
  
    if (error)  return <StatusScreen type="error" message={error.message} title={error.name} />;
      
    
  
    if (!menu) return <StatusScreen type="error" message="Not Found" title="404 error" />;
    
  

     
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



  const handleCart = () => {


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

  };





  return (
    <SafeAreaView className="flex-1 bg-black">
      <FlatList
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
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
                    isRequiredCompelete = {isRequiredCompelete}
                    setIsRequiredCompelete={setIsRequiredCompelete}
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
        onPress={() => {
          handleCart;
        }}
        quantity={quantity}
        price={menu.price + customizationsPrice + addOnsPrice}
        setQuantity={setQuantity}
      />




    </SafeAreaView>
  );
}
