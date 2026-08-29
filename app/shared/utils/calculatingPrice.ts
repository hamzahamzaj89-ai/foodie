import { IAddOns } from "@/interface/IAddOns";
import { ICartDeal, ICartItem } from "@/interface/ICart";
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






export const calculateItemTotalPrice = (item: ICartItem | ICartDeal) => {



  
      const addonsTotal = item.addOns?.reduce((sum, crr) => {
         return sum + (crr.price * crr.quantity);
}, 0)?? 0

         


       const customizationsTotal = (item as ICartItem).customizations?.reduce((sum, crr) => {
           if (!crr.required) {
        return sum + (crr.price * crr.quantity)
            };
            return sum
}, 0)?? 0


   const requiredCustomizations = (item as ICartItem).customizations?.reduce((sum, crr) => {
            if (crr.required) {
        return sum + (crr.price * crr.quantity)
            };
            return sum
}, 0)?? 0
      
      



       return (addonsTotal + customizationsTotal + ((item.price + requiredCustomizations) * item.quantity))


}








export const calculatePreviewTotals = (item: (ICartItem | ICartDeal)[]) => {



  
      const addonsTotal = item.reduce((sum , crr) => {
                 return crr.addOns?.reduce((sum, crr) => {
         return sum + (crr.price * crr.quantity);
}, 0)?? 0
      } , 0) 




    const menuTotal = item.reduce((sum , crr) => {

              
          if (crr.type === "cartMenu") {
              const customizationsTotal = (crr as ICartItem).customizations?.reduce((sum, crr) => {
           if (!crr.required) {
        return sum + (crr.price * crr.quantity)
            };
            return sum
}, 0)?? 0




       const requiredCustomizations = (crr as ICartItem).customizations?.reduce((sum, crr) => {
            if (crr.required) {
        return sum + (crr.price * crr.quantity)
            };
            return sum
}, 0)?? 0




                 return sum + (customizationsTotal + ((crr.price + requiredCustomizations) * crr.quantity))

         

          }
          return sum
             
      } , 0) 


        const dealTotal = item.reduce((sum , crr) => {

              
          if (crr.type === "cartDeal") {
          




             return sum + (crr.price * crr.quantity)

         

          }
          return sum
             
      } , 0) 


      return {
       addonsTotal,
       dealTotal,
       menuTotal
      }



}
   

    




      
      











