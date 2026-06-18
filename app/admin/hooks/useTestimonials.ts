import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { testimonialService } from "../services/testimonialServices";

export const useGetTestimonials = () =>
  useQuery({
    queryKey: ["testimonials"],
    queryFn: testimonialService.getAll,
  });

export const useMutateTestimonial = () => {
  const qc = useQueryClient();

  const create = useMutation({
    mutationFn: (payload: any) => testimonialService.create(payload),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["testimonials"],
      });
    },
  });

  const update = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: any }) =>
      testimonialService.update(id, payload),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["testimonials"],
      });
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => testimonialService.remove(id),

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["testimonials"],
      });
    },
  });

  return {
    create,
    update,
    remove,
  };
};
