import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ViewCardItem from './ViewCardItem';
import { IDealAddOns } from '@/interface/IDeal';
import { ICartAddOns, IDealMenuItems } from '@/interface/ICart';

const ViewDealItems = ({
   menuItems
} : {
   menuItems: (IDealMenuItems | ICartAddOns)[]
}) => {


  return (
    <View className='flex '>

           <FlatList
              
             data={menuItems}
             contentContainerStyle={{
                 paddingBottom: 0
             }}
             scrollEnabled= {false}
             showsVerticalScrollIndicator={false}
             keyExtractor={(item) => (item as ICartAddOns).addonId?? (item as IDealMenuItems).menuId}

             renderItem={({item , index}) => (
                <>
                  
                      <ViewCardItem item={item}/>
                    
                </>
            )}

           
           />
       
    
    </View>
  )
}

export default ViewDealItems