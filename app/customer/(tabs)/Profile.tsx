import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
     <>
              <View className="flex-1 bg-black">
                <SafeAreaView className="flex-1 ">
                  <View>
                    <Text className="font-poppins text-white">Profil</Text>
                  </View>
                </SafeAreaView>
              </View>
            </>
  )
}

export default Profile