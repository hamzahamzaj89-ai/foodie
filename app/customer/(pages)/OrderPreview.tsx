import React, { useEffect } from "react";
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
import { CheckCircleIcon } from "lucide-react-native";
import { prepareOrderPayload } from "@/app/shared/utils/bulkTransformations";
import { useResturantStore } from "@/app/shared/store/useResturantStore";
import { useCreateOrders } from "@/app/shared/hooks/useOrders";
import { IOrderPayload } from "@/interface/IOrderPayLoad";
import { toast } from "@/app/shared/utils/toast";

export default function OrderPreview({
  type = "orderPreview",
}: {
  type: "orderPreview" | "orderDetail";
}) {
  const selectedAddress = useAddressStore((state) => state.selectedAddress);
  const cartItems = useCartStore((state) => state.items);
  const restaurantId = useResturantStore(
    (state) => state.selectedRestaurant?.id,
  );

  const { mutateAsync: createOrder, error, isPending } = useCreateOrders();
  let orderPayload: IOrderPayload;

  useEffect(() => {
    orderPayload = prepareOrderPayload(
      cartItems,
      selectedAddress as IAddress,
      restaurantId as string,
    );
  }, [cartItems]);

  const handleOrder = () => {
    try {
      const order = createOrder(orderPayload);

      toast.success("Your order has been created successfully: ")
    } catch (error) {
      console.log("order creation failed" + error);
    }
  };

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
              status="Delivered"
              deliveredAt="Jul 30 • 9:15 PM"
            />
          </>
        )}

        {/* Items */}
        <View className="mt-6 bg-card rounded-2xl">
          {cartItems.map((item, index) => (
            <>
              {item.type === "cartMenu" && (
                <>
                  <CartMenuCard key={index} item={item} type="orderPreview" />

                  <View className="px-4">
                    <View className="mt- h-[1px] bg-primaryCard " />
                  </View>
                </>
              )}
            </>
          ))}
        </View>

        {/* Deal */}

        <View className="mt-3 ">
          {cartItems.map((item, index) => (
            <>
              {item.type === "cartDeal" && (
                <>
                  <View className="mt-2">
                    <CartDealCard key={index} item={item} type="orderPreview" />
                  </View>
                </>
              )}
            </>
          ))}
        </View>

        {/* Special Instructions */}

        <View className="mx-0 mt-6 rounded-3xl bg-card p-0">
          <AddressCard address={selectedAddress as IAddress} />
        </View>

        {/* Payment */}

        <PaymentSummaryCard
          itemsTotal={36.99}
          dealsTotal={34.99}
          deliveryFee={2.99}
          serviceFee={0.0}
          tax={0.0}
          discount={0}
        />

        {type === "orderPreview" && (
          <>
            <View className="mt-4">
              <Button
                text="Confirm Order"
                loading={isPending}
                Icon={CheckCircleIcon}
                right={true}
                onPress={() => handleOrder()}
              />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
