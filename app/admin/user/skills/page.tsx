"use client";

import { useState } from "react";
import AdminTable from "../../component/adminTable";
import { skills as initialSkills } from "../sampleData";

export default function SkillsAdmin() {
  const [skills, setSkills] = useState(initialSkills);

  return (
    <AdminTable
      title="Manage Skills"
      columns={[
        { key: "name", label: "Skill" },
        { key: "level", label: "Level" },
      ]}
      data={skills}
      onAdd={(item) => setSkills((s) => [item, ...s])}
      onEdit={(item) => console.log("Edit", item)}
      onDelete={(id) => setSkills((s) => s.filter((x) => x.id !== id))}
    />
  );
}
