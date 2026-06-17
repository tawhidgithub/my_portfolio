import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { skillsService } from "../services/skillsServices";

export const useGetSkills = () => {
  return useQuery(["skills"], () => skillsService.getAll());
};

export const useMutateSkill = () => {
  const qc = useQueryClient();

  const create = useMutation({
    mutationFn: (payload: any) => skillsService.create(payload),
    onSuccess: () => qc.invalidateQueries(["skills"]),
  });

  const update = useMutation({
    mutationFn: ({ id, payload }: any) => skillsService.update(id, payload),
    onSuccess: () => qc.invalidateQueries(["skills"]),
  });

  const remove = useMutation({
    mutationFn: (id: string) => skillsService.remove(id),
    onSuccess: () => qc.invalidateQueries(["skills"]),
  });

  return { create, update, remove };
};
