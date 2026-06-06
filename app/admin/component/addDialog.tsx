"use client";

import { useState } from "react";

type Column = { key: string; label: string };

type Props = {
  title?: string;
  columns: Column[];
  onAdd: (item: any) => void;
  onClose: () => void;
};

export default function AddDialog({
  title = "Add Item",
  columns,
  onAdd,
  onClose,
}: Props) {
  const [form, setForm] = useState<Record<string, any>>({});

  const handleChange = (key: string, value: any) => {
    setForm((s) => ({ ...s, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = String(Date.now());
    onAdd({ id, ...form });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl"
      >
        <h3 className="text-lg font-semibold mb-4">{title}</h3>

        <div className="space-y-3">
          {columns.map((col) => (
            <div key={col.key}>
              <label className="block text-white/70 text-sm mb-1">
                {col.label}
              </label>
              <input
                value={form[col.key] ?? ""}
                onChange={(e) => handleChange(col.key, e.target.value)}
                className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-white outline-none"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2">
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[var(--color-secondaryBg)] rounded-md"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
