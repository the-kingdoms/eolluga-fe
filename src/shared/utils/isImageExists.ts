const isImageExists = (url?: string) => {
  if (!url) return false;
  const res = fetch(url, { method: "GET" });
  return res.then(response => response.status === 200);
};
export default isImageExists;
