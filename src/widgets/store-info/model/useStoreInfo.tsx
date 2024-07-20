"use client";

import { getStoreInfo } from "@/entities";
import { useQuery } from "@tanstack/react-query";

const useStoreInfo = (storeId: number) => {
  const storeQuery = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStoreInfo(storeId),
  });
  return storeQuery;
};

export default useStoreInfo;
