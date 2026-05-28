"use client";

import { RedirectLogic } from "./user/controller";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  RedirectLogic();

  return <div>{children}</div>;
}
