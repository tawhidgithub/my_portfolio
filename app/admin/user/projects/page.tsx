"use client";

import { useEffect, useState } from "react";
import AdminTable from "../../component/adminTable";
import { projects as initialProjects } from "../sampleData";
import { useGetProjects, useMutateProject } from "../../hooks/useProjects";
import { ProjectColumn } from "@/lib/tableColumn";

export default function ProjectsAdmin() {
  const { filterData } = useGetProjects();
  const { create, update, remove } = useMutateProject();

  return (
    <AdminTable
      title="Manage Projects"
      columns={ProjectColumn}
      data={filterData}
      onAdd={(item) => create.mutate(item)}
      onEdit={(item) => {
        console.log("----------item--item---", item);
        return update.mutate({
          id: item.id,
          payload: item,
        });
      }}
      onDelete={(id) => remove.mutate(id)}
    />
  );
}
