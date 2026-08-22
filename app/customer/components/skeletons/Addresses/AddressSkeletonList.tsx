import React from "react";
import { View } from "react-native";
import AddressCardSkeleton from "./AddressCardSkeleton";

export default function AddressListSkeleton() {
  return (
    <View>
      <AddressCardSkeleton />
      <AddressCardSkeleton />
      <AddressCardSkeleton />
    </View>
  );
}