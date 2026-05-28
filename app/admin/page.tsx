export default function AdminPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold">Welcome Back 👋</h2>

      <p className="text-white/60 mt-2">
        Manage your portfolio content from here.
      </p>

      {/* stats */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {[
          { label: "Projects", value: 12 },
          { label: "Experience", value: 3 },
          { label: "Testimonials", value: 5 },
          { label: "Videos", value: 8 },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-white/60">{item.label}</h3>
            <p className="text-3xl font-bold mt-2 text-[var(--color-secondaryBg)]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
