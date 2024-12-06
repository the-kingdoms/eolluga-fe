import { CartItemsT, SERVICE_URL } from "@/shared";

const sendSMS = async (phone: string, storeId: string, paymentId: string) => {
  try {
    const response = await fetch(
      `${SERVICE_URL}/stores/${storeId}/payment-histories/${paymentId}/update-phones`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("알 수 없는 오류가 발생했습니다:", error);
    throw new Error("unknown-error");
  }
};
export default sendSMS;
