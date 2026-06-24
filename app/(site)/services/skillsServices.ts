import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { Skill } from "@/app/type/sectionTypes";

export const skillsService = {
  getAll: async (): Promise<Skill[]> => {
    const res = await api.get<Skill[]>(ENDPOINTS.skills);
    return res.data as unknown as Skill[];
  },
};
