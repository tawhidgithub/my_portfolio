import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { YoutubeItem } from "@/app/type/sectionTypes";

export const youtubeService = {
  getAll: async (): Promise<YoutubeItem[]> => {
    try {
      const res = await api.get<ApiResponseType>(ENDPOINTS.youtube);
      return res.data as YoutubeItem[];
    } catch (error) {
      throw error;
    }
  },

  create: async (payload: Partial<YoutubeItem>) => {
    try {
      const res = await api.post<ApiResponseType>(ENDPOINTS.youtube, payload);
      return res.data as YoutubeItem;
    } catch (error) {
      throw error;
    }
  },

  update: async (id: string, payload: Partial<YoutubeItem>) => {
    try {
      const res = await api.put<ApiResponseType>(
        `${ENDPOINTS.youtube}/${id}`,
        payload,
      );
      return res.data as YoutubeItem;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const res = await api.delete<ApiResponseType>(
        `${ENDPOINTS.youtube}/${id}`,
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
