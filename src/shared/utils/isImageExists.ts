"use server";

const isImageExists = async (url?: string): Promise<boolean> => {
  if (!url) return false;
  try {
    const res = fetch(url, { method: "GET", cache: "no-store" });
    return await res.then(response => response.status === 200);
  } catch (e) {
    return false;
  }
};
export default isImageExists;
