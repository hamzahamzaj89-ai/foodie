import { IDealMenu, IDealMenuItem } from "@/interface/IDeal";

export const calculateDealPrice = (menus: IDealMenu[] | undefined) => {

        console.log(menus)

      const total = menus?.reduce((sum, crr) => {
         return sum + ((crr?.menu as IDealMenuItem).price * crr.quantity);
}, 0)?? 0

       return total 


}