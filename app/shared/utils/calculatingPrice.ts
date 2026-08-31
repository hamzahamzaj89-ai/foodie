import { IAddOns } from "@/interface/IAddOns";
import { ICartDeal, ICartItem } from "@/interface/ICart";
import { IDealAddOns, IDealMenu, IDealMenuItem } from "@/interface/IDeal";
import { ICustomizationOption } from "@/interface/IMenu";
import { IOrderDeal, IOrderMenuItem } from "@/interface/IOrder";

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



  
      const addonsTotal = item.addons?.reduce((sum, crr) => {
         return sum + ((crr.price??0) * crr.quantity);
}, 0)?? 0

         


       const customizationsTotal = (item as ICartItem).customizations?.reduce((sum, crr) => {
           if (!crr.required) {
        return sum + ((crr.price??0) * crr.quantity)
            };
            return sum
}, 0)?? 0


   const requiredCustomizations = (item as ICartItem).customizations?.reduce((sum, crr) => {
            if (crr.required) {
        return sum + ((crr.price??0) * crr.quantity)
            };
            return sum
}, 0)?? 0
      
      



       return (addonsTotal + customizationsTotal + ((item.price + requiredCustomizations) * item.quantity))


}








export const calculatePreviewTotals = (item: (ICartItem | ICartDeal)[]) => {




       
  
      const addonsTotal = item.reduce((sum , crr) => {
                 return sum +  crr.addons.reduce((sum:number, crr) => {
         return sum + ((crr.price??0) * crr.quantity);
}, 0)
      } , 0) 




    const menuTotal = item.reduce((sum , crr) => {

              
          if (crr.type === "menu") {
              const customizationsTotal = (crr as ICartItem).customizations?.reduce((sum, crr) => {
           if (!crr.required) {
        return sum + ((crr.price??0) * crr.quantity)
            };
            return sum
}, 0)?? 0




       const requiredCustomizations = (crr as ICartItem).customizations?.reduce((sum, crr) => {
            if (crr.required) {
        return sum + ((crr.price??0) * crr.quantity)
            };
            return sum
}, 0)?? 0




                 return sum + (customizationsTotal + ((crr.price + requiredCustomizations) * crr.quantity))

         

          }
          return sum
             
      } , 0) 


        const dealTotal = item.reduce((sum , crr) => {

              
          if (crr.type === "deal") {
          




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
   

    




      
      



export const calculateOrderDetailTotal = ({
       menus,
       deals
}:{
       menus: IOrderMenuItem[]
       deals:IOrderDeal[]
}) => {



     

       
  
      const menuAddonsTotal = menus.reduce((sum , crr) => {
                 return crr.addons?.reduce((sum:number, crr:any) => {
         return sum + (crr.price * crr.quantity);
}, 0)?? 0
      } , 0) 

       const dealAddonsTotal = deals.reduce((sum , crr) => {
               
                 return crr.addons?.reduce((sum:number, crr) => {

                     if (crr.included) {
                            return sum
                     }


         return sum + (crr.price * crr.quantity);
}, 0)?? 0
      } , 0) 




    const menuTotal = menus.reduce((sum , crr) => {

              
        const customizationsTotal = (crr).customizations?.reduce((sum, crr) => {
            if (!crr.required) {
        return sum + (crr.price * crr.quantity)
            };
            return sum
}, 0)?? 0



       const requiredCustomizations = (crr).customizations?.reduce((sum, crr) => {
            if (crr.required) {
        return sum + (crr.price * crr.quantity)
            };
            return sum
}, 0)?? 0




                 return sum + (customizationsTotal + ((crr.price + requiredCustomizations) * crr.quantity))

         

          
       
             
      } , 0) ??0


        const dealTotal = deals.reduce((sum , crr) => {

              
          




             return sum + (crr.price * crr.quantity)

         

       
          return sum
             
      } , 0) 


      return {
       menuAddonsTotal,
       dealAddonsTotal,
       dealTotal,
       menuTotal
      }



}
   











