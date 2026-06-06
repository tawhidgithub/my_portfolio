"use client";

import { RedirectLogic } from "./user/controller";

export default function AdminIndexPage() {
  return (
    <div>
      <RedirectLogic />
      {/* placeholder while redirect logic runs */}
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking admin access...</p>
      </div>
    </div>
  );
}
