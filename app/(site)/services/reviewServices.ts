import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Review } from "@/app/type/sectionTypes";

export const reviewService = {
  getAll: async (): Promise<Review[]> => {
    const res = await api.get<ApiResponseType<Review[]>>(ENDPOINTS.feedback);
    return res.data as unknown as Review[];
  },
};
