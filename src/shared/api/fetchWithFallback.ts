const fetchWithFallback = async (url: string, cacheMode: RequestCache) => {
  try {
    const response = await fetch(url, { cache: cacheMode });
    if (!response.ok) {
      if (cacheMode === "force-cache") {
        // eslint-disable-next-line no-console
        console.error("캐시된 데이터 실패, no-cache로 재시도");
        return await fetch(url, { cache: "no-cache" });
      }
      throw new Error(`HTTP 상태 코드: ${response.status}`);
    }
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`네트워크 요청 실패: ${error}`);
    throw error;
  }
};
export default fetchWithFallback;
