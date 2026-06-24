import { useQuery } from "@tanstack/react-query";
import { reviewService } from "@/app/(site)/services/reviewServices";

export const useGetReviews = () =>
  useQuery({
    queryKey: ["reviews"],
    queryFn: reviewService.getAll,
  });
