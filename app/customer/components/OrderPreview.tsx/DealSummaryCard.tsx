import React from "react";
import {
  Text,
  View,
} from "react-native";
import Row from "../Row";

type Props = {
  menuTotal: number;
  dealsTotal: number;
  deliveryFee: number;
  addonsTotal: number;
  
  tax: number;
  discount: number;
};

export default function PaymentSummaryCard({
  menuTotal,
  dealsTotal,
  deliveryFee,
  addonsTotal,

  tax,
  discount,
}: Props) {
  const total =
    menuTotal +
    dealsTotal +
    deliveryFee +
    addonsTotal +
    tax -
    discount;



  return (
    <View className=" mt-6 rounded-3xl bg-card p-5">
      <Text className="font-poppins-bold text-xl text-white">
        Payment Summary
      </Text>

      <View className="mt-6 w-[100%]  flex flex-col">
        <Row
          label="Items Total"
          value={menuTotal}
        />

        <Row
          label="Deals Total"
          value={dealsTotal}
        />


        <Row
          label="Addons Total"
          value={addonsTotal}
        />
     

       
        <Row
          label="Delivery Fee"
          value={deliveryFee}
        />
        <Row
          label="Tax"
          value={tax}
        />

        <Row
          label="Discount"
          value={discount}
          discount
        />
      </View>

      <View className="mt-1 mb-3 h-[1px] bg-[#23262D]" />

      <Row
        label="Grand Total"
        value={total}
        highlight
      />
    </View>
  );
}