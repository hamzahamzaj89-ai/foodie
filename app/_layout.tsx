import { Slot, Stack } from 'expo-router';
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useActionState, useEffect } from 'react';
import { useInitializeApp } from './shared/hooks/useInitializeApp';
import { QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/app/config/toastConfig";


import { queryClient } from "@/app/lib/QueryClient";

import * as NavigationBar from "expo-navigation-bar";
import AuthGuard from './shared/guard/AuthGuard';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';


export default function RootLayout() {




   useInitializeApp()



   useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);





  // Custom theme matching your app's background
const CustomTheme = {
  ...DarkTheme, // or DefaultTheme
  colors: {
    ...DarkTheme.colors,
    background: '#121212', // Change this to your screen background color
  },
};

  return (


      <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
         <AuthGuard/>
         <ThemeProvider value={CustomTheme}>

      <Slot screenOptions={{headerShown: false}}/>

        
        </ThemeProvider>

       <Toast config={toastConfig}/>

    </SafeAreaProvider>


    </QueryClientProvider>
       
  );
}
