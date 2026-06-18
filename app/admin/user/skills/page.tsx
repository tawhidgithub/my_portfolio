"use client";

import { SkillsColumn } from "@/lib/tableColumn";
import AdminTable from "../../component/adminTable";
import { useGetSkills, useMutateSkill } from "../../hooks/useSkills";

export default function SkillsAdmin() {
  const { data } = useGetSkills();
  const { create, update, remove } = useMutateSkill();

  return (
    <AdminTable
      title="Manage Skills"
      columns={SkillsColumn}
      data={data ?? []}
      onAdd={(item) => create.mutate(item)}
      onEdit={(item) => update.mutate(item)}
      onDelete={(id) => remove.mutate(id)}
    />
  );
}
