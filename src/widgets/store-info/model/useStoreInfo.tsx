"use client";

import { useQuery } from "@tanstack/react-query";

import { getStoreInfo } from "@/entities";

const useStoreInfo = (storeId: number) => {
  const storeQuery = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStoreInfo(storeId),
  });
  return storeQuery;
};

export default useStoreInfo;
