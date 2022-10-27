import { SAVE_CATALOG_PRODUCTS } from "./types";

export const saveCatalogProducts = (key: string) => ({
    type: SAVE_CATALOG_PRODUCTS,
    payload: key,
  });