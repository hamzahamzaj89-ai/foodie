import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ViewCardItem from './ViewCardItem';
import { ICartDealAddons, IDealItems } from '@/interface/ICart';
import { IDealAddOns } from '@/interface/IDeal';

const ViewDealItems = ({
   menuItems
} : {
   menuItems: (IDealItems | ICartDealAddons)[]
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
             keyExtractor={(item) => item.id}

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