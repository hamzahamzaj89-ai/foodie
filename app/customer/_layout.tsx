import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';



export default function RootLayout() {



  




  return (



      <Stack screenOptions={{
         contentStyle: {
      backgroundColor: "#000",
    }
      }}>

          <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
          <Stack.Screen name="(pages)" options={{headerShown: false}}/>


      </Stack>



       
  );
}
