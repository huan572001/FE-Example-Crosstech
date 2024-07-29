import { IUser } from "./types";

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
};
