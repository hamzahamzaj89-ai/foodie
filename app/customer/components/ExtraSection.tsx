import React from "react";
import {
  FlatList,
  Text,
  View,
} from "react-native";

import CustomizationCard from "./ExtraCard";
import { ICustomizationGroup, ICustomizationOption, IMenuCustomizationGroup } from "@/interface/IMenu";
import SizeSelector from "./MenuDetail/SizeSelector";
import { ICartCustomization } from "@/interface/ICart";
import { toast } from "@/app/shared/utils/toast";

interface Props  {
  data: ICustomizationGroup;
  setData: React.Dispatch<React.SetStateAction<ICartCustomization[]>>;
  selectedCustomizations: ICartCustomization[]
};

export default function ExtraSection({
  data:customizations,
  setData,
  selectedCustomizations
}: Props) {


  const handledata = (selectedCard:ICustomizationOption) => {
  


           


          

          const selected = selectedCustomizations.findIndex((item) => item.id === selectedCard.id)


          if (selected > -1) {
            console.log(selected)
            selectedCustomizations.splice(selected, 1)
            const newArray = [...selectedCustomizations]
           setData(newArray)
           return
          }





          const selectedGroup = selectedCustomizations.filter((item) => item.groupId === customizations.id)

          if (selectedGroup.length >= customizations.max_selection) {

            toast.error("Limit Accseed","You can only select" + customizations.max_selection + "for this customization group")
               return
          }


          
          
            setData((prev : ICartCustomization[]) => [...prev , {
            groupId: customizations.id ,
            groupName: customizations.name  ,
            id:  selectedCard.id ,
            name: selectedCard.name  ,
            image_url: selectedCard.image_url as string,
            price: selectedCard.price,
            quantity: 1
         }])

  


  }


  
  const handleSingleData = (selectedCard:ICustomizationOption) => {
  



          const selected = selectedCustomizations.findIndex((item) => item.groupId === customizations.id)


          if (selected > -1) {

           selectedCustomizations.splice(selected, 1)
          }

          
            setData((prev : ICartCustomization[]) => [...prev , {
            groupId: customizations.id ,
            groupName: customizations.name  ,
            id:  selectedCard.id ,
            name: selectedCard.name  ,
            image_url: selectedCard.image_url as string,
            price: selectedCard.price,
            quantity: 1
         }])

  


  }


  console.log(selectedCustomizations.length)
      

  
  return (
    <View className="mt-8 w-[100%]">

            {/* Header */}

      <View className="flex-row items-center justify-between">
        <Text className="font-poppins-semibold text-xl text-white">
          {customizations.name}
        </Text>

        <Text className="font-poppins-medium text-sm text-zinc-500">
          {customizations.required ? "required" : "optional"}
        </Text>
      </View>

      {/* Cards */}

        <View className="flex flex-row no-wrap">
          <FlatList
        horizontal
        data={customizations.customizations}
        keyExtractor={(item) => item?.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
                  <View style={{ width: 12 }} />
                )}
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 8,
          paddingRight: 20,
        }}
        renderItem={({ item, index }) => (
           <>
             
             {customizations.max_selection <=1 ? (<>
               
              <CustomizationCard
            onPress={() => {handleSingleData(item)}}
            customization={item}
            selected = {(selectedCustomizations.find((i) => i?.id === item.id) && true)}
          />
               


             </>) : (<>
             

              <CustomizationCard
            onPress={() => {handledata(item)}}
            customization={item}
            selected = {(selectedCustomizations.find((i) => i?.id === item.id) && true)}
          />
             </>)}
           
           
           </>
        )}
      />
        </View>
          
          
      
    </View>
  );
}