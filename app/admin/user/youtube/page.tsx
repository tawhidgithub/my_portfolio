"use client";

import { useState } from "react";
import AdminTable from "../../component/adminTable";
import { videos as initialVideos } from "../sampleData";

export default function YoutubeAdmin() {
  const [videos, setVideos] = useState(initialVideos);

  return (
    <AdminTable
      title="Manage Videos"
      columns={[
        { key: "title", label: "Title" },
        { key: "views", label: "Views" },
      ]}
      data={videos}
      onAdd={(item) => setVideos((s) => [item, ...s])}
      onEdit={(item) => console.log("Edit", item)}
      onDelete={(id) => setVideos((s) => s.filter((x) => x.id !== id))}
    />
  );
}
