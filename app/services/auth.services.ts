import * as Linking from "expo-linking";
import { supabase } from "@/app/lib/supabase";

type SignUpProps = {
  email: string;
  password: string;
  fullName: string;
};

export async function signUp({
  email,
  password,
  fullName,
  
}: SignUpProps) {
  const redirectUrl = Linking.createURL("callback");
   

  console.log(redirectUrl)

  const { data, error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        full_name: fullName,
        
      },

      emailRedirectTo: redirectUrl,
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

type SignInProps = {
  email: string;
  password: string;
};

export async function signIn({
  email,
  password,
}: SignInProps) {
  const {  error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    throw error;
  }



}



export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}