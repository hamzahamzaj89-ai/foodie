  import { View, Text } from 'react-native'
  import React, { useEffect } from 'react'
import { useAppStore } from './shared/store/useAppStore'
import { Redirect, SplashScreen } from 'expo-router'
  
  const index =  () => {


    const appStore = useAppStore()



      console.log(appStore)


        if (!appStore.isInitialized) {
             return null
        }
    


      if (!appStore.appState?.isOnBoarding) {
          console.log("its")
          return <Redirect href={"/onBoarding/StartScreen"}/>
             
       }

    


           return  <Redirect href={"/customer"}/>
  


  }
  
  export default index