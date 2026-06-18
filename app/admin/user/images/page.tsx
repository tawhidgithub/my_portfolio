"use client";

import AdminTable from "../../component/adminTable";
import { useGetImages, useMutateImage } from "../../hooks/useImages";

export default function ImagesAdmin() {
  const { data } = useGetImages();
  const { upload, remove } = useMutateImage();

  return (
    <AdminTable
      title="Manage Main Images"
      columns={[
        { key: "title", label: "Title" },
        { key: "url", label: "URL" },
      ]}
      data={data ?? []}
      onAdd={(item) => upload.mutate(item as any)}
      onEdit={(item) => upload.mutate(item as any)}
      onDelete={(id) => remove.mutate(id)}
    />
  );
}
