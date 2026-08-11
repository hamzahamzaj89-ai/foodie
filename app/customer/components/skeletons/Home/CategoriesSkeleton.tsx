import React from "react";
import { FlatList } from "react-native";
import Skeleton from "../../Skeleton";

const skeletons = [
  { id: "1", width: 82 },
  { id: "2", width: 118 },
  { id: "3", width: 96 },
  { id: "4", width: 128 },
  { id: "5", width: 105 },
  { id: "6", width: 90 },
];

export default function CategoriesSkeleton() {
  return (
    <FlatList
      horizontal
      data={skeletons}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 16,
        gap: 10,
      }}
      renderItem={({ item }) => (
        <Skeleton
          width={item.width}
          height={43}
          radius={16}
        />
      )}
    />
  );
}