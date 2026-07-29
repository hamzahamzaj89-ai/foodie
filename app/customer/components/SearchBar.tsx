import React from "react";
import {
  View,
  TextInput,
  Pressable,
} from "react-native";
import {
  Search,
  SlidersHorizontal,
} from "lucide-react-native";
import SearchField from "./SearchField";

export default function SearchBar() {
  return (
    <View className="flex-row items-center  ">
      {/* Search Bar */}


      <SearchField
      onVlaueChange={(text:string) => {}}
        
      />
     

      {/* Filter Button */}
      <Pressable
        className="py-[12px] px-[13px] ml-2 mb-[2px] rounded-2xl bg-[#FF8A2B] items-center justify-center"
        style={{
          shadowColor: "#FF8A2B",
          shadowOpacity: 0.35,
          shadowRadius: 12,
          shadowOffset: {
            width: 0,
            height: 6,
          },
          elevation: 8,
        }}
      >
        <SlidersHorizontal
          size={22}
          color="#050608"
          strokeWidth={2.5}
        />
      </Pressable>
    </View>
  );
}