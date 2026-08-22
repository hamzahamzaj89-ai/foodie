import React from "react";
import { View } from "react-native";
import Skeleton from "../../Skeleton";

export default function AddressCardSkeleton() {
  return (
    <View
      className="mb-4 overflow-hidden rounded-3xl border border-border bg-card p-4"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        elevation: 3,
      }}
    >
      {/* Top */}

      <View className="flex-row items-center">
        {/* Icon */}

        <Skeleton
          width={44}
          height={44}
          radius={16}
        />

        {/* Title */}

        <View className="ml-3 flex-1">
          <Skeleton
            width={75}
            height={17}
            radius={6}
          />

          <View className="mt-2 flex-row items-center">
            <Skeleton
              width={12}
              height={12}
              radius={6}
            />

            <View className="ml-1">
              <Skeleton
                width={95}
                height={10}
                radius={5}
              />
            </View>
          </View>
        </View>

        {/* Selection Circle */}

        <Skeleton
          width={24}
          height={24}
          radius={12}
        />
      </View>

      {/* Address */}

      <View className="mt-4 rounded-2xl bg-[#0D0F12] px-4 py-3">
        <Skeleton
          width="90%"
          height={12}
          radius={5}
        />

        <View className="mt-2">
          <Skeleton
            width="55%"
            height={11}
            radius={5}
          />
        </View>
      </View>

      {/* Bottom */}

      <View className="mt-3 flex-row items-center justify-between">
        {/* Phone */}

        <Skeleton
          width={105}
          height={10}
          radius={5}
        />

        {/* Edit */}

        <View className="flex-row items-center">
          <Skeleton
            width={30}
            height={12}
            radius={5}
          />

          <View className="ml-1">
            <Skeleton
              width={14}
              height={14}
              radius={7}
            />
          </View>
        </View>
      </View>
    </View>
  );
}