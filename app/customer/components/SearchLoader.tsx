import { View, Text } from 'react-native'
import React from 'react'
import Loader from '@/app/shared/components/Loader'
import StatusScreen from '../screens/StatusScreen'

const SearchLoader = ({isPending} : {isPending:boolean}) => {
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
                  message="Search Food Item is not found"
                  title="404 error"
                />
              )}
            </>
  )
}

export default SearchLoader