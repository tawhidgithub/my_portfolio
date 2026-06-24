import { useQuery } from "@tanstack/react-query";
import { experienceService } from "@/app/(site)/services/experienceServices";

export const useGetExperiences = () =>
  useQuery({
    queryKey: ["experiences"],
    queryFn: experienceService.getAll,
  });
