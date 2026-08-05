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

  menuId: string;

  title: string;

  imageUrl: string | null;

  basePrice: number;

  quantity: number;

  customizations: ICartCustomization[];
  addOns: ICartAddOns[];
}




export interface ICartStore {
    
  items: ICartItem[];

  addItem: (item: ICartItem) => void;

  removeItem: (cartItemId: string) => void;

  updateQuantity: (cartItemId: string, quantity: number) => void;

  clearCart: () => void;

  totalItems: () => number;

  subtotal: () => number;


}
