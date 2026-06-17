"use client";

import { motion } from "motion/react";
import { Lock, Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";

type FormValues = {
  email: string;
  password: string;
};

export default function AdminLoginPage() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-primaryBg)] relative overflow-hidden">
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="mt-6 text-3xl font-bold">Welcome Back 👋</h1>

          <p className="mt-2 text-white/60 text-sm">
            Sign in to manage your portfolio
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 py-3 text-white outline-none"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />

              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 py-3 text-white outline-none"
              />
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isPending}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-2xl bg-[var(--color-secondaryBg)] py-3 font-semibold text-black disabled:opacity-50"
          >
            {isPending ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
