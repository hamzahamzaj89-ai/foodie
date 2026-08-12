export interface IDealDetail {
  id: string;

  restaurant_id: string;

  title: string;

  description: string | null;

  image_url: string | null;

  discount_percentage: number | null;

  fixed_discount: number | null;

  free_delivery: boolean;

  start_date: string;

  end_date: string;

  is_active: boolean;

  created_at?: string;

  updated_at?: string;

  menus : IDealMenu[];
  subtitle: string;


}
export interface IDealMenu {
  quantity : number
  menu : IDealMenuItem | IDealMenuItem[]
  
}


export interface IDealMenuItem {
  id: string;

  title: string;

  description: string | null;

  image_url: string | null;

  price: number;
}



