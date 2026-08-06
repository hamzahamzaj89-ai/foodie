export interface ICartCustomization {
  groupId: string;
  groupName: string;
  id: string;

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
  type: string;


  imageUrl: string | null;


  price: number;

  quantity: number;

  customizations: ICartCustomization[];
  addOns: ICartAddOns[];


}



export interface ICartDeal {

  id: string;

  title: string;

  type: string
  items: string[];

  oldPrice: number;

  price: number;
  quantity : number;

  discount: number;

  freeDelivery: boolean;
  
}




export interface ICartStore {

  items: (ICartItem |ICartDeal)[];

  addItem: (item: ICartItem | ICartDeal) => void;

  removeItem: (cartItemId: string) => void;
  getCartItem: (id: string) => (ICartItem | ICartDeal) | undefined;


  updateQuantity: (cartItemId: string, quantity: number) => void;

  clearCart: () => void;

  totalItems: () => number;

  subtotal: () => number;


}
