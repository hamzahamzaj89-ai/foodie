import { ICartItem, ICartStore } from "@/interface/ICart";
import { create } from "zustand";






export const useCartStore = create<ICartStore>((set, get) => ({
  items: [],



    getCartItem: (id) => {
    return get().items.find((item) => item.id === id);
  },

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  removeItem: (cartItemId) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.id !== cartItemId
      ),
    })),

  updateQuantity: (cartItemId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === cartItemId
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

        let customizationPrice= 0;


          if (item.type === "menu") {
              const menu = item as ICartItem
              customizationPrice =  menu.customizations?.reduce(
        (sum, option) => sum + option.price,
        0
      ) ?? 0


          }
      return (
        total +
        (item.price + customizationPrice) * item.quantity
      );
    }, 0),
}));