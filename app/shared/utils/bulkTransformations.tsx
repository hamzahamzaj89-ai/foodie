import { ICartDeal, ICartItem } from "@/interface/ICart";
import { IOrderPayload } from "@/interface/IOrderPayLoad";

import "react-native-get-random-values";

import { v4 as uuidv4 } from "uuid";

export function prepareOrderPayload(
  cart: (ICartItem | ICartDeal)[],
  restaurantId: string,
): IOrderPayload {
  const orderId = uuidv4();

  const deals: IOrderPayload["deals"] = [];
  const items: IOrderPayload["items"] = [];
  const customizations: IOrderPayload["customizations"] = [];
  const addons: IOrderPayload["addons"] = [];

  for (const cartItem of cart) {
    // ============================================================
    // DEAL
    // ============================================================

    if (cartItem.type === "cartDeal") {
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

          quantity: customization.quantity,
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

  return {
    id: orderId,

    restaurantId: restaurantId,

    deals,

    items,

    customizations,

    addons,

    total: cart.length,
  };
}
