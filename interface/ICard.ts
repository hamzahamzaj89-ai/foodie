
export interface ICardAddons {

  addonId: string;
  title: string;
  quantity: string;
  included: boolean;
  price?: number;

  imageUrl: string;
}


export interface ICardCustomizations{
      customizationId: string;
      title: string;
      price: number;

      quantity: number;
      required: boolean;
      groupName: string;
      groupId: string;
      imageUrl: string;



}


export interface ICardItems {

  imageUrl: string;

  title: string;
  quantity : number;
  price?: number;
  
  menuId: string;
  customizations: ICardCustomizations[];
  addons : ICardAddons[];
}



export interface IDealCardProps {
      title : string;
      dealId: string;
      imageUrl: string;
      items : ICardItems[];
      oldPrice: number;
      price: number;
      quantity: number;


      discount: number;
      addons: ICardAddons[];


}
