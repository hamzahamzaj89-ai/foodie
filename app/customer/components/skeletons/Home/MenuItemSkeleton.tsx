import React from "react";
import { View } from "react-native";
import Skeleton from "../../Skeleton";

export default function MenuItemSkeleton({
  index = 0,
}: {
  index?: number;
}) {
  return (
    <View
      className="w-[165px] relative pt-4"
      style={{
        marginBottom: 20,
      }}
    >
      {/* Floating Image Skeleton */}



      {/* Card */}

      <View
        className="relative -top-8 rounded-[28px] bg-[#111317] px-4 pt-[72px] pb-4"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 18,
          },
          shadowOpacity: 0.35,
          shadowRadius: 30,
          elevation: 12,
        }}
      >
        <View className="mt-[-15px]">
          {/* Food Name */}

          <Skeleton
            width="75%"
            height={18}
            radius={8}
            style={{
              alignSelf: "center",
            }}
          />

          {/* Subtitle */}

          <View className="mt-3 items-center">
            <Skeleton
              width="90%"
              height={11}
              radius={6}
            />
          </View>

          {/* Bottom */}

          <View className="mt-4 flex-row items-center justify-between">
            {/* Price */}

            <Skeleton
              width={65}
              height={23}
              radius={7}
            />

            {/* Add Button */}

            <Skeleton
              width={44}
              height={44}
              radius={16}
            />
          </View>
        </View>
      </View>
    </View>
  );
}