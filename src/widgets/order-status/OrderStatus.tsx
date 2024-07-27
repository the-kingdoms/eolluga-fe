"use client";

import React, { useState } from "react";

import { OrderStatusProps } from "@/shared/types/order-status";

import OrderStatusComponent from "./OrderStatusComponent";

type Status = "pending" | "approved" | "rejected";

export default function OrderStatus() {
  const [orderStatus, setOrderStatus] = useState<Status>("pending");

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

  return (
    <>
      {/* 추후 삭제 */}
      <nav>
        <button type="button" onClick={() => setOrderStatus("pending")}>
          주문할 경우
        </button>
        <button type="button" onClick={() => setOrderStatus("approved")}>
          주문 승인할 경우
        </button>
        <button type="button" onClick={() => setOrderStatus("rejected")}>
          주문 거절할 경우
        </button>
      </nav>
      <OrderStatusComponent {...getOrderStatusProps()} />
    </>
  );
}
