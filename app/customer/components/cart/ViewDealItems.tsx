import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ViewCardItem from './ViewCardItem';

const ViewDealItems = () => {

    const dealItems = [
  {
    id: "1",
    name: "Cheese Burger",
    quantity: 2,
    image: require("@/assets/images/burger.png"),
  },
  {
    id: "2",
    name: "French Fries",
    quantity: 2,
    image: require("@/assets/images/burger.png"),
  },
  {
    id: "3",
    name: "Coca-Cola",
    quantity: 2,
    image: require("@/assets/images/burger.png"),
  },
  {
    id: "4",
    name: "Pepperoni Pizza",
    quantity: 1,
    image: require("@/assets/images/burger.png"),
  },
];

  return (
    <View className='flex h flex-col'>

           <FlatList
              
             data={dealItems}
             contentContainerStyle={{
                 paddingBottom: 120
             }}
             scrollEnabled= {false}
             showsVerticalScrollIndicator={false}

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