import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Skill } from "@/app/type/sectionTypes";

export const skillsService = {
  getAll: async (): Promise<Skill[]> => {
    try {
      const res = await api.get<ApiResponseType>(ENDPOINTS.skills);
      return res.data as Skill[];
    } catch (error) {
      throw error;
    }
  },

  create: async (payload: Partial<Skill>) => {
    try {
      const res = await api.post<ApiResponseType>(ENDPOINTS.skills, payload);
      return res.data as Skill;
    } catch (error) {
      throw error;
    }
  },

  update: async (id: string, payload: Partial<Skill>) => {
    try {
      const res = await api.put<ApiResponseType>(
        `${ENDPOINTS.skills}/${id}`,
        payload,
      );
      return res.data as Skill;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const res = await api.delete<ApiResponseType>(
        `${ENDPOINTS.skills}/${id}`,
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
