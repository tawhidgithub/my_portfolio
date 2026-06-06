"use client";

import { RedirectLogic } from "./user/controller";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <RedirectLogic />
      {children}
    </div>
  );
}
