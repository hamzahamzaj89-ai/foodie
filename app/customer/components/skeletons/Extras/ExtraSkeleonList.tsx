import React from "react";
import { FlatList, View } from "react-native";
import ExtrasSkeleton from "./ExtrasSkeleton";

const skeletonData = Array.from({ length: 6 }, (_, index) => ({
  id: `skeleton-${index}`,
}));

export default function ExtrasSkeletonList() {
  return (
    <View className="flex-row flex-nowrap">
      <FlatList
        horizontal
        data={skeletonData}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ width: 12 }} />
        )}
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 8,
          paddingRight: 20,
        }}
        renderItem={() => (
          <ExtrasSkeleton />
        )}
      />
    </View>
  );
}