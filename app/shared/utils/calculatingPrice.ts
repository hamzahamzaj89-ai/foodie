import { IAddOns } from "@/interface/IAddOns";
import { IDealAddOns, IDealMenu, IDealMenuItem } from "@/interface/IDeal";
import { ICustomizationOption } from "@/interface/IMenu";

export const calculateDealPrice = (menus: IDealMenu[] | undefined) => {

        console.log(menus)

      const total = menus?.reduce((sum, crr) => {
         return sum + ((crr?.menu as IDealMenuItem).price * crr.quantity);
}, 0)?? 0

       return total 



}




export const calculateDealAddOnsPrice = (addOns: IDealAddOns[] | undefined) => {



      const total = addOns?.reduce((sum, crr) => {
         return sum + ((crr?.addOns as IAddOns).price * crr.quantity);
}, 0)?? 0

       return total 

}





export const calculateDealMenuCustomizationsPrice = (menus: IDealMenu[] | undefined) => {



      const total = menus?.reduce((sum, crr:IDealMenu) => {
             return sum +  crr.customizations.reduce((sum, crr) => {
                     return   (crr.customization as ICustomizationOption).price  + sum
             } , 0)
}, 0)?? 0

       return total 

}


