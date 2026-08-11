import React from "react";
import { View } from "react-native";
import Skeleton from "../../Skeleton";

export default function DealSkeleton() {
  return (
    <View className="mx-3 mt-4 overflow-hidden rounded-2xl">
      <Skeleton
        width="100%"
        height={170}
        radius={16}
      />
    </View>
  );
}