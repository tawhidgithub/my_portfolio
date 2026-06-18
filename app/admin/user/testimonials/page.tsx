"use client";

import { TestimonialColumn } from "@/lib/tableColumn";
import AdminTable from "../../component/adminTable";
import {
  useGetTestimonials,
  useMutateTestimonial,
} from "../../hooks/useTestimonials";

export default function TestimonialsAdmin() {
  const { data } = useGetTestimonials();
  const { create, update, remove } = useMutateTestimonial();

  return (
    <AdminTable
      title="Manage Testimonials"
      columns={TestimonialColumn}
      data={data ?? []}
      onAdd={(item) => create.mutate(item)}
      onEdit={(item) => update.mutate(item)}
      onDelete={(id) => remove.mutate(id)}
    />
  );
}
