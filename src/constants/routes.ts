export const ROUTE = {
  NOT_FOUND: "*",
  HOME: "/home",
  ALL_PRODUCTS: "/all-products",
  PRODUCT_DETAILS: (prodctId: string) => `product-details/${prodctId}`,
  CART: "/cart",
  ABOUT: "/about",
  ACCOUNTS: "/accounts",
  ORDERS: "/orders",
  ORDER_DETAILS: (orderId: string) => `orders/${orderId}`,
};