import { clientType, productType, orderType } from "utils/types";
import {presetProducts} from "database/products"

export const getClients = (): clientType[] => {
  const clients = localStorage.getItem(`@clientList`);
  if (clients) {
    return JSON.parse(clients);
  }
  return [];
};

export const getCart = (): productType[] => {
  const cartStorage = localStorage.getItem(`@cart`);
  if (cartStorage) {
    return JSON.parse(cartStorage);
  }
  return [];
};

export const getProducts = (): productType[] => {
  const products = localStorage.getItem(`@productList`);
  if (products) {
    return JSON.parse(products);
  }
  return presetProducts;
}

export const getOrders = (): orderType[] => {
  const orders = localStorage.getItem(`@orderList`);
  if (orders) {
    return JSON.parse(orders);
  }
  return [];
}