import React from "react";
import { View } from "react-native";

import MenuItemSkeleton from "./MenuItemSkeleton";

export default function MenuSkeletonGrid() {
  return (
    <View className="flex-row flex-wrap justify-between px-[10px]">
      <MenuItemSkeleton index={0} />
      <MenuItemSkeleton index={1} />
      <MenuItemSkeleton index={2} />
      <MenuItemSkeleton index={3} />
    </View>
  );
}