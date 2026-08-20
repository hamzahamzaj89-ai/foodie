import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';
import {
  ThemeProvider,
  DarkTheme,
} from "@react-navigation/native";
import { View } from 'react-native';


export default function RootLayout() {


       
  // Custom theme matching your app's background
const CustomTheme = {
  ...DarkTheme, // or DefaultTheme
  colors: {
    ...DarkTheme.colors,
    background: '#121212', // Change this to your screen background color
  },
};
     



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
