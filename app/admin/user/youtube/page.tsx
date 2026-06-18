"use client";

import { YOutubeColumn } from "@/lib/tableColumn";
import AdminTable from "../../component/adminTable";
import { useGetYoutube, useMutateYoutube } from "../../hooks/useYoutube";

export default function YoutubeAdmin() {
  const { data } = useGetYoutube();
  const { create, update, remove } = useMutateYoutube();

  return (
    <AdminTable
      title="Manage Videos"
      columns={YOutubeColumn}
      data={data ?? []}
      onAdd={(item) => create.mutate(item)}
      onEdit={(item) => update.mutate(item)}
      onDelete={(id) => remove.mutate(id)}
    />
  );
}
