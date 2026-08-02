import { Slot, Stack } from 'expo-router';
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useActionState, useEffect } from 'react';
import { useInitializeApp } from './shared/hooks/useInitializeApp';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/lib/QueryClient";

import * as NavigationBar from "expo-navigation-bar";


export default function RootLayout() {




   useInitializeApp()



   useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);




  return (


      <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>


      <Stack screenOptions={{headerShown: false}}/>



    </SafeAreaProvider>


    </QueryClientProvider>
       
  );
}
