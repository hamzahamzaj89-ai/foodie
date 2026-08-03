import React from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import {
  ArrowLeft,
  ChevronRight,
} from "lucide-react-native";

import CartMenuCard from "@/app/customer/components/cart/CartMenuCard";
import CartDealCard from "@/app/customer/components/cart/CartDealCard";
import { SafeAreaView } from "react-native-safe-area-context";
import CartBottom from "../components/cart/CartBottom";
import Button from "@/app/shared/components/Button";
import TabHeader from "../components/TabHeader";

const cart = [
  {
    id: "1",
    type: "menu",
  },
  {
    id: "2",
    type: "menu",
  },
  {
    id: "3",
    type: "deal",
  },
  {
    id: "4",
    type: "menu",
  },
];

export default function Cart() {
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
        data={cart}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 180,
        }}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16 }} />
        )}
        renderItem={({ item }) =>
          item.type === "menu" ? (
            <CartMenuCard />
          ) : (
            <CartDealCard />
          )
        }
        ListFooterComponent={
          <>
            {/* Add More */}
             <CartBottom/>
         
          </>
        }
      />


    

      {/* Checkout */}

    </SafeAreaView>



  <View className="bg-card absolute rounded-tl-3xl rounded-tr-3xl top-[81%] flex-row  w-[100%] px-4 py-8 pt-6">
             <View className="flex-1 ">
              <Button
          text="chekout"
          Icon={ChevronRight}
          onPress={() => {}}
          left
          
          />
             </View>
      </View>
    
    
    </>
   
  );
}