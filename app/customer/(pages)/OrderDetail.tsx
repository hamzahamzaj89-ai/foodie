import React, { useEffect, useMemo } from "react";
import { ScrollView, View } from "react-native";
import OrderStatusCard from "@/app/customer/components/OrderPreview.tsx/OrderStatusCard";
import OrderItemCard from "@/app/customer/components/OrderPreview.tsx/OrderItemCard";
import DealPreviewCard from "@/app/customer/components/OrderPreview.tsx/DealPreviewCard";
import PaymentSummaryCard from "@/app/customer/components/OrderPreview.tsx/DealSummaryCard";
import DeliveryAddressCard from "@/app/customer/components/OrderPreview.tsx/DeliveryAddressCard";
import PaymentMethodCard from "@/app/customer/components/OrderPreview.tsx/PaymentMethodCard";
import SupportCard from "@/app/customer/components/OrderPreview.tsx/SupportCard";
import OrderDetailHeader from "../components/OrderPreview.tsx/OrderPreviewHeader";
import SpecialInstructionCard from "../components/OrderPreview.tsx/SpecialInstructionCard";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderInformationCard from "../components/OrderPreview.tsx/OrderInformationCard";
import { useAddressStore } from "../store/useAddressStore";
import { useCartStore } from "../store/useCartStore";
import CartMenuCard from "../components/ItemCards/MenuCard";
import CartDealCard from "../components/ItemCards/DealCard";
import AddressCard from "../components/OrderPreview.tsx/AddressCard";
import { IAddress } from "@/interface/IAddress";
import Button from "@/app/shared/components/Button";
import { ArrowLeft, CheckCircleIcon, ChevronLeftCircleIcon } from "lucide-react-native";
import { prepareOrderPayload } from "@/app/shared/utils/bulkTransformations";
import { useResturantStore } from "@/app/shared/store/useResturantStore";
import { useCreateOrders, useOrder } from "@/app/shared/hooks/useOrders";
import { IOrderPayload } from "@/interface/IOrderPayLoad";
import { toast } from "@/app/shared/utils/toast";
import {
  calculateItemTotalPrice,
  calculateOrderDetailTotal,
  calculatePreviewTotals,
} from "@/app/shared/utils/calculatingPrice";
import { ICartCustomization, ICartDeal, ICartItem } from "@/interface/ICart";
import { router, useLocalSearchParams } from "expo-router";
import StatusScreen from "../screens/StatusScreen";
import Loader from "@/app/shared/components/Loader";
import { useAppStore } from "@/app/shared/store/useAppStore";
import { Session } from "@supabase/supabase-js";







export default function OrderPreview({
  type = "orderDetail",
}: {
  type: "orderPreview" | "orderDetail";
}) {


      
 let address: IAddress | null
 
    
  let orderPayload;

  let subTotal = 0.0;

  let AddonsTotal = 0.0;
  let menuTotal = 0.0;
  let dealTotal = 0.0;

     const {orderId} = useLocalSearchParams();


     const {data:order , isPending, error  } = useOrder(orderId as string)

        

    const session = useAppStore((state) => state.session)





  //  useMemos


  // Always remember that our deal has addons of both that are included and thats are not included

  orderPayload = useMemo(() => {

    if (!order) {
         return 0
    }

    let totals = calculateOrderDetailTotal({
        menus: order.orderMenuItems,
        deals: order.orderDeals
    })


    AddonsTotal = totals.menuAddonsTotal + totals.dealAddonsTotal;
    menuTotal = totals.menuTotal;
    dealTotal = totals.dealTotal;

      return 0
  }, [order]);


 
  address = useMemo(() => {

    if (!order) {
        return  null
    }
   return{
            type: order.addressType,
            user_id: (session as Session).user.id,

            city: order.city,
            address: order.address,
            name: order.userName,
            special_instruction: order.specialInstruction,
            phone_number: order.phoneNumber
          }

  } , [order])










   
 if (!session) {
      return (<>
      <StatusScreen 
      type="error"
      title={"unautorized user"}
      message={"unautorized use cannot access the order page"}
      onPress={() => router.back()}
      buttonTitle="Go Back"
      Icon={ChevronLeftCircleIcon}
      right

      />
      </>)
 }



 if (error) {
      return (<>
      <StatusScreen 
      type="error"
      title={error.name}
      message={error.message}
      onPress={() => router.back()}
      buttonTitle="Go Back"
      Icon={ChevronLeftCircleIcon}
      right

      />
      </>)
 }


 if (isPending) {
     return (<>

     <View className="flex-1 bg-black">
               <Loader/>
     </View>
     </>)
 }














  

  return (
    <SafeAreaView className="flex-1 bg-black px-5 ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header */}

        <View className=" ">
          <Header
            title={"Order Details"}
            description={"See Your Order Details"}
            onPress={() => {}}
          />
        </View>

        {/* Order Status */}

        {type === "orderDetail" && (
          <>
            <OrderStatusCard
              status={order.status}
              deliveredAt="Jul 30 • 9:15 PM"
            />
          </>
        )}

        {/* Items */}
        <View className="mt-6 bg-card rounded-2xl">
          {order.orderMenuItems.map((item, index) => {


               

             
            return(
            <>
             
                  <CartMenuCard key={item.id} item={{
                    ...item,
                    type: "menu"
                  }} type="orderPreview" />

                  <View className="px-4">
                    <View className="mt- h-[1px] bg-primaryCard " />
                  </View>
                </>
              )}
          )}
        </View>

        {/* Deal */}

        <View className="mt-3 ">
          {order.orderDeals.map((item, index) => {


             
           

            return (    <>
                  <View className="mt-2">
                    <CartDealCard key={item.id} item={{
                      ...item,
                      type: "deal"
                    }} type="orderPreviewDealCard" />
                  </View>
                </>)
          })}
        </View>

        {/* Special Instructions */}

        <View className="mx-0 mt-6 rounded-3xl bg-card p-0">
          <AddressCard 
          address={address as IAddress}
        
          />
        </View>

        {/* Payment */}

        <PaymentSummaryCard
          menuTotal={menuTotal}
          dealsTotal={dealTotal}
          deliveryFee={order.deliveryFee as number}
          addonsTotal={AddonsTotal}
          tax={0.0}
          discount={0}
        />

     
      </ScrollView>
    </SafeAreaView>
  );
}
