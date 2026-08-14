import React from "react";
import {
  FlatList,
  Text,
  View,
} from "react-native";

import DealItem from "./DealItem";
import { IDealAddOns, IDealMenu } from "@/interface/IDeal";
import { IMenuItem } from "@/interface/IMenu";




interface Props {

  id:string;
  name : string;
  image: string;
  quantity: number

}

export default function DealItemsSection({
  items
}: {
  items:  IDealMenu[]
}) {


    console.log(items[0].menu)


  return (
    <View className="mt-8 ">
      {/* Section Title */}

      <Text className="font-poppins-bold text-xl text-white">
        What's Included
      </Text>

      <Text className="mt-1 font-poppins-medium text-sm text-zinc-400">
        Everything you'll receive with this deal.
      </Text>

      <FlatList
        scrollEnabled={false}
        data={items}
        keyExtractor={(item) => (item.id)}
        contentContainerStyle={{
          marginTop: 18,
        }}
        renderItem={({ item }) => (
          <DealItem
            image={(item.menu as IMenuItem).image_url}
            name={(item.menu as IMenuItem).title}
            quantity={item.quantity}
          />
        )}
      />
    </View>
  );
}