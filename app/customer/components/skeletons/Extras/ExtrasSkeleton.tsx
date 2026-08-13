import React from "react";
import { View } from "react-native";
import Skeleton from "../../Skeleton";

export default function ExtrasSkeleton() {
  return (
    <View className="relative w-[100px] rounded-xl bg-card px-2 pb-2 pt-2">
      {/* Name */}

      <Skeleton
        width="75%"
        height={16}
        radius={6}
        style={{
          alignSelf: "center",
        }}
      />

      {/* Image */}

      <View className="mt-2 items-center">
        <Skeleton
          width={60}
          height={40}
          radius={10}
        />
      </View>

      {/* Price */}

      <View className="mt-1 items-center">
        <Skeleton
          width={45}
          height={12}
          radius={5}
        />
      </View>
    </View>
  );
}