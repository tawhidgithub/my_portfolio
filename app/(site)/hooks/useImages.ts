import { useQuery } from "@tanstack/react-query";
import { imageService } from "@/app/(site)/services/imageServices";

export const useGetImages = () =>
  useQuery({
    queryKey: ["images"],
    queryFn: imageService.getAll,
  });
