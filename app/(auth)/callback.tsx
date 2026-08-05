import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { supabase } from "@/app/lib/supabase";
import Loader from "../shared/components/Loader";
import * as Linking from "expo-linking";


export default function Callback() {
  const { code } = useLocalSearchParams<{ code?: string }>();
  const [loading , setloading] = useState(false)
   const params = useLocalSearchParams();

  

    console.log(params);
      


  useEffect(() => {
    async function verify() {
  
               const url = await Linking.getInitialURL();

    console.log("Full URL:", url);
    }

    verify();
  }, [code]);



  if (loading) {
     
   return (

    <>
       <Loader visible={loading} text="Verifying  Code"/>
    
    
    
    </>

   )

  }



  return null;



}