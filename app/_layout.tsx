import { Slot, Stack } from 'expo-router';
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useActionState, useEffect } from 'react';
import { useInitializeApp } from './shared/hooks/useInitializeApp';

import * as NavigationBar from "expo-navigation-bar";


export default function RootLayout() {




   useInitializeApp()



   useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);




  return (

    <SafeAreaProvider>


      <Slot screenOptions={{headerShown: false}}/>



    </SafeAreaProvider>
       
  );
}
