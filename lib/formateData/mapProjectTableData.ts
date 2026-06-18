import { ProjectType } from "@/app/type/projectType";
import { CustomTableDataType } from "@/app/type/tableType";
import { title } from "process";

export const MapProjectTableData = (
  data: ProjectType[],
): CustomTableDataType[] =>
  data.map((pr) => ({
    id: pr._id,
    ...pr,
  }));
