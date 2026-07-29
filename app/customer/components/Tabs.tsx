import React from "react";
import {
  FlatList,
  Pressable,
  Text,
} from "react-native";

export default function OrderTabs({
  selected,
  onSelect,
  tabs
}: {
    tabs: string[]
    selected: string
    onSelect: (text:string) => void
}) {


  return (
    <FlatList
      horizontal
      data={tabs}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
     
      ItemSeparatorComponent={() => (
        <Pressable style={{ width: 12 }} />
      )}
      renderItem={({ item }) => {
        const active =
          item === selected;

        return (
          <Pressable
            onPress={() =>
              onSelect(item)
            }
            className={`px-[15px] py-[10px] rounded-2xl items-center justify-center ${
              active
                ? "bg-[#FF8A2B]"
                : "bg-[#171A1F]"
            }`}
          >
            <Text
              className={`font-poppins-semibold ${
                active
                  ? "text-[#050608]"
                  : "text-white"
              }`}
            >
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}