import { IAddOns } from "./IAddOns";

export interface IDealDetail {
  id: string;

  restaurant_id: string;

  title: string;

  description: string | null;

  image_url: string | null;

  discount_percentage: number | null;

  fixed_discount: number | null;

  free_delivery: boolean;

  start_date: string;

  end_date: string;

  is_active: boolean;

  created_at?: string;

  updated_at?: string;
  addOns : IDealAddOns[];

  menus : IDealMenu[];
  subtitle: string;


}

export  interface IDealAddOns {
  id: string;
  quantity: number;
  addOns : IAddOns[];

}


export interface IDealCustomizations{
   id:string;
   group_name: string;
   customization_id: string;
   customization_name: string;
   customization_image_url: string;
   customization_price: number;


}



export interface IDealMenu {
  id:string;
  quantity : number
  menu : IDealMenuItem | IDealMenuItem[]
  customizations: IDealCustomizations[]
  
}


export interface IDealMenuItem {
  id: string;

  title: string;

  description: string | null;

  image_url: string | null;

  price: number;
}



