"use client";

import { motion } from "motion/react";
import { Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-primaryBg)] relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      {/* login card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-md rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
      >
        {/* header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Lock className="h-4 w-4 text-[var(--color-secondaryBg)]" />
            <span className="text-sm text-white/70">Admin Access</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold">Welcome Back 👋</h1>

          <p className="mt-2 text-white/60 text-sm">
            Sign in to manage your portfolio
          </p>
        </div>

        {/* form */}
        <form className="space-y-5">
          {/* email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 py-3 text-white outline-none focus:border-yellow-400/40 transition"
            />
          </div>

          {/* password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 py-3 text-white outline-none focus:border-yellow-400/40 transition"
            />
          </div>

          {/* button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-2xl bg-[var(--color-secondaryBg)] py-3 font-semibold text-black hover:bg-yellow-300 transition"
          >
            Sign In
          </motion.button>
        </form>

        {/* footer */}
        <div className="mt-6 text-center text-xs text-white/40">
          Protected admin area • Unauthorized access prohibited
        </div>
      </motion.div>
    </div>
  );
}
