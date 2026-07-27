import { View } from "react-native";

export default function Pagination({
  currentIndex,
  total,
} : {currentIndex : number , total: number}) {
  return (
    <View className="flex-row h-full mt-3 items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full ${
            currentIndex === index
              ? "w-7 bg-orange-500"
              : "w-2 bg-zinc-600"
          }`}
        />
      ))}
    </View>
  );
}