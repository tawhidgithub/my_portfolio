"use client";

import { useState } from "react";
import AdminTable from "../../component/adminTable";
import { images as initialImages } from "../sampleData";

export default function ImagesAdmin() {
  const [images, setImages] = useState(initialImages);

  return (
    <AdminTable
      title="Manage Main Images"
      columns={[
        { key: "title", label: "Title" },
        { key: "url", label: "URL" },
      ]}
      data={images}
      onAdd={(item) => setImages((s) => [item, ...s])}
      onEdit={(item) => console.log("Edit", item)}
      onDelete={(id) => setImages((s) => s.filter((x) => x.id !== id))}
    />
  );
}
