import React, { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { ArrowLeft, ChevronRight } from "lucide-react-native";

import CartMenuCard from "@/app/customer/components/cart/CartMenuCard";
import CartDealCard from "@/app/customer/components/cart/CartDealCard";
import { SafeAreaView } from "react-native-safe-area-context";
import CartBottom from "../components/cart/CartBottom";
import Button from "@/app/shared/components/Button";
import TabHeader from "../components/TabHeader";
import { useCartStore } from "../store/useCartStore";
import OrderCard from "../components/OrderCard";
import { calculateItemTotalPrice } from "@/app/shared/utils/calculatingPrice";
import { ICartDeal } from "@/interface/ICart";
import { router } from "expo-router";
import { toast } from "@/app/shared/utils/toast";
import InfoModal from "../components/InfoModal";
import { useAppStore } from "@/app/shared/store/useAppStore";

export default function Cart() {
  const cartItems = useCartStore((state) => state.items);
  const session = useAppStore((state) => state.session)
  const [visible, setVisible] = useState(false);

  let orderPrice = useMemo(() => {
    return cartItems.reduce((crr, item) => {
      return crr + calculateItemTotalPrice(item);
    }, 0);
  }, [cartItems]);

  const qualifiesForFreeDelivery = useMemo(() => {
    return cartItems.some(
      (item) => item.type === "deal" && (item as ICartDeal).freeDelivery,
    );
  }, [cartItems]);

  const handleNavigation = () => {

       

         if (!session) {
          return setVisible(true)
         }

         router.push("/customer/(pages)/AddressPage");

  };

  return (
    <>
      <SafeAreaView className="flex-1 p-4 pt-0 justify-center bg-black">
        {/* Header */}

        <View className="mb-2">
          <TabHeader
            title={"Your Cart"}
            description={" Manage you order items from this cart"}
          />
        </View>
        {/* Cart */}

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 180,
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          renderItem={({ item }) =>
            item?.type === "deal" ? (
              <CartDealCard item={item} />
            ) : (
              <CartMenuCard item={item} />
            )
          }
          ListFooterComponent={
            <>
              {/* Add More */}
              <CartBottom
                orderPrice={orderPrice}
                qualifiesForFreeDelivery={qualifiesForFreeDelivery}
              />
            </>
          }
        />

        {/* Checkout */}
      </SafeAreaView>

      <View className="bg-card absolute rounded-tl-3xl rounded-tr-3xl top-[81%] flex-row  w-[100%] px-4 py-8 pt-6">
        <View className="flex-1 ">
          <Button
            text="Order Now"
            Icon={ChevronRight}
            onPress={() => {
              handleNavigation();
            }}
            left
          />
        </View>
      </View>

      {visible && (
        <InfoModal
          visible={visible}
          title={"Authentication"}
          message="Please Sign in to continue to order"
          primaryText="SignIn"
          secondaryText="close"
          onSecondaryPress={() => setVisible(false)}
          onPrimaryPress={() => router.push("/(auth)/SignIn")}
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
}
