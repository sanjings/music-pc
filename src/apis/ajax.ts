import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { BASE_URL, TIME_OUT, errorHandle } from './config';
import { IUnknowObject } from '/@/typings';

interface IResponseData extends IUnknowObject {
  code: number;
  total?: number;
}

/**
 * 创建axios实例
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

/**
 * 响应拦截处理
 */
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      const code = res.data.code;
      if (code === 200) {
        return Promise.resolve(res.data);
      }
    }
    return Promise.reject(res.data);
  },
  (error: AxiosError) => {
    if (error && error.response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(error.response.status);
      return Promise.reject(error.response);
    }
    console.log("网络请求失败, 请刷新重试");
    return Promise.reject(error);
  }
);

const ajaxGet = (url: string, params?: any): Promise<IResponseData> => axiosInstance.get(url, { params });
const ajaxPost = (url: string, params: any): Promise<IResponseData> => axiosInstance.post(url, params);

export {
  ajaxGet,
  ajaxPost
}

