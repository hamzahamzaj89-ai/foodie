import React, { useMemo, useState } from "react";
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
import { ICartAddOns, ICartDeal } from "@/interface/ICart";
import { useCartStore } from "../store/useCartStore";
import { useDealItem, useDeals } from "@/app/shared/hooks/useDeals";
import { calculateDealPrice } from "@/app/shared/utils/calculatingPrice";
import { IDealDetail } from "@/interface/IDeal";
import Loader from "@/app/shared/components/Loader";
import StatusScreen from "../screens/StatusScreen";
import { toast } from "@/app/shared/utils/toast";

export default function DealDetail() {
  const { dealId } = useLocalSearchParams();

  const cart = useCartStore((state) => state.getCartItem(dealId as string));


  const [quantity, setQuantity] = useState(cart ? cart.quantity : 1);
  const addItem = useCartStore((state) => state.addItem);

  const [addOns, setAddOns] = useState<ICartAddOns[]>(cart ? cart.addOns : []);


  const { data: deal, error, isPending } = useDealItem(dealId as string);



  //memos
  const oldPrice = useMemo(() => {
    return calculateDealPrice(deal?.menus);
  }, [deal]);



  const newPrice = useMemo(() => {
    return deal?.fixed_discount
      ? oldPrice - deal?.fixed_discount
      : oldPrice - (((deal?.discount_percentage ?? 0) /100) * oldPrice);
  }, [deal]);




  


  //loader,error,undefined

  if (isPending)  return <Loader />;
  

  if (error)  return <StatusScreen type="error" message={error.message} title={error.name} />;
    
  

  if (!deal) return <StatusScreen type="error" message="Not Found" title="404 error" />;
  



  //functions
    //functions

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

      addItem(cartDeal);

      return;
    }

    const cartItem: ICartDeal = {
      id: deal.id as string,
      imageUrl: deal.image_url as string,
      price: newPrice,
      title: deal.title as string,
      quantity: quantity,
      addOns: addOns,
      items: deal.menus,
      discount: oldPrice - newPrice,
      type: "deal",
      freeDelivery: deal.free_delivery,
      oldPrice: oldPrice,
    };

    addItem(cartItem);
  };







  return (
    <>
      <SafeAreaView className="flex-1 bg-black px-4 pt-0">
        <View className="flex-1">
          <View className="mb-2">
            <Header title="Deal Details" onPress={() => router.back()} />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 140,
            }}
          >
            {/* Hero Image */}

            <DealHero imageUrl={deal.image_url as string} />

            {/* Deal Information */}

            <DealInfo
              title={deal.title}
              description={deal.description as string}
              subtitle={deal.subtitle}
              originalPrice={oldPrice}
              newPrice={newPrice}
              save={oldPrice - newPrice}
            />

            {/* Included Items */}

            <IncludedItemsSection />

            {/* Add Extras */}

            <AddOnsSection selectedAddOns={addOns} setData={setAddOns} />

            {/* Notes */}

            <SpecialInstructions />
          </ScrollView>

          {/* Sticky Bottom */}
        </View>
      </SafeAreaView>

      <View>
        <BottomActionBar
          onPress={handleCartDeal}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </View>
    </>
  );
}
