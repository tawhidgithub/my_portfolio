"use client";

import { useState } from "react";
import AdminTable from "../../component/adminTable";
import { experience as initialExperience } from "../sampleData";

export default function ExperienceAdmin() {
  const [experience, setExperience] = useState(initialExperience);

  return (
    <AdminTable
      title="Manage Experience"
      columns={[
        { key: "role", label: "Role" },
        { key: "company", label: "Company" },
        { key: "years", label: "Years" },
      ]}
      data={experience}
      onAdd={(item) => setExperience((s) => [item, ...s])}
      onEdit={(item) => console.log("Edit", item)}
      onDelete={(id) => setExperience((s) => s.filter((x) => x.id !== id))}
    />
  );
}
