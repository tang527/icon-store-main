/*
 * @Description:
 * @Autor: peng.zhang
 * @Date: 2022-07-02 19:10:20
 * @LastEditors: peng.zhang
 * @LastEditTime: 2022-07-02 19:40:07
 */
import request from '../utils/http'
import type { IPermissionList, IRoleList, IUserDetail, IUserList } from './types/mock'
export const getUserList = () => {
  return request<any, IUserList[]>({
    url: '/mock/getUserList',
    method: 'get',
  })
}
export const getRoleList = () => {
  return request<any, IRoleList[]>({
    url: '/mock/getRoleList',
    method: 'get',
  })
}
export const getPermissionList = () => {
  return request<any, IPermissionList[]>({
    url: '/mock/getPermissionList',
    method: 'get',
  })
}
export const getUserDetail = (data: { id: any }) => {
  return request<any, IUserDetail>({
    url: '/mock/getUserDetail',
    method: 'get',
    data,
  })
}
