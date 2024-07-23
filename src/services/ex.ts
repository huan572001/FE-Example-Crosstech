import { IRank } from "./types";

import { request } from "@/config/request";
export const CampaignAPI = {
  getMyRank: async (address: string) => {
    const response = await request.get<IRank>(`api/point/rank/${address}`);
    return response;
  },

};
