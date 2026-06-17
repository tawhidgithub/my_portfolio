import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { experienceService } from "../services/experienceServices";

export const useGetExperiences = () =>
  useQuery(["experiences"], () => experienceService.getAll());

export const useMutateExperience = () => {
  const qc = useQueryClient();

  const create = useMutation({
    mutationFn: (p: any) => experienceService.create(p),
    onSuccess: () => qc.invalidateQueries(["experiences"]),
  });
  const update = useMutation({
    mutationFn: ({ id, payload }: any) => experienceService.update(id, payload),
    onSuccess: () => qc.invalidateQueries(["experiences"]),
  });
  const remove = useMutation({
    mutationFn: (id: string) => experienceService.remove(id),
    onSuccess: () => qc.invalidateQueries(["experiences"]),
  });

  return { create, update, remove };
};
