import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { imageService } from "../services/imageServices";

export const useGetImages = () =>
  useQuery({
    queryKey: ["images"],
    queryFn: imageService.getAll,
  });

export const useMutateImage = () => {
  const qc = useQueryClient();

  const upload = useMutation({
    mutationFn: (formData: FormData) => imageService.upload(formData),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => imageService.remove(id),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  return {
    upload,
    remove,
  };
};
