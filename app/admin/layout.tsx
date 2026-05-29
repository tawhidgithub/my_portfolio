"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Middleware } from "./middleware";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const isLoginAsAdmin = localStorage.getItem("isLoginAsAdmin") === "true";

    console.log(pathname);
    console.log(localStorage.getItem("isLoginAsAdmin"));
  }, [pathname]);

  return (
    <>
      <div></div>
      {children}
    </>
  );
}
