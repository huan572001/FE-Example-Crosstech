import { requestST } from "@/config/requestST";
import { IUser, IUserST } from "./types";

import { request } from "@/config/request";
export const HomeAPI = {
  getAllUser: async () => {
    const response = await request.get<IUser[]>(`/users`);

    return response.data;
  },
  getUser: async (id: string) => {
    const response = await request.get<IUser>(`/users/${id}`);

    return response.data;
  },
  getUserTS: async (address: string) => {
    const response = await requestST.get<any>(
      `/api/v1/user?address=${address}`,
    );
    return response.data;
  },
  loginSocial: async (data: { address: string; typeSocial: string }) => {
    const response = await requestST.put<any>(`/api/v1/user`, data);
    return response.data;
  },
  verifySocial: async (data: { address: string; typeSocial: string }) => {
    const response = await requestST.post<any>(
      `/api/v1/user/verifySocial`,
      data,
    );
    return response.data;
  },
  getUserVerifySocial: async (address: string) => {
    const response = await requestST.get<any>(
      `/api/v1/user/social?address=${address}`,
    );
    return response.data;
  },
};
