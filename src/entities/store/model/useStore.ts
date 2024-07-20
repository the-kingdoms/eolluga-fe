import getStore from "../api/getStore";

const useStore = (storeId: number) => {
  try {
    const data = getStore(storeId);
    return data;
  } catch {
    return {};
  }
};
export default useStore;
