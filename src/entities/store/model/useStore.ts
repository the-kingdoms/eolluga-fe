import { useState, useEffect } from "react";
import getStore from "../api/getStore";
import { MenuItemT, StoreInfoT } from "../api/store";

const useStore = (storeId: number) => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [storeInfo, setStoreInfo] = useState<StoreInfoT | null>(null);
  const [categories, setCategories] = useState<string[] | null>(null);
  const [menu, setMenu] = useState<MenuItemT[] | null>(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      setIsPending(true);
      setIsError(false);
      try {
        const data = await getStore(storeId);
        setStoreInfo(data.storeInfo);
        setCategories(data.categories);
        setMenu(data.menu);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsPending(false);
      }
    };

    fetchStoreData();
  }, [storeId]);

  return { isPending, isError, storeInfo, categories, menu };
};

export default useStore;
