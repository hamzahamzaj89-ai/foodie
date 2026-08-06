import { IDealMenu } from "@/interface/IDeal";

export const calculateDealPrice = (menus: IDealMenu[] | undefined) => {



      const total = menus?.reduce((sum, crr) => {
         return sum + (crr.menuItem[0].price * crr.quantity);
}, 0)?? 0

       return total 


}