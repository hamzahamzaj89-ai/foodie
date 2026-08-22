import { supabase } from "@/app/lib/supabase";
import { IAddress } from "@/interface/IAddress";

export async function getUserAddresses() {
  const { data, error } = await supabase.rpc(
    "get_user_addresses"
  );

  if (error) {
    console.error("Failed to fetch addresses:", error);
    throw error;
  }

  return data as IAddress[] ?? [];


}






export async function createAddress() {
  const { data, error } = await supabase.rpc(
    "get_user_addresses"
  );

  if (error) {
    console.error("Failed to fetch addresses:", error);
    throw error;
  }

  return data as IAddress[] ?? [];


}




export async function insertAddress(data: IAddress) {
  const {
    data: address,
    error,
  } = await supabase
    .from("addresses")
    .insert({
        type: data.type,
        user_id: data.user_id,

        city : data.city,
        address: data.address,
        phone_number: data.phone_number,
        name: data.name,
        special_instruction: data.special_instruction

    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  

  return address as  IAddress;

  
}