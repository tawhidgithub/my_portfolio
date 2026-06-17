import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Experience } from "@/app/type/sectionTypes";

export const experienceService = {
  getAll: async (): Promise<Experience[]> => {
    try {
      const res = await api.get<ApiResponseType>(ENDPOINTS.experiences);
      return res.data as Experience[];
    } catch (error) {
      throw error;
    }
  },

  create: async (payload: Partial<Experience>) => {
    try {
      const res = await api.post<ApiResponseType>(
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
      const res = await api.put<ApiResponseType>(
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
      const res = await api.delete<ApiResponseType>(
        `${ENDPOINTS.experiences}/${id}`,
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
