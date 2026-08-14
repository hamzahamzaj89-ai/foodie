import React from "react";
import {
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import {
  Minus,
  Plus,
  ChevronDown,
} from "lucide-react-native";
import { useCartStore } from "../../store/useCartStore";

type Addon = {
  id: string;
  name: string;
};

type CartMenuCardProps = {
  title?: string;
  customization?: string;
  price?: number;
  quantity?: number;
  image?: any;
  addons?: Addon[];
  totalAddonCount?: number;
  onMinus?: () => void;
  onPlus?: () => void;
  onAddonsPress?: () => void;
};

export default function CartMenuCard({
  title = "Cheese Burger",
  customization = "Double Patty • Extra Cheese",
  price = 14.99,
  quantity = 2,
  image = require("@/assets/images/burger.png"),
  addons = [
    {
      id: "1",
      name: "Fries"
    },
    {
      id: "2",
      name: "Cheese",
    },
    {
      id: "3",
      name: "Drink",
    },
  ],
  totalAddonCount = 6,
  onMinus,
  onPlus,
  onAddonsPress,
}: CartMenuCardProps) {



  const cartItems = useCartStore((state) => state.items)




  const visibleAddons = addons.slice(0, 3);

  const remainingAddons = Math.max(
    totalAddonCount - visibleAddons.length,
    0
  );

  return (
    <View
      className="rounded-3xl bg-card p-4"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 18,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        elevation: 5,
      }}
    >
      {/* Main Product */}

      <View className="flex-row">
        {/* Food Image */}

        <View className="h-24 w-24 relative items-center justify-center rounded-2xl bg-primaryCard">
          <Image
            source={image}
            resizeMode="contain"
            className="absolute h-24 w-[90px]"
          />
        </View>

        {/* Details */}

        <View className="ml-4 flex-1">
          {/* Name */}

          <Text
            numberOfLines={1}
            className="font-poppins-semibold text-lg text-white"
          >
            {title}
          </Text>

          {/* Customization */}

          <Text
            numberOfLines={1}
            className="mt-1 font-poppins-medium text-xs text-zinc-400"
          >
            {customization}
          </Text>

          {/* Addons */}

          <Pressable
            onPress={onAddonsPress}
            className="mt-3 flex-row items-center"
          >
            {/* Overlapping addon images */}

            <View className="h-8 flex-row items-center">
              {visibleAddons.map((addon, index) => (
                <View
                  key={addon.id}
                  className="h-7 w-7 overflow-hidden rounded-full border-0 bg-primaryCard"
                  style={{
                    marginLeft: index === 0 ? 0 : -9,
                    zIndex: visibleAddons.length - index,
                  }}
                >
                  <Image
                    source={{
                      uri: cartItems[0].addOns[index]?.image_url
                    }}
                    resizeMode="contain"
                    className="h-full w-full"
                  />
                </View>
              ))}
            </View>

            {/* More Addons */}

            {remainingAddons > 0 && (
              <Text className="ml-2 font-poppins-medium text-[11px] text-zinc-400">
                +{remainingAddons} more
              </Text>
            )}

            <ChevronDown
              size={14}
              color="#A1A1AA"
              strokeWidth={2.2}
              style={{
                marginLeft: 3,
              }}
            />
          </Pressable>
        </View>
      </View>

      {/* Divider */}

      <View className="my-4 h-[1px] bg-white/5" />

      {/* Bottom */}

      <View className="flex-row items-center justify-between">
        {/* Price */}

        <View>
          <Text className="font-poppins-medium text-[11px] text-zinc-500">
            Item total
          </Text>

          <Text className="mt-0.5 font-poppins-bold text-xl text-white">
            ${(price * quantity).toFixed(2)}
          </Text>
        </View>

        {/* Quantity */}

        <View className="flex-row items-center rounded-2xl bg-[#20242B] p-1">
          <Pressable
            onPress={onMinus}
            className="h-9 w-9 items-center justify-center rounded-xl"
          >
            <Minus
              size={17}
              color="#FFFFFF"
              strokeWidth={2.5}
            />
          </Pressable>

          <Text className="mx-3 min-w-[18px] text-center font-poppins-bold text-sm text-white">
            {quantity}
          </Text>

          <Pressable
            onPress={onPlus}
            className="h-9 w-9 items-center justify-center rounded-xl bg-[#FF8A2B]"
          >
            <Plus
              size={17}
              color="#050608"
              strokeWidth={2.8}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}