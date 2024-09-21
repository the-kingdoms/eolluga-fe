import { CartItemsT, SERVICE_URL } from "@/shared";

const orderMenus = async (
  cartItems: CartItemsT,
  storeId: string,
  tableId: number,
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
  } catch (error) {
    if (error instanceof TypeError) {
      // eslint-disable-next-line no-console
      console.error("네트워크 오류가 발생했습니다:", error.message);
      throw new Error("network-error");
    }
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error("서비스 오류가 발생했습니다:", error.message);
      throw new Error("service-error");
    }
    // eslint-disable-next-line no-console
    console.error("알 수 없는 오류가 발생했습니다:", error);
    throw new Error("unknown-error");
  }
};

export default orderMenus;
