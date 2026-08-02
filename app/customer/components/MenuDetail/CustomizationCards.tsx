import React from "react";
import {
  FlatList,
  Text,
  View,
} from "react-native";

import CustomizationCard from "./CustomizationCard";

type Props = {
  title: string;
  data: any[];
};

export default function CustomizationSection({
  title,
  data,
}: Props) {
  return (
    <View className="mt-8 w-[100%]">
      {/* Header */}

      <View className="flex-row items-center justify-between">
        <Text className="font-poppins-semibold text-xl text-white">
          {title}
        </Text>

        <Text className="font-poppins-medium text-sm text-zinc-500">
          Optional
        </Text>
      </View>

      {/* Cards */}

        <View className="flex flex-row no-wrap">
          <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
                  <View style={{ width: 10 }} />
                )}
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 8,
          paddingRight: 20,
        }}
        renderItem={({ item, index }) => (
          <CustomizationCard
            selected={index === 0}
          />
        )}
      />
        </View>
    </View>
  );
}