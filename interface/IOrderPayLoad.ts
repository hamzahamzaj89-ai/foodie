import { v4 as uuidv4 } from "uuid";

export interface IOrderPayload {
  id: string;
  firstOrderImage: string;
  firstOrderName : string;
  

  restaurantId: string;
  total: number;


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
    groupId: string;

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