import React from "react";
import { View } from "react-native";
import Skeleton from "@/app/customer/components/Skeleton";

const SectionSkeletonList = () => {
  const skeletons = Array.from({ length: 6 });

  return (
    <View className="flex-row items-center gap-4 px-4">
      {skeletons.map((_, index) => (
        <Skeleton
          key={index}
          width={100 + (index % 3) * 15}
          height={38}
          radius={16}
        />
      ))}
    </View>
  );
};

export default SectionSkeletonList;
