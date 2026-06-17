"use client";

import { useState } from "react";
import AdminTable from "../../component/adminTable";
import { projects as initialProjects } from "../sampleData";
import { useGetProjects } from "../../hooks/useProjects";

export default function ProjectsAdmin() {
  const { data: fetchedProjects } = useGetProjects();
  const [projects, setProjects] = useState(fetchedProjects || []);

  return (
    <AdminTable
      title="Manage Projects"
      columns={[
        { key: "title", label: "Title" },
        { key: "stack", label: "Stack" },
        { key: "status", label: "Status" },
      ]}
      data={projects}
      onAdd={(item) => setProjects((s) => [item, ...s])}
      onEdit={(item) => console.log("Edit", item)}
      onDelete={(id) => setProjects((s) => s.filter((p) => p._id !== id))}
    />
  );
}
