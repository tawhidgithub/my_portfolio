import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Experience } from "@/app/type/sectionTypes";

export const experienceService = {
  getAll: async (): Promise<Experience[]> => {
    try {
      const res = await api.get<ApiResponseType<any>>(ENDPOINTS.experiences);
      return res.data as Experience[];
    } catch (error) {
      throw error;
    }
  },

  create: async (payload: Partial<Experience>) => {
    try {
      const res = await api.post<ApiResponseType<any>>(
        ENDPOINTS.experiences,
        payload,
      );
      return res.data as Experience;
    } catch (error) {
      throw error;
    }
  },

  update: async (id: string, payload: Partial<Experience>) => {
    try {
      const res = await api.put<ApiResponseType<any>>(
        `${ENDPOINTS.experiences}/${id}`,
        payload,
      );
      return res.data as Experience;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const res = await api.delete<ApiResponseType<any>>(
        `${ENDPOINTS.experiences}/${id}`,
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
