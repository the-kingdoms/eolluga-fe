"use client";

import { useEffect, useState } from "react";

import AlertDialog from "./AlertDialog";

export default function DeleteAllCartItems({
  onClearCart,
}: {
  onClearCart: () => void;
}) {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  useEffect(() => {
    if (showDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDialog]);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowDialog(true);
        }}
        className="text-sm font-bold"
      >
        전체 삭제
      </button>
      {showDialog && (
        <AlertDialog
          onDelete={() => onClearCart()}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </>
  );
}
