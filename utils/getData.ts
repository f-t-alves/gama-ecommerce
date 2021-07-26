import { clientType, productType, orderType } from "utils/types";
import { presetProducts } from "database/products";

export const getClients = (): clientType[] => {
  if (typeof window !== "undefined") {
    const clients = localStorage.getItem(`@clientList`);
    if (clients) {
      return JSON.parse(clients);
    }
  }
  return [];
};

export const getCart = (): productType[] => {
  if (typeof window !== "undefined") {
    const cartStorage = localStorage.getItem(`@cart`);
    if (cartStorage) {
      return JSON.parse(cartStorage);
    }
  }
  return [];
};

export const getProducts = (): productType[] => {
  if (typeof window !== "undefined") {
    const products = localStorage.getItem(`@productList`);
    if (products) {
      return JSON.parse(products);
    }
  }
  return presetProducts;
};

export const getOrders = (): orderType[] => {
  if (typeof window !== "undefined") {
    const orders = localStorage.getItem(`@orderList`);
    if (orders) {
      return JSON.parse(orders);
    }
  }
  return [];
};
