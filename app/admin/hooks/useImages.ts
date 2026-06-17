import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { imageService } from "../services/imageServices";

export const useGetImages = () =>
  useQuery(["images"], () => imageService.getAll());

export const useMutateImage = () => {
  const qc = useQueryClient();

  const upload = useMutation({
    mutationFn: (p: FormData) => imageService.upload(p),
    onSuccess: () => qc.invalidateQueries(["images"]),
  });
  const remove = useMutation({
    mutationFn: (id: string) => imageService.remove(id),
    onSuccess: () => qc.invalidateQueries(["images"]),
  });

  return { upload, remove };
};
