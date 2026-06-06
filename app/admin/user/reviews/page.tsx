"use client";

import { useState } from "react";
import AdminTable from "../../component/adminTable";
import { reviews as initialReviews } from "../sampleData";

export default function ReviewsAdmin() {
  const [reviews, setReviews] = useState(initialReviews);

  return (
    <AdminTable
      title="Manage Reviews"
      columns={[
        { key: "author", label: "Author" },
        { key: "text", label: "Review" },
      ]}
      data={reviews}
      onAdd={(item) => setReviews((s) => [item, ...s])}
      onEdit={(item) => console.log("Edit", item)}
      onDelete={(id) => setReviews((s) => s.filter((x) => x.id !== id))}
    />
  );
}
