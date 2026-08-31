import { View, Text, Image } from 'react-native'
import React from 'react'
import { IDealAddOns, IDealMenuItem } from '@/interface/IDeal'
import { ICartAddOns, IDealMenuItems } from '@/interface/ICart'

const ViewCardItem = ({item}:{
  item: IDealMenuItems | ICartAddOns
}) => {


  return (

    <View className=' flex rounded-3xl flex-row justify-between items-center  px-2 pl-0 py-2 '>
            <View className='flex flex-row gap-x-2  justify-center items-center'>
                 <View className="h-16 w-16   items-center justify-center rounded-2xl ">
               <Image
                 source={{
                  uri: item.imageUrl
                 }}
                 resizeMode="contain"
                 className="h-16 w-16  "
               />





             </View>



             <View>
                <Text className="font-poppins-semibold ml-0 text text-white ">
                      {item.title}
                </Text>
             </View>
            </View>



      


        <View className='p-2 px-3  rounded-full'>
              <Text className='text-buttonBackground font-poppins-semibold'>
                x {item.quantity}
              </Text>
        </View>
    </View>
  )
}

export default ViewCardItem