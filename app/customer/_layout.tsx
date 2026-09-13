import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';

import { View } from 'react-native';


export default function RootLayout() {


       
  // Custom theme matching your app's background

     



  return (

       <>

    <View style={{ flex: 1, backgroundColor: 'black' }}>


           

           
           <Stack screenOptions={{headerShown: false}}>

                    <Stack.Screen  name='(tabs)'/>

                    <Stack.Screen name="(auth)"/>


           </Stack>
  
  
  </View>
  </>

       
  );
}
