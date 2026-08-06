export const queryKeys = {
  public: {
    restaurants: ["public", "restaurants"] as const,
    restaurant: (id: string) => ["public", "restaurant", id] as const,
    menu: (id: string) => ["public", "food", id] as const,
    categories: ["public", "categories"] as const,
    manus: (id:string) => ["public" , "menus" , id] as const,
    addOns: ["public" , "addOns" ] as const,
    deal: (id : string) => ["public", "deal", id] as const,
    
    deals: (restaurantId : string) => ["public" , "deals" , restaurantId] as const,
    infiniteDeals: (restaurantId : string) => ["public" , "deals" , "infinite", restaurantId] as const

  },

  user: {
    profile: ["user", "profile"] as const,
    orders: ["user", "orders"] as const,
    favorites: ["user", "favorites"] as const,
    addresses: ["user", "addresses"] as const,
  },
};