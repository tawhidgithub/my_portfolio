import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { ProjectType } from "@/app/type/projectType";

type ApiResponse<T> = {
  status: number;
  message: string;
  data: T;
};

export const projectService = {
  getAll: async (): Promise<ProjectType[]> => {
    const res = await api.get<ApiResponse<ProjectType[]>>(ENDPOINTS.projects);
    console.log("res============", res.data);

    return res.data;
  },

  create: async (payload: Partial<ProjectType>): Promise<ProjectType> => {
    const res = await api.post<ApiResponse<ProjectType>>(
      ENDPOINTS.projects,
      payload,
    );
    return res.data;
  },

  update: async (id: string, payload: ProjectType): Promise<ProjectType> => {
    console.log("---------payload---------", payload);

    const res = await api.put<ApiResponse<ProjectType>>(
      `${ENDPOINTS.projects}/${id}`,
      payload,
    );
    return res.data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete<ApiResponse<null>>(`${ENDPOINTS.projects}/${id}`);
  },
};
