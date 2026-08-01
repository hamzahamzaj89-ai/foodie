import { View, Text, Image } from 'react-native'
import React from 'react'

const ViewCardItem = ({item}:any) => {
  return (

    <View className='bg-card flex rounded-3xl flex-row justify-between items-center  px-0 py-2 '>
            <View className='flex flex-row gap-x-4  justify-center items-center'>
                 <View className="h-10 w-10 relative items-center justify-center rounded-2xl ">
               <Image
                 source={require("@/assets/images/burger.png")}
                 resizeMode="contain"
                 className="h-12 w-15  "
               />





             </View>



             <View>
                <Text className="font-poppins-semibold ml-2 text text-white ">
                      {item.name}
                </Text>
             </View>
            </View>



      


        <View>
              <Text className='text-buttonBackground font-poppins-medium'>
                x 2
              </Text>
        </View>
    </View>
  )
}

export default ViewCardItem