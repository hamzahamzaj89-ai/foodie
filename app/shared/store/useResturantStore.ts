// store/restaurant.store.ts

import { create } from "zustand";
import  IRestaurant  from "@/interface/IResturant";

interface RestaurantStore {
  selectedRestaurant: IRestaurant | null;



  setSelectedRestaurant: (restaurant: IRestaurant | null) => void;


 
}

export const useResturantStore = create<RestaurantStore>((set) => ({
  selectedRestaurant: null,



  setSelectedRestaurant: (restaurant) =>
    set({
      selectedRestaurant: restaurant,
    }),

 
}));