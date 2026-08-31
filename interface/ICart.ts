import { UUIDTypes } from "uuid";
import { IDealMenu, IDealMenuItem } from "./IDeal";

export interface ICartCustomization {
  groupId: string;
  groupName: string;
  customizationId: string;
  required?: boolean;
  imageUrl: string;
  title: string;
  quantity: number;
  price?: number;
}

export interface ICartAddOns {
  addonId: string;
  imageUrl: string;
  price?: number;
  title: string;
  included: boolean;
  quantity: number;
}





export interface ICartItem {

  menuId: string;

  title: string;
  type: string;


  
  imageUrl: string | null;

   
  price: number;

  quantity: number;

  customizations: ICartCustomization[] | [];
  addons: ICartAddOns[] | [];
}




export interface IDealMenuItems {
    menuId: string;
    imageUrl: string;
    quantity: number;
    title:string;
    customizations:  ICartCustomization[] | [];
    addons: ICartAddOns[] | [];

}




export interface ICartDeal {

  dealId: string;

  title: string;

  type: "menu" | "deal";

  items: (IDealMenuItems | ICartAddOns)[];
  
  oldPrice: number;

  price: number;
  quantity : number;
  imageUrl: string | null;



  freeDelivery: boolean;
  addons: ICartAddOns[]
  
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


