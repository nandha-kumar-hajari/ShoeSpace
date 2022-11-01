import { SAVE_CATALOG_PRODUCTS,SAVE_CART_DATA } from "./types";

export const saveCatalogProducts = (key: string) => ({
    type: SAVE_CATALOG_PRODUCTS,
    payload: key,
  });

  export const saveCartData = (key: string) => ({
    type: SAVE_CART_DATA,
    payload: key,
  });