import api from "@/lib/api";
import { ENDPOINTS } from "@/lib/endpoient";
import { ProjectType } from "@/app/type/projectType";

export const projectService = {
  getAll: async (): Promise<ProjectType[]> => {
    try {
      const res = await api.get<{
        status: number;
        message: string;
        data: ProjectType[];
      }>(ENDPOINTS.projects);

      // api.get returns parsed response.data (the whole server payload). We
      // expect the server to return { status, message, data } and we return
      // only the inner `data` to consumers.
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  create: async (payload: Partial<ProjectType>): Promise<ProjectType> => {
    try {
      const res = await api.post<{
        status: number;
        message: string;
        data: ProjectType;
      }>(ENDPOINTS.projects, payload);

      return res.data;
    } catch (error) {
      throw error;
    }
  },

  update: async (
    id: string,
    payload: Partial<ProjectType>,
  ): Promise<ProjectType> => {
    try {
      const res = await api.put<{
        status: number;
        message: string;
        data: ProjectType;
      }>(`${ENDPOINTS.projects}/${id}`, payload);

      return res.data;
    } catch (error) {
      throw error;
    }
  },

  remove: async (id: string): Promise<void> => {
    try {
      await api.delete<{ status: number; message: string; data: null }>(
        `${ENDPOINTS.projects}/${id}`,
      );

      return;
    } catch (error) {
      throw error;
    }
  },
};
