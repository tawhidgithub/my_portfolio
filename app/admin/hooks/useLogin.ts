// hooks/useLogin.ts

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { loginServices } from "../services/loginServices";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: { email: string; password: string }) =>
      loginServices(payload),

    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("isLoginAsAdmin", "true");

      router.push("/admin/user");
    },

    onError: (error) => {
      console.log(error);
    },
  });
};
