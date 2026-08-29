import { IAddress } from "@/interface/IAddress";
import { ICartDeal, ICartItem } from "@/interface/ICart";
import { IOrderPayload } from "@/interface/IOrderPayLoad";

import "react-native-get-random-values";

import { v4 as uuidv4 } from "uuid";

export function prepareOrderPayload(
  cart: (ICartItem | ICartDeal)[],
  address: IAddress,
  subTotal: number,
  deliveryFee:number,
  restaurantId: string,
) {
  const orderId = uuidv4();

  let firstDealImage = "";
  let firstDealName = "";

  let firstOrderImage = "";
  let firstOrderName = "";

  const orderAddress = {
    city: address.city,
    address: address.address,
    phoneNumber: address.phone_number,
    specialInstruction: address.special_instruction as string,
    name: address.name,
  };



  const deals: IOrderPayload["deals"] = [];
  const items: IOrderPayload["items"] = [];
  const customizations: IOrderPayload["customizations"] = [];
  const addons: IOrderPayload["addons"] = [];





  //generating order number
  const orderNumber = generateOrderNumber();

 // bulk transforming

  for (const cartItem of cart) {
    // ============================================================
    // DEAL
    // ============================================================

    if (cartItem.type === "cartDeal") {
      if (firstDealImage === "" && firstDealName === "") {
        firstDealImage = cartItem.imageUrl as string;
        firstDealName = cartItem.title as string;
      }

      const orderDealId = uuidv4();

      const deal = cartItem as ICartDeal;

      deals.push({
        id: orderDealId,
        dealId: deal.id,
        quantity: deal.quantity,
      });

      // ----------------------------------------------------------
      // Addons belonging directly to the deal
      // ----------------------------------------------------------

      for (const addon of deal.addOns) {
        addons.push({
          id: uuidv4(),

          // You need a place for deal-level addons.
          // Don't attach these to a menu item unless they
          // actually belong to a menu item.
          orderDealId: orderDealId,
          orderItemId: null,

          included: false, //determine whether addon belong to the deal

          addonId: addon.id,

          quantity: addon.quantity,
        });
      }
    }

    // ============================================================
    // NORMAL MENU ITEM
    // ============================================================
    else {
      
      const menuItem = cartItem as ICartItem;

      if (firstOrderImage === "" || firstOrderName === "") {
        firstOrderImage = menuItem.imageUrl as string;
        firstOrderName = menuItem.title as string;
      }

      const orderItemId = uuidv4();

      items.push({
        id: orderItemId,

        menuId: menuItem.id,

        orderDealId: null,

        quantity: menuItem.quantity,
      });

      // ----------------------------------------------------------
      // Customizations
      // ----------------------------------------------------------

      for (const customization of menuItem.customizations) {
        customizations.push({
          id: uuidv4(),

          orderItemId: orderItemId,

          customizationId: customization.id,
          included: false,

          quantity: customization.quantity,
          groupName: customization.groupName,
          groupId: customization.groupId,
        });
      }

      // ----------------------------------------------------------
      // Addons
      // ----------------------------------------------------------

      for (const addon of menuItem.addOns) {
        addons.push({
          id: uuidv4(),

          orderDealId: null,

          orderItemId: orderItemId,

          addonId: addon.id,
          included: false,

          quantity: addon.quantity,
        });
      }
    }
  }

  if (deals.length > 0) {
    firstOrderImage = firstDealImage;
    firstOrderName = firstDealName;
  }


  console.log(subTotal , deliveryFee)

  return {
    id: orderId,
    firstOrderImage,
    firstOrderName,

    restaurantId: restaurantId,

    deals,

    items,

    customizations,

    addons,

    orderNumber,

    address: orderAddress,

    subTotal,
    deliveryFee,

    dealIncluded: deals.length > 0,
    total: cart.length,
  };
}





export function generateOrderNumber(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }

  return `BK-${code}`;
}