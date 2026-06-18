"use client";

import AdminTable from "../../component/adminTable";
import { useGetReviews, useMutateReview } from "../../hooks/useReviews";

export default function ReviewsAdmin() {
  const { data } = useGetReviews();
  const { create, update, remove } = useMutateReview();

  return (
    <AdminTable
      title="Manage Reviews"
      columns={[
        { key: "author", label: "Author" },
        { key: "text", label: "Review" },
      ]}
      data={data ?? []}
      onAdd={(item) => create.mutate(item)}
      onEdit={(item) => update.mutate(item)}
      onDelete={(id) => remove.mutate(id)}
    />
  );
}
