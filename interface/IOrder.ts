import { OrderStatus } from "@/app/shared/utils/getOrderStatus";

export interface IOrderCard {
  id: string;
  imageUrl: string;
  name: string;
  itemsLength: number;
  status: string;
  total: number;
  createdAt: string;
  dealIncluded: boolean;
}

export interface IOrderAddon {
  id: string;
  addonId : string;

  quantity: number;
  imageUrl: string;
  title: string;
  included: boolean;
  price: number;
}

export interface IOrderCustomization {
  id: string;
  customizationId : string;
  groupName: string;
  required: boolean;

  groupId: string;
  included: boolean;
  quantity: number;
  imageUrl: string;
  title: string;
  price: number;
}

export interface IOrderMenuItem {
  id: string;
  quantity: number;
  imageUrl: string;
  title: string;
  price: number;

  menuId: string;

  addons: IOrderAddon[];
  customizations: IOrderCustomization[];
}

export interface IOrderDeal {
  id: string;
  dealId: string;

  quantity: number;
  imageUrl: string;
  title: string;
  price: number;
  oldPrice: number;

  freeDelivery: boolean;


  items: IOrderMenuItem[];
  addons: IOrderAddon[];
}

export interface IOrder {

  id: string;
  status: OrderStatus;
  restaurantId: string;
  specialInstruction: string;
  userName: string;
  firstOrderImage: string;
  firstOrderName: string;
  orderItemsLength: number;
  orderNumber: number;
  addressType: "work" | "home" | "other"
  dealIncluded: boolean;

  city: string;
  address: string;
  subTotal: number;
  deliveryFee: number;
  phoneNumber: string;

  total: number;

  orderMenuItems: IOrderMenuItem[];
  orderDeals: IOrderDeal[];
}
