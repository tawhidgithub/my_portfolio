// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { reviewService } from "../services/reviewServices";

// export const useGetReviews = () =>
//   useQuery({
//     queryKey: ["reviews"],
//     queryFn: reviewService.getAll,
//   });

// export const useMutateReview = () => {
//   const qc = useQueryClient();

//   const create = useMutation({
//     mutationFn: (payload: any) => reviewService.create(payload),
//     onSuccess: () => {
//       qc.invalidateQueries({
//         queryKey: ["reviews"],
//       });
//     },
//   });

//   const update = useMutation({
//     mutationFn: ({ id, payload }: { id: string; payload: any }) =>
//       reviewService.update(id, payload),

//     onSuccess: () => {
//       qc.invalidateQueries({
//         queryKey: ["reviews"],
//       });
//     },
//   });

//   const remove = useMutation({
//     mutationFn: (id: string) => reviewService.remove(id),

//     onSuccess: () => {
//       qc.invalidateQueries({
//         queryKey: ["reviews"],
//       });
//     },
//   });

//   return {
//     create,
//     update,
//     remove,
//   };
// };
