import Link from "next/link";
import { projects, experience, testimonials, videos } from "./sampleData";

export default function AdminPage() {
  const stats = [
    { label: "Projects", value: projects.length },
    { label: "Experience", value: experience.length },
    { label: "Testimonials", value: testimonials.length },
    { label: "Videos", value: videos.length },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold">Welcome Back 👋</h2>

      <p className="text-white/60 mt-2">
        Manage your portfolio content from here.
      </p>

      {/* stats */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-white/60">{item.label}</h3>
            <p className="text-3xl font-bold mt-2 text-[var(--color-secondaryBg)]">
              {item.value}
            </p>
            <Link
              href={`/admin/user/${item.label.toLowerCase()}`}
              className="text-sm text-white/60 mt-3 inline-block hover:text-white"
            >
              Manage {item.label}
            </Link>
          </div>
        ))}
      </div>

      {/* projects preview */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Recent Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {projects.slice(0, 3).map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <h4 className="font-bold text-[var(--color-secondaryBg)]">
                {p.title}
              </h4>
              <p className="text-white/60 text-sm">{p.stack}</p>
              <p className="mt-2 text-sm">Status: {p.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
