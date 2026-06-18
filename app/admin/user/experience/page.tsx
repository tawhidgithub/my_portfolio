"use client";

import { ExpColumn } from "@/lib/tableColumn";
import AdminTable from "../../component/adminTable";
import {
  useGetExperiences,
  useMutateExperience,
} from "../../hooks/useExperiences";

export default function ExperienceAdmin() {
  const { data } = useGetExperiences();
  const { create, update, remove } = useMutateExperience();

  return (
    <AdminTable
      title="Manage Experience"
      columns={ExpColumn}
      data={data ?? []}
      onAdd={(item) => create.mutate(item)}
      onEdit={(item) => update.mutate(item)}
      onDelete={(id) => remove.mutate(id)}
    />
  );
}
