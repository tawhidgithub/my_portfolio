"use client";

import AdminTable from "../component/adminTable";


const projects = [
  {
    id: "1",
    title: "E-commerce App",
    stack: "Next.js, Node.js",
    status: "Live",
  },
  {
    id: "2",
    title: "Portfolio Website",
    stack: "Next.js, Tailwind",
    status: "In Progress",
  },
];

export default function ProjectsAdmin() {
  return (
    <AdminTable
      title="Manage Projects"
      columns={[
        { key: "title", label: "Title" },
        { key: "stack", label: "Stack" },
        { key: "status", label: "Status" },
      ]}
      data={projects}
      onEdit={(item) => console.log("Edit", item)}
      onDelete={(id) => console.log("Delete", id)}
    />
  );
}
