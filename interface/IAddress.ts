export interface IAddress {
  id?: string;
  user_id: string;
  name: string;
  phone_number: string;
  type: "home" | "work" | "other";
  city: string;
  address: string;
  special_instruction: string | null;
  created_at?: string;
  updated_at?: string;
}