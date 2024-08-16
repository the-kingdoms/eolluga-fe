/* eslint-disable no-console */

export const parseJSON = async (response: Response) => {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      "JSON 파싱 에러:",
      error instanceof Error ? error : new Error("Unknown error"),
      "텍스트:",
      text,
    );
    throw new Error("JSON 파싱에 실패했습니다.");
  }
};
