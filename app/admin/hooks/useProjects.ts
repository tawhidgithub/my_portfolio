import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { projectService } from "../services/projectServices";
import { ProjectType } from "@/app/type/projectType";

export const useGetProjects = () => {
  return useQuery<ProjectType[], Error>({
    queryKey: ["projects"],
    queryFn: () => projectService.getAll(),
  });
};

export const useMutateProject = () => {
  const qc = useQueryClient();

  const create = useMutation<ProjectType, unknown, Partial<ProjectType>>({
    mutationFn: (payload) => projectService.create(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });

  const update = useMutation<
    ProjectType,
    unknown,
    { id: string; payload: Partial<ProjectType> }
  >({
    mutationFn: ({ id, payload }) => projectService.update(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });

  const remove = useMutation<void, unknown, string>({
    mutationFn: (id) => projectService.remove(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });

  return { create, update, remove };
};
