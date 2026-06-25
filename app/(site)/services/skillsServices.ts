import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Skill } from "@/app/type/sectionTypes";
import { ApiResponseType } from "@/app/type/responseType";
import { AxiosResponse } from "axios";

export const skillsService = {
  getAll: async (): Promise<ApiResponseType<Skill[]>> => {
    const res: AxiosResponse<ApiResponseType<Skill[]>> = await api.get(
      ENDPOINTS.skills,
    );

    return res.data;
  },
};
