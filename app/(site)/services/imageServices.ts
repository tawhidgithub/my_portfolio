import { ApiResponseType } from "@/app/type/responseType";
import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { ImageItem } from "@/app/type/sectionTypes";

export const imageService = {
  getAll: async (): Promise<ImageItem[]> => {
    const res = await api.get<ApiResponseType<ImageItem[]>>(ENDPOINTS.images);
    return res.data as unknown as ImageItem[];
  },
};
