import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ViewCardItem from './ViewCardItem';
import { IDealItems } from '@/interface/ICart';

const ViewDealItems = ({
   menuItems
} : {
   menuItems: IDealItems[]
}) => {


  return (
    <View className='flex h flex-col'>

           <FlatList
              
             data={menuItems}
             contentContainerStyle={{
                 paddingBottom: 120
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