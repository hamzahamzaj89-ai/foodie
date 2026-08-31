import React from "react";
import { FlatList, Text, View } from "react-native";

import CustomizationCard from "./ExtraCard";
import {
  ICustomizationGroup,
  ICustomizationOption,
  IMenuCustomizationGroup,
} from "@/interface/IMenu";
import SizeSelector from "./MenuDetail/SizeSelector";
import { ICartAddOns, ICartCustomization } from "@/interface/ICart";
import { toast } from "@/app/shared/utils/toast";
import { useAddOns } from "@/app/shared/hooks/useAddOns";
import { useResturantStore } from "@/app/shared/store/useResturantStore";
import StatusScreen from "../screens/StatusScreen";
import ExtrasSkeletonList from "./skeletons/Extras/ExtraSkeleonList";
import { IAddOns } from "@/interface/IAddOns";

interface Props {
  setData: React.Dispatch<React.SetStateAction<ICartAddOns[]>>;
  selectedAddOns: ICartAddOns[];
}

export default function AddOnsSection({ setData, selectedAddOns }: Props) {
  const selectedRestaurant = useResturantStore(
    (state) => state.selectedRestaurant,
  );

  const {
    data: addOns,
    isPending,
    error,
  } = useAddOns(selectedRestaurant?.id as string);

  const handledata = (selectedCard: IAddOns) => {
    const selected = selectedAddOns.findIndex(
      (item) => item.addonId === selectedCard.id,
    );

    if (selected > -1) {
      selectedAddOns.splice(selected, 1);
      const newArray = [...selectedAddOns];
      setData(newArray);
      return;
    }

    setData((prev: ICartAddOns[]) => [
      ...prev,
      {
        addonId: selectedCard.id,
        imageUrl: selectedCard.image_url,
        included: false,

        title: selectedCard.name,
        price: selectedCard.price,
        quantity: 1      
      },
    ]);
  };

  if (error) {
    return;
  }

  return (
    <View className="mt-8 w-[100%]">
      {/* Header */}

      <View className="flex-row items-center justify-between">
        <Text className="font-poppins-semibold text-xl text-white">
          Add Ons
        </Text>

        <Text className="font-poppins-medium text-sm text-zinc-500">
          optional
        </Text>
      </View>

      {/* Cards */}

      {isPending ? (
        <>
          <ExtrasSkeletonList />
        </>
      ) : (
        <>
          <View className="flex flex-row no-wrap w-[100%]  ">
            <FlatList
              horizontal
              data={addOns}
              className="w-full"

              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              contentContainerStyle={{
                paddingTop: 12,
                paddingBottom: 8,
                paddingRight: 20,
              }}
              renderItem={({ item, index }) => (
                <CustomizationCard
                  onPress={() => {handledata(item)}}
                  customization={item}
                  selected={
                    selectedAddOns.find((i) => i.addonId === item.id) && true
                  }
                />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
}
