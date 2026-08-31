import React, { useMemo, useRef, useState } from "react";
import { ScrollView, View } from "react-native";

import DealHero from "@/app/customer/components/DealDetail/HeroSection";
import DealInfo from "@/app/customer/components/DealDetail/InfoSection";
import IncludedItemsSection from "@/app/customer/components/DealDetail/DealItemsSection";
import AddExtrasSection from "@/app/customer/components/ExtraSection";
import SpecialInstructions from "@/app/customer/components/SpecialInstruction";
import BottomActionBar from "../components/BottomActionBar";
import { SafeAreaView } from "react-native-safe-area-context";
import DealHeader from "../components/DealDetail/DealHeader";
import Header from "../components/Header";
import { router, useLocalSearchParams } from "expo-router";
import AddOnsSection from "../components/AddOns";
import { ICartAddOns, ICartDeal, ICartItem } from "@/interface/ICart";
import { useCartStore } from "../store/useCartStore";
import { useDealItem, useDeals } from "@/app/shared/hooks/useDeals";
import { calculateDealAddOnsPrice, calculateDealMenuCustomizationsPrice, calculateDealPrice } from "@/app/shared/utils/calculatingPrice";
import { IDealAddOns, IDealDetail, IDealMenuItem } from "@/interface/IDeal";
import Loader from "@/app/shared/components/Loader";
import StatusScreen from "../screens/StatusScreen";
import { toast } from "@/app/shared/utils/toast";
import { ICustomizationOption } from "@/interface/IMenu";
import { IAddOns } from "@/interface/IAddOns";
import { Ticket } from "lucide-react-native";

export default function DealDetail() {
  const { dealId } = useLocalSearchParams();

  const cart = useCartStore((state) => state.getCartItem(dealId as string));

  const [quantity, setQuantity] = useState(cart ? cart.quantity : 1);
  const addItem = useCartStore((state) => state.addItem);

  const [addOns, setAddOns] = useState<ICartAddOns[] | []>(cart ? cart.addons : []);

  const { data: deal, error, isPending } = useDealItem(dealId as string);
  const updateItem = useCartStore((state) => state.updateItem)
  const dealMenusItems = useRef([]);

  //memos
  const oldPrice =  deal?.original_price?? 0

  const newPrice = deal?.deal_price?? 0

  let addOnsPrice = useMemo(() => {
    return addOns.reduce((sum, crr) => {
      return sum + (crr.price??0);
    }, 0);
  }, [addOns]);

  //loader,error,undefined

  if (isPending) return <Loader />;

  if (error)
    return (
      <StatusScreen type="error" message={error.message} title={error.name} />
    );

  if (!deal)
    return <StatusScreen type="error" message="Not Found" title="404 error" />;

  //functions
  //functions



  console.log(dealId)

  const handleCartDeal = () => {

    if (!deal) {
      return toast.error("$404", "No Deal Found");
    }

    if (cart) {
      const cartDeal = {
        ...cart,

        quantity: quantity,
        addOns: addOns,
      };

      updateItem(cartDeal);
         toast.success("Deal as been updated successfully")
      return;

    }


  

    const addonsItems = deal.addOns.map((item: IDealAddOns , index:number) => {
          return {
                addonId: item.id,
                quantity: item.quantity,
                    included : true,

                imageUrl: (item.addOns as IAddOns).image_url,
                title: (item.addOns as IAddOns).name

          }
    })


    


const dealItems = deal.menus.map((item) => {
  const menu = item.menu as IDealMenuItem;


  const customizations = item.customizations.map((item) => {

       const customization = item.customization as ICustomizationOption;


        const customizationOptions = {
             customizationId: customization.id,
             imageUrl : customization.image_url,
             title: customization.name,



        }
 
    return {
      groupName: item.group_name,
      groupId: item.group_id,
      required: item.required,
      ...customizationOptions,
      quantity : item.quantity
    }
       


  })

  return {
    menuId: menu.id,
    imageUrl: menu.image_url as string,
    title: menu.title,
    quantity: item.quantity,
    customizations: customizations,
    
    addons: [],
  };
});
    

    

    const cartItem: ICartDeal = {
      dealId: deal.id as string,
      imageUrl: deal.image_url as string,
      price: newPrice,
      title: deal.title as string,
      quantity: quantity,
      addons: addOns,
      items: [...dealItems , ...addonsItems],

      type: "deal",
      freeDelivery: deal.free_delivery,
      oldPrice: oldPrice,
    };


    addItem(cartItem);

    toast.success("Deal has been addedd succesfully")


  };






  return (
    <>
      <View className="flex-1 bg-black">
        <SafeAreaView className="flex-1 bg-black px-4 ">
          <View className="flex-1">
            <View className="mb-3">
              <Header title="Deal Details" description={"Best deal available for you "} onPress={() => router.back()} />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 30,
              }}
            >
              {/* Hero Image */}

              <DealHero imageUrl={deal.image_url as string} />

              {/* Deal Information */}

              <DealInfo
                title={deal.title}
                description={deal.description as string}
                subtitle={deal.subtitle}
                originalPrice={Math.round(oldPrice)}
                newPrice={Math.round(newPrice)}
                save={Math.round(oldPrice - newPrice)}
              />

              {/* Included Items */}

              <IncludedItemsSection
                dealAddOns={deal.addOns}
                items={deal.menus}
                dealMenuItem={dealMenusItems}
              />

              {/* Add Extras */}

              <AddOnsSection selectedAddOns={addOns} setData={setAddOns} />

              {/* Notes */}

              <SpecialInstructions />
            </ScrollView>

            {/* Sticky Bottom */}
          </View>
        </SafeAreaView>

        <BottomActionBar
          onPress={handleCartDeal}
          price={quantity * newPrice + addOnsPrice}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </View>
    </>
  );
}
