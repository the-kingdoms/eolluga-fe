import getOrder from "@/entities/order/api/getOrder";

export const getOrderStatusByFiveSeconds = (
  storeId: string,
  tableId: number,
  setState: React.Dispatch<
    React.SetStateAction<"pending" | "approved" | "rejected" | "no-data">
  >,
) => {
  const intervalInstance = setInterval(() => {
    getOrder(storeId, tableId).then(data => {
      if (data.length === 0) {
        setState("no-data");
      } else {
        const lastData = data
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          )
          .at(-1);
        switch (lastData?.status) {
          case "PENDING":
            setState("pending");
            break;
          case "APPROVED":
            setState("approved");
            break;
          case "DISAPPROVED":
            setState("rejected");
            break;
          default:
            setState("pending");
            break;
        }
      }
    });
  }, 5000);
  return intervalInstance;
};
