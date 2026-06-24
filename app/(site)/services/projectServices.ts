import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { ProjectType } from "@/app/type/projectType";

export const projectService = {
  getAll: async (): Promise<ProjectType[]> => {
    const res = await api.get<ProjectType[]>(ENDPOINTS.projects);
    return res.data as unknown as ProjectType[];
  },
};
