import { useQuery } from "@tanstack/react-query";
import { skillsService } from "@/app/(site)/services/skillsServices";

export const useGetSkills = () =>
  useQuery({
    queryKey: ["skills"],
    queryFn: skillsService.getAll,
  });
