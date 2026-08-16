import { View, Text } from 'react-native'
import React from 'react'
import { useAppStore } from '@/app/shared/store/useAppStore'
import SavedAddresses from '../screens/SaveAddresses'
import AddressInfoPage from '../screens/AddressInfoScreen'
  
  const AddressPage = () => {


    const session = useAppStore((state) => state.session)


    return (
        <>
        
        
           {
            session ? (<>

                <SavedAddresses/>

            </>) : (<>
            
                <AddressInfoPage/>
            
            </>)
           }
        
        </>
    )
  }
  
  export default AddressPage