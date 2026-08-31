import { v4 as uuidv4 } from "uuid";

export interface IOrderPayload {
  id: string;
  firstOrderImage: string;
  firstOrderName : string;
  
  subTotal: number;
  deliveryFee: number;
  orderNumber:string;
  dealIncluded: boolean;
  

  restaurantId: string;
  total: number; // Number of the order items


  deals: {
    id: string;
    dealId: string;
    quantity: number;
  }[];

  items: {
    id: string;
    menuId: string;
    orderDealId: string | null;
    quantity: number;
  }[];

  customizations: {
    id: string;
    orderItemId: string;
    customizationId: string;
    quantity: number;
    groupName: string;
    required: boolean;
    
    groupId: string;
    included: boolean;
    

  }[];

  addons: {
    id: string;
    orderItemId: string | null;
    orderDealId: string | null;

    addonId: string;
    quantity: number;
    included: boolean;

  }[];

  address: {
      city: string;
      address: string;
      name: string;
      phoneNumber: string;
      specialInstruction: string;


  }
}