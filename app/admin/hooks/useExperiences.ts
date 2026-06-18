import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { experienceService } from "../services/experienceServices";

export const useGetExperiences = () =>
  useQuery({
    queryKey: ["experiences"],
    queryFn: experienceService.getAll,
  });

export const useMutateExperience = () => {
  const qc = useQueryClient();

  const create = useMutation({
    mutationFn: (payload: any) => experienceService.create(payload),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["experiences"],
      });
    },
  });

  const update = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: any }) =>
      experienceService.update(id, payload),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["experiences"],
      });
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => experienceService.remove(id),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["experiences"],
      });
    },
  });

  return {
    create,
    update,
    remove,
  };
};
