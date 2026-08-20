// hooks/useInitializeApp.ts

import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";

import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { supabase } from "@/app/lib/supabase";
import { useAppStore } from "@/app/shared/store/useAppStore";
import { Session } from "@supabase/supabase-js";

SplashScreen.preventAutoHideAsync();

export function useInitializeApp() {
  const setSession = useAppStore((state) => state.setSession);
  const setInitialized = useAppStore((state) => state.setIsinitialized);
  const isInitialized = useAppStore((state) => state.isInitialized)
  const setLoading = useAppStore((state) => state.setLoading)
  const setError = useAppStore((state) => state.setError)
  const setAppState = useAppStore(
    (state) => state.setAppState
  );

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });


  //functions


  async function loadSession() {

    setLoading(true)

    const {
      data: { session },
    } = await supabase.auth.getSession();



    setSession(session as Session);

    setLoading(false)


  }


  async function loadAppState() {
    const value = await AsyncStorage.getItem("appState");

    if (!value) {

             
        setAppState({
              isOnBoarding: false,
               role: null
        })
          

    } 


  }


  function subscribeToAuth() {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session as Session);
    });

    return subscription;


  }





  useEffect(() => {


    // Wait until fonts are loaded before continuing.
    if (!fontsLoaded) return;

    let subscription:  | {  unsubscribe: () => void; } | undefined;

    async function initialize() {
      try {
        await Promise.all([
          loadSession(),
          loadAppState(),
        ]);

        subscription = subscribeToAuth();
      } catch (error) {
        console.error(error);
      } finally {
        setInitialized(true);
        await SplashScreen.hideAsync();
      }
    }



    initialize();


    return () => {
      subscription?.unsubscribe();
    };



  }, [fontsLoaded]);
}