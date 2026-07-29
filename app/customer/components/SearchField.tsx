import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Search } from 'lucide-react-native'

const SearchField = ({onVlaueChange} : {onVlaueChange: (text:string) => void }) => {

    
  return (
     <View className="flex-1 py-[3px] pt-1 flex-row items-center rounded-2xl bg-card   px-4">
        <Search
          size={20}
          color="#a1a1aa"
          strokeWidth={3}
          style={{
            marginBottom : 3
          }}
        />

        <TextInput
          placeholder="Search food..."
          placeholderTextColor="#a1a1aa"
          className="flex-1 ml-2 h-full   align-text-bottom text-white font-poppins-medium text"
          cursorColor="#FF8A2B"
           style={{
    flex: 1,
    height: "100%",
    textAlignVertical: "center",
  }}
        />
      </View>
  )
}

export default SearchField