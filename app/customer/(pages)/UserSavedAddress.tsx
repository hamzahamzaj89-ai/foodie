import { View, Text } from 'react-native'
import React from 'react'
import SavedAddresses from '../screens/SaveAddresses'

const UserSavedAddress = () => {
  return (
       <>

       <View className='flex-1 bg-black'>
                 <SavedAddresses bottomActionBar={false}/>
       </View>
       
       </>
  )
}

export default UserSavedAddress