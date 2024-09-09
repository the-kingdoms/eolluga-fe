"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { OrderStatusProps } from "@/shared/types/order-status";

import { getOrderStatusByFiveSeconds } from "../utils/getOrderStatusByFiveSeconds";
import OrderStatusComponent from "./OrderStatusComponent";

type Status = "pending" | "approved" | "rejected";

export default function OrderStatus({
  storeId,
  tableId,
}: {
  storeId: string;
  tableId: number;
}) {
  const { push } = useRouter();
  const [orderStatus, setOrderStatus] = useState<Status>("pending");

  useEffect(() => {
    const intervalInstance = getOrderStatusByFiveSeconds(
      storeId,
      tableId,
      setOrderStatus,
    );
    return () => clearInterval(intervalInstance);
  }, []);

  const getOrderStatusProps = (): OrderStatusProps => {
    switch (orderStatus) {
      case "pending":
        return {
          title: "주문이 전달되었어요",
          description: "사장님이 곧 주문을 확인하실거에요\n잠시만 기다려주세요",
          imagePath: "/image/wall-clock.png",
          imageWidth: 256,
          imageHeight: 258,
        };
      case "approved":
        return {
          title: "주문이 완료되었어요",
          description:
            "메뉴가 준비되면 가져다 드리겠습니다\n잠시만 기다려주세요",
          imagePath: "/image/receipt.png",
          imageWidth: 328,
          imageHeight: 286,
          buttonText: "주문 내역 보기",
          buttonOnClick: () => push(`./`),
        };
      case "rejected":
        return {
          title: "주문이 거절되었어요",
          description:
            "가게 사정으로 주문이 거절되었습니다\n다른 메뉴를 주문해주세요",
          imagePath: "/image/sad-emoji.png",
          imageWidth: 254,
          imageHeight: 254,
          buttonText: "다른 메뉴 보기",
          buttonOnClick: () => push(`../menu`),
        };
      default:
        return {
          title: "",
          description: "",
          imagePath: "",
          imageWidth: 0,
          imageHeight: 0,
        };
    }
  };

  return <OrderStatusComponent {...getOrderStatusProps()} />;
}
