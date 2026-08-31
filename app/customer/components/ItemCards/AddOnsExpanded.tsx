import { View, Text, Image } from "react-native";
import React from "react";
import { useCartStore } from "../../store/useCartStore";
import { ICartAddOns, ICartDeal } from "@/interface/ICart";

const CartAddOnsExpanded = ({ addonsExpanded, addons }: {
    addonsExpanded: boolean,
    addons: ICartAddOns[]
}) => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <>
      {addonsExpanded && (
        <View className="mt-4">
          {addons.map((addon) => (
            <View key={addon.addonId} className="mb-3 flex-row items-center">
              <View className="h-10 w-10 overflow-hidden rounded-xl bg-primaryCard">
                <Image
                  source={{
                    uri: addon.imageUrl
                  }}
                  resizeMode="contain"
                  className="h-full w-full"
                />
              </View>

              <Text className="ml-3 flex-1 font-poppins-medium text-xs text-zinc-300">
                {addon.title}
              </Text>

              <Text className="font-poppins-semibold text-xs text-[#FF8A2B]">
                Added
              </Text>
            </View>
          ))}
        </View>
      )}
    </>
  );
};

export default CartAddOnsExpanded;
