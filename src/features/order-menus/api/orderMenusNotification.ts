import { SERVICE_URL } from "@/shared";

const orderMenusNotification = async (storeId: string, tableId: number) => {
  try {
    const notificationBody = {
      title: "주문 접수",
      content: `${tableId}번 테이블에서 주문이 접수되었어요.`,
      type: "ALL",
      secretKey: process.env.NEXT_PUBLIC_NOTIFICATION_SECRET,
    };
    const response = await fetch(
      `${SERVICE_URL}/stores/${storeId}/send-notification`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notificationBody),
      },
    );

    if (!response.ok) {
      let errorMessage = await response.text();
      if (!errorMessage) {
        errorMessage = "서버에서 에러 메시지를 반환하지 않았습니다.";
      }
      throw new Error(
        `주문 접수 알림 발송에 실패했습니다. Status: ${response.status} - ${response.statusText}. Message: ${errorMessage}`,
      );
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error("orderMenusNotification 에러:", error.message);
    } else {
      // eslint-disable-next-line no-console
      console.error("orderMenusNotification 에러:", error);
    }
    return false;
  }
};

export default orderMenusNotification;
