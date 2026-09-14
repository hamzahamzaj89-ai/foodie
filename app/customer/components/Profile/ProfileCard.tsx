import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Button from '@/app/shared/components/Button'
import { Edit } from 'lucide-react-native'

const ProfileCard = ({
       name,
       email
}:{
      name: string,
      email:string
}) => {





  return (
      <View className="mt-8 items-center rounded-2xl  bg-card px-6 py-8">


          <Image
            source={require("@/assets/images/Profile.png")}
            className="h-28 w-28 rounded-full"
          />

          <Text className="mt-5 text-2xl font-poppins-bold text-white">
            {name}
          </Text>

          <Text className="mt-1 text-sm font-poppins-medium text-zinc-400">

            {email}
          </Text>

              <View className='w-[50%] mt-4'>
                 <Button
          text={"Edit Profile"}
          onPress={() => {}}
          Icon={Edit}
          right
          />

              </View>


        </View>
  )
}

export default ProfileCard