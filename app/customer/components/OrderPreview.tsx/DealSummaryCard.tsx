import React from "react";
import {
  Text,
  View,
} from "react-native";
import Row from "../Row";

type Props = {
  itemsTotal: number;
  dealsTotal: number;
  deliveryFee: number;
  serviceFee: number;
  tax: number;
  discount: number;
};

export default function PaymentSummaryCard({
  itemsTotal,
  dealsTotal,
  deliveryFee,
  serviceFee,
  tax,
  discount,
}: Props) {
  const total =
    itemsTotal +
    dealsTotal +
    deliveryFee +
    serviceFee +
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
          value={itemsTotal}
        />

        <Row
          label="Deals Total"
          value={dealsTotal}
        />

        <Row
          label="Delivery Fee"
          value={deliveryFee}
        />

        <Row
          label="Service Fee"
          value={serviceFee}
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

      <View className="my-2 h-[1px] bg-[#23262D]" />

      <Row
        label="Grand Total"
        value={total}
        highlight
      />
    </View>
  );
}