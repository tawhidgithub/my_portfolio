import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { youtubeService } from "../services/youtubeServices";

export const useGetYoutube = () =>
  useQuery({
    queryKey: ["youtube"],
    queryFn: youtubeService.getAll,
  });

export const useMutateYoutube = () => {
  const qc = useQueryClient();

  const create = useMutation({
    mutationFn: (payload: any) => youtubeService.create(payload),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["youtube"],
      });
    },
  });

  const update = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: any }) =>
      youtubeService.update(id, payload),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["youtube"],
      });
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => youtubeService.remove(id),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["youtube"],
      });
    },
  });

  return {
    create,
    update,
    remove,
  };
};
