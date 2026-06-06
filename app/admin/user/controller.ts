"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const RedirectLogic = () => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const isLoginAsAdmin = localStorage.getItem("isLoginAsAdmin");
    if (pathname.startsWith("/admin") && isLoginAsAdmin !== "true") {
      router.push("/admin/auth/login");
    } else if (pathname === "/admin/auth/login" && isLoginAsAdmin === "true") {
      router.push("/admin/user");
    } else if (pathname === "/admin" && isLoginAsAdmin === "true") {
      router.push("/admin/user");
    }
  }, [pathname, router]);
  return null;
};
