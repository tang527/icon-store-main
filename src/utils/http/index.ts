/*
 * @Description:
 * @Autor: peng.zhang
 * @Date: 2022-07-02 19:10:20
 * @LastEditors: peng.zhang
 * @LastEditTime: 2022-07-02 19:42:41
 */
import Request from './request'
import { AxiosResponse } from 'axios'

import type { RequestConfig } from './request/types'

export interface ZResponse<T> {
  statusCode: number
  desc: string
  result: T
}

// 重写返回类型
interface ZRequestConfig<T, R> extends RequestConfig<ZResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {ZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const ywzRequest = <D = any, T = any>(config: ZRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<ZResponse<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default ywzRequest
