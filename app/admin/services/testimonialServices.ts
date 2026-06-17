import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Testimonial } from "@/app/type/sectionTypes";

export const testimonialService = {
  getAll: async (): Promise<Testimonial[]> => {
    try {
      const res = await api.get<ApiResponseType>(ENDPOINTS.feedback);
      return res.data as Testimonial[];
    } catch (error) {
      throw error;
    }
  },

  create: async (payload: Partial<Testimonial>) => {
    try {
      const res = await api.post<ApiResponseType>(ENDPOINTS.feedback, payload);
      return res.data as Testimonial;
    } catch (error) {
      throw error;
    }
  },

  update: async (id: string, payload: Partial<Testimonial>) => {
    try {
      const res = await api.put<ApiResponseType>(
        `${ENDPOINTS.feedback}/${id}`,
        payload,
      );
      return res.data as Testimonial;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string) => {
    try {
      const res = await api.delete<ApiResponseType>(
        `${ENDPOINTS.feedback}/${id}`,
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
