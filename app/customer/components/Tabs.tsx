import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

type Props = {
  tabs: string[];
  selected: string;
  onSelect: (tab: string) => void;
};

export default function SegmentedTabs({
  tabs,
  selected,
  onSelect,
}: Props) {
  return (
    <View
      className="flex-row rounded-2xl bg-card p-1"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 16,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        elevation: 5,
      }}
    >
      {tabs.map((tab) => {
        const active = tab === selected;

        return (
          <Pressable
            key={tab}
            onPress={() => onSelect(tab)}
            className={`flex-1 items-center justify-center rounded-2xl py-4 ${
              active ? "bg-[#FF8A2B]" : ""
            }`}
          >
            <Text
              className={`font-poppins-semibold text-sm ${
                active
                  ? "text-[#050608]"
                  : "text-zinc-400"
              }`}
            >
              {tab}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}