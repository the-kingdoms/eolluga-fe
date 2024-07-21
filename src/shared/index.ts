export { MOCK_SERVER_URL, BASE_URL } from "./consts/mock";
export { default as TopBar } from "./ui/TopBar";
export { CART_KEY } from "./consts/localStorage";
export { default as getCartData } from "./utils/getCartData";
export type { MenuT } from "./types/cart-types";
export { parseJSON } from "./utils/fetch";
export { default as fetchWithFallback } from "./api/fetchWithFallback";
