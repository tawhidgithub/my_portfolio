"use client";

import { useState } from "react";
import AdminTable from "../../component/adminTable";
import { testimonials as initialTestimonials } from "../sampleData";

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  return (
    <AdminTable
      title="Manage Testimonials"
      columns={[
        { key: "name", label: "Name" },
        { key: "text", label: "Text" },
      ]}
      data={testimonials}
      onAdd={(item) => setTestimonials((s) => [item, ...s])}
      onEdit={(item) => console.log("Edit", item)}
      onDelete={(id) => setTestimonials((s) => s.filter((x) => x.id !== id))}
    />
  );
}
