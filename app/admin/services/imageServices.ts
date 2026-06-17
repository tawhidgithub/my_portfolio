import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { ImageItem } from "@/app/type/sectionTypes";

export const imageService = {
  getAll: async (): Promise<ImageItem[]> => {
    try {
      const res = await api.get<ApiResponseType>(ENDPOINTS.images);
      return res.data as ImageItem[];
    } catch (error) {
      throw error;
    }
  },

  upload: async (payload: FormData) => {
    try {
      const res = await api.post<ApiResponseType>(ENDPOINTS.images, payload);
      return res.data as ImageItem;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const res = await api.delete<ApiResponseType>(
        `${ENDPOINTS.images}/${id}`,
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
