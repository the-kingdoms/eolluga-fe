"use server";

import { CartItemsT, SERVICE_URL } from "@/shared";

const orderMenus = async (
  cartItems: CartItemsT,
  storeId: string,
  tableId: string,
) => {
  try {
    const filteredCartItems = cartItems.map(
      ({ name, count, price, options }) => ({
        name,
        count,
        price,
        options: options.map(
          ({ categoryName, name: optionName, price: optionPrice }) => ({
            categoryName,
            name: optionName,
            price: optionPrice,
          }),
        ),
      }),
    );
    const response = await fetch(
      `${SERVICE_URL}/stores/${storeId}/order-histories/table/${tableId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredCartItems),
      },
    );

    if (!response.ok) {
      let errorMessage = await response.text();
      if (!errorMessage) {
        errorMessage = "서버에서 에러 메시지를 반환하지 않았습니다.";
      }
      throw new Error(
        `주문 요청에 실패했습니다. Status: ${response.status} - ${response.statusText}. Message: ${errorMessage}`,
      );
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error("orderMenus 에러:", error.message);
    } else {
      // eslint-disable-next-line no-console
      console.error("orderMenus 에러:", error);
    }
    return false;
  }
};

export default orderMenus;
