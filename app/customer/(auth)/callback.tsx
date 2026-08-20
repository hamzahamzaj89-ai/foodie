import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { supabase } from "@/app/lib/supabase";
import Loader from "../../shared/components/Loader";
import * as Linking from "expo-linking";


export default function Callback() {
  const { code } = useLocalSearchParams<{ code?: string }>();
  const [loading , setloading] = useState(false)
   const params = useLocalSearchParams();

  

    console.log(params);
      

useEffect(() => {
    const handleCallback = async () => {
      const url = await Linking.getInitialURL();

      if (!url) {
        return;
      }

      const parsed = Linking.parse(url);

      const code = params.code;

      if (typeof code !== "string") {
        console.log("No authorization code found");
        return;
      }

      const { data, error } =
        await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Session exchange failed:", error);
        return;
      }

        router.back()
    };

    handleCallback();
  }, []);

  if (loading) {
     
   return (

    <>
       <Loader visible={loading} text="Verifying  Code"/>
    
    
    
    </>

   )

  }



  return null;



}