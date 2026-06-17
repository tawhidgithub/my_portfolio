import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { youtubeService } from "../services/youtubeServices";

export const useGetYoutube = () =>
  useQuery(["youtube"], () => youtubeService.getAll());

export const useMutateYoutube = () => {
  const qc = useQueryClient();

  const create = useMutation({
    mutationFn: (p: any) => youtubeService.create(p),
    onSuccess: () => qc.invalidateQueries(["youtube"]),
  });
  const update = useMutation({
    mutationFn: ({ id, payload }: any) => youtubeService.update(id, payload),
    onSuccess: () => qc.invalidateQueries(["youtube"]),
  });
  const remove = useMutation({
    mutationFn: (id: string) => youtubeService.remove(id),
    onSuccess: () => qc.invalidateQueries(["youtube"]),
  });

  return { create, update, remove };
};
