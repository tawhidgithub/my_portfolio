import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewService } from "../services/reviewServices";

export const useGetReviews = () =>
  useQuery(["reviews"], () => reviewService.getAll());

export const useMutateReview = () => {
  const qc = useQueryClient();

  const create = useMutation({
    mutationFn: (p: any) => reviewService.create(p),
    onSuccess: () => qc.invalidateQueries(["reviews"]),
  });
  const update = useMutation({
    mutationFn: ({ id, payload }: any) => reviewService.update(id, payload),
    onSuccess: () => qc.invalidateQueries(["reviews"]),
  });
  const remove = useMutation({
    mutationFn: (id: string) => reviewService.remove(id),
    onSuccess: () => qc.invalidateQueries(["reviews"]),
  });

  return { create, update, remove };
};
