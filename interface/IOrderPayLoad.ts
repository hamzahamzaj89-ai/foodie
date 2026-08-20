import { v4 as uuidv4 } from "uuid";

export interface IOrderPayload {
  id: string;

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
  }[];

  addons: {
    id: string;
    orderItemId: string | null;
    orderDealId: string | null;

    addonId: string;
    quantity: number;
    included: false;

  }[];
}