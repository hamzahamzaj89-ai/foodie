import { View, Text } from 'react-native'
import React from 'react'
import Loader from '@/app/shared/components/Loader'
import StatusScreen from '../screens/StatusScreen'

const ExploreLoader = ({isPending} : {isPending:boolean}) => {
  return (
     <>
              {isPending ? (
                <>
                  <View className="flex-1 justify-center items-center h-[180px]">
                    <Loader />
                  </View>
                </>
              ) : (
                <StatusScreen
                  type="error"
                  message="Not Found"
                  title="404 error"
                />
              )}
            </>
  )
}

export default ExploreLoader