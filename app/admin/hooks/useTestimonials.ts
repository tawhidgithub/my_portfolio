import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { testimonialService } from "../services/testimonialServices";

export const useGetTestimonials = () =>
  useQuery(["testimonials"], () => testimonialService.getAll());

export const useMutateTestimonial = () => {
  const qc = useQueryClient();

  const create = useMutation({
    mutationFn: (p: any) => testimonialService.create(p),
    onSuccess: () => qc.invalidateQueries(["testimonials"]),
  });
  const update = useMutation({
    mutationFn: ({ id, payload }: any) =>
      testimonialService.update(id, payload),
    onSuccess: () => qc.invalidateQueries(["testimonials"]),
  });
  const remove = useMutation({
    mutationFn: (id: string) => testimonialService.remove(id),
    onSuccess: () => qc.invalidateQueries(["testimonials"]),
  });

  return { create, update, remove };
};
