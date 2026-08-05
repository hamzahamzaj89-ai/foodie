

export interface ICustomizationOption {
  id: string;

  name: string;

  description: string | null;

  image_url: string | null;

  price: number;
}


export interface ICustomizationGroup {
  id: string;

  name: string;

  description: string | null;

  required: boolean;

  min_selection: number;

  max_selection: number;

  customizations: ICustomizationOption[];
}



export interface IMenuCustomizationGroup {
  display_order: number;

  customization_group: ICustomizationGroup[];
}



export interface IMenuItem {
  id: string;

  title: string;

  description: string | null;

  old_price: number | null;

  average_rating: number;

  reviews_count: number;
  calories: number,

  price: number;

  image_url: string | null;

  menu_customization_group: IMenuCustomizationGroup[];
}