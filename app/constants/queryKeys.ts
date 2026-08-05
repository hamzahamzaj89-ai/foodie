export const queryKeys = {
  public: {
    restaurants: ["public", "restaurants"] as const,
    restaurant: (id: string) => ["public", "restaurant", id] as const,
    menu: (id: string) => ["public", "food", id] as const,
    categories: ["public", "categories"] as const,
    manus: (id:string) => ["public" , "menus" , id] as const,

    deals: (infinite : boolean) => ["public" , "deals" , infinite && "infinite"] as const
  },

  user: {
    profile: ["user", "profile"] as const,
    orders: ["user", "orders"] as const,
    favorites: ["user", "favorites"] as const,
    addresses: ["user", "addresses"] as const,
  },
};