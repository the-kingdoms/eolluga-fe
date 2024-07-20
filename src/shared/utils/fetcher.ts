import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { MOCK_SERVER_URL } from "../consts/mock";

const axiosInstance = axios.create({ baseURL: MOCK_SERVER_URL });

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(
        new Error(error.response?.data?.message || error.message)
      );
    }
    return Promise.reject(new Error("An unknown error occurred"));
  }
);

const fetcher = async (
  url: string,
  method: "get" | "post" | "put" | "delete" | "patch",
  headers?: Record<string, string>,
  params?: Record<string, any>,
  data?: any,
  withCredentials?: boolean
): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: url,
      headers,
      params,
      withCredentials,
      ...(method !== "get" && data && { data }),
    };

    const response: AxiosResponse = await axiosInstance(config);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("알 수 없는 에러 발생");
  }
};

export default fetcher;
