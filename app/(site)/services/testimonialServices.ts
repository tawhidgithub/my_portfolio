import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Testimonial } from "@/app/type/sectionTypes";

export const testimonialService = {
  getAll: async (): Promise<Testimonial[]> => {
    const res = await api.get<Testimonial[]>(ENDPOINTS.feedback);
    return res.data as unknown as Testimonial[];
  },
};
