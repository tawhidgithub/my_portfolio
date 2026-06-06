"use client";

import { motion } from "motion/react";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import AddDialog from "./addDialog";

type Column = {
  key: string;
  label: string;
};

type Props = {
  title: string;
  columns: Column[];
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: string) => void;
  onAdd?: (item: any) => void;
};

export default function AdminTable({
  title,
  columns,
  data,
  onEdit,
  onDelete,
  onAdd,
}: Props) {
  const [showAdd, setShowAdd] = useState(false);
  const handleAdd = (item: any) => {
    onAdd?.(item);
  };
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        {onAdd && (
          <button
            onClick={() => setShowAdd(true)}
            className="rounded-md bg-[var(--color-secondaryBg)] px-3 py-1 text-black"
          >
            + Add New
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-white/60 border-b border-white/10">
              {columns.map((col) => (
                <th key={col.key} className="py-3">
                  {col.label}
                </th>
              ))}
              <th className="py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <motion.tr
                key={item.id || index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-b border-white/10"
              >
                {columns.map((col) => (
                  <td key={col.key} className="py-4 text-white/70">
                    {item[col.key]}
                  </td>
                ))}

                <td className="flex gap-3 py-4">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-yellow-400 hover:scale-110 transition"
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-400 hover:scale-110 transition"
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAdd && onAdd && (
        <AddDialog
          title={`Add ${title}`}
          columns={columns}
          onAdd={handleAdd}
          onClose={() => setShowAdd(false)}
        />
      )}
    </div>
  );
}
