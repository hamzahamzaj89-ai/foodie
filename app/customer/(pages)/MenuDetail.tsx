import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import HeroSection from "@/app/customer/components/MenuDetail/HeroSection";
import ProductInfo from "@/app/customer/components/MenuDetail/ProductInfo";
import SizeSelector from "@/app/customer/components/MenuDetail/SizeSelector";
import CustomizationSection from "@/app/customer/components/ExtraSection";
import AddOnSection from "@/app/customer/components/ExtraSection";
import BottomActionBar from "@/app/customer/components/BottomActionBar";
import { useLocalSearchParams } from "expo-router";
import { useMenuItem } from "@/app/shared/hooks/useMenu";
import StatusScreen from "../screens/StatusScreen";
import Loader from "@/app/shared/components/Loader";
import { useCartStore } from "../store/useCartStore";
import { ICartAddOns, ICartCustomization } from "@/interface/ICart";
import { IAddOns } from "@/interface/IAddOns";
import AddOnsSection from "../components/AddOns";

const addOns = [
  {
    id: "1",
    name: "French Fries",
    price: 2.99,
    image: require("@/assets/images/french_fries.png"),
  },
  {
    id: "2",
    name: "Coca-Cola",
    price: 1.99,
    image: require("@/assets/images/french_fries.png"),
  },
  {
    id: "3",
    name: "Chicken Nuggets",
    price: 4.99,
    image: require("@/assets/images/french_fries.png"),
  },
];

export default function MenuDetailsScreen() {
  const [customizations, setCustomizations] = useState<ICartCustomization[]>(
    [],
  );
  const [addOns, setAddOns] = useState<ICartAddOns[]>([]);

  const { id } = useLocalSearchParams();

  const cart = useCartStore((state) => state.getCartItem(id as string));

  const { data: menu, isPending, error } = useMenuItem(id as string);

  const handleCart = () => {};

  if (error) {
    return (
      <StatusScreen type="error" title={error.name} message={error.message} />
    );
  }

  if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <FlatList
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
        ListHeaderComponent={
          <>
            <HeroSection imageUrl={menu.image_url} />

            <View className="px-5">
              <ProductInfo
                productInfo={{
                  reviewsCount: menu.reviews_count,
                  rating: menu.average_rating,
                  title: menu.title,
                  description: menu.description,
                  calories: menu.calories,
                }}
              />

              <SizeSelector />

              {menu.menu_customization_group.map((item, inwdex) => (
                <>
                  <CustomizationSection
                    data={item.customization_group[0]}
                    setData={setCustomizations}
                    selectedCustomizations={customizations}
                  />
                </>
              ))}

              <AddOnsSection selectedAddOns={addOns} setData={setAddOns} />
            </View>
          </>
        }
        renderItem={null}
      />

      <BottomActionBar
        onPress={() => {
          handleCart;
        }}
        cartQuantity={cart ? cart.quantity : null}
      />
    </SafeAreaView>
  );
}
