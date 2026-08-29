import { UUIDTypes } from "uuid";
import { IDealMenu, IDealMenuItem } from "./IDeal";

export interface ICartCustomization {
  groupId: string;
  groupName: string;
  id: string;
  required?: boolean;
  image_url: string;
  name: string;
  quantity: number;
  price: number;
}

export interface ICartAddOns {
  id: string;
  image_url: string;
  price: number;
  name: string;
  quantity: number;
}





export interface ICartItem {

  id: string;

  title: string;
  type?: string;


  
  imageUrl: string | null;

   
  price: number;

  quantity: number;

  customizations: ICartCustomization[];
  addOns: ICartAddOns[] | [];
}


export interface IDealItems extends ICartItem {  
}



export interface ICartDealAddons {
  id:string;
  
   title: string;
   quantity : number;
   imageUrl : string;


}

export interface ICartDeal {

  id: string;

  title: string;

  type: "cartMenu" | "cartDeal";

  items: (IDealItems | ICartDealAddons)[];
  
  oldPrice: number;

  price: number;
  quantity : number;
  imageUrl: string | null;


  discount: number;

  freeDelivery: boolean;
  addOns: ICartAddOns[]
  
}




export interface ICartStore {

  items: (ICartItem |ICartDeal)[] ;

  addItem: (item: ICartItem | ICartDeal) => void;

  removeItem: (cartItemId: string) => void;
  getCartItem: (id: string) => (ICartItem | ICartDeal) | undefined;


  updateQuantity: (cartItemId: string, quantity: number) => void;
  updateItem: (cartItem: ICartDeal | ICartItem) => void;

  clearCart: () => void;

  totalItems: () => number;

  subtotal: () => number;


}


