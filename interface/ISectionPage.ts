import { IMenuCard } from "./IMenuCard";

export interface ISection {
  id: string;
  imageUrl: string | null;
  title: string;
  description: string;
}




export interface ISectionMenus {
    id:string;
    menu: IMenuCard;
}