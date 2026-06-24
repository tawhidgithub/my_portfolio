import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Experience } from "@/app/type/sectionTypes";

export const experienceService = {
  getAll: async (): Promise<Experience[]> => {
    const res = await api.get<ApiResponseType<Experience[]>>(
      ENDPOINTS.experiences,
    );
    return res.data as unknown as Experience[];
  },
};
