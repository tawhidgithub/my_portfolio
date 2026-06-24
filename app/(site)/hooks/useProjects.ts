import { useQuery } from "@tanstack/react-query";
import { projectService } from "@/app/(site)/services/projectServices";

export const useGetProjects = () =>
  useQuery({
    queryKey: ["projects"],
    queryFn: projectService.getAll,
  });
