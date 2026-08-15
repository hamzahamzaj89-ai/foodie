import { View, Text, Image } from 'react-native'
import React from 'react'
import { ICartItem } from '@/interface/ICart'

const ViewCardItem = ({item}:{
  item: ICartItem
}) => {
  return (

    <View className=' flex rounded-3xl flex-row justify-between items-center  px-2 py-2 '>
            <View className='flex flex-row gap-x-4  justify-center items-center'>
                 <View className="h-10 w-10 relative items-center justify-center rounded-2xl ">
               <Image
                 source={{
                  uri: item.imageUrl ?? ""
                 }}
                 resizeMode="contain"
                 className="h-12 w-15  "
               />





             </View>



             <View>
                <Text className="font-poppins-semibold ml-2 text text-white ">
                      {item.title}
                </Text>
             </View>
            </View>



      


        <View>
              <Text className='text-white font-poppins-medium'>
                x {item.quantity}
              </Text>
        </View>
    </View>
  )
}

export default ViewCardItem