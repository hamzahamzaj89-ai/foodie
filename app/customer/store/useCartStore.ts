import { ICartItem } from "@/interface/ICart";
import { create } from "zustand";




interface ICartStore {
  items: ICartItem[];

  addItem: (item: ICartItem) => void;

  removeItem: (cartItemId: string) => void;

  updateQuantity: (
    cartItemId: string,
    quantity: number
  ) => void;

  clearCart: () => void;

  totalItems: () => number;

  subtotal: () => number;
}
export const useCartStore = create<ICartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  removeItem: (cartMenuId) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.menuId !== cartMenuId
      ),
    })),

  updateQuantity: (cartMenuId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.menuId === cartMenuId
          ? { ...item, quantity }
          : item
      ),
    })),

  clearCart: () =>
    set({
      items: [],
    }),

  totalItems: () =>
    get().items.reduce(
      (total, item) => total + item.quantity,
      0
    ),

  subtotal: () =>
    get().items.reduce((total, item) => {
      const customizationPrice = item.customizations.reduce(
        (sum, option) => sum + option.price,
        0
      );

      return (
        total +
        (item.basePrice + customizationPrice) * item.quantity
      );
    }, 0),
}));