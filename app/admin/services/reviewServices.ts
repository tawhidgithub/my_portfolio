import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Review } from "@/app/type/sectionTypes";

export const reviewService = {
  getAll: async (): Promise<Review[]> => {
    try {
      const res = await api.get<ApiResponseType<any>>(ENDPOINTS.feedback);
      return res.data as Review[];
    } catch (error) {
      throw error;
    }
  },

  create: async (payload: Partial<Review>) => {
    try {
      const res = await api.post<ApiResponseType<any>>(
        ENDPOINTS.feedback,
        payload,
      );
      return res.data as Review;
    } catch (error) {
      throw error;
    }
  },

  update: async (id: string, payload: Partial<Review>) => {
    try {
      const res = await api.put<ApiResponseType<any>>(
        `${ENDPOINTS.feedback}/${id}`,
        payload,
      );
      return res.data as Review;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const res = await api.delete<ApiResponseType<any>>(
        `${ENDPOINTS.feedback}/${id}`,
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
