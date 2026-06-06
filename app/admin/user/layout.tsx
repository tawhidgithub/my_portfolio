export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-primaryBg)] text-white">
      <div className="flex">
        {/* sidebar */}
        <aside className="w-72 border-r border-white/10 p-6">
          <h1 className="text-xl font-bold">
            Admin <span className="text-[var(--color-secondaryBg)]">Panel</span>
          </h1>

          <nav className="mt-10 space-y-3 text-white/70">
            <a href="/admin/user" className="block hover:text-white">
              Dashboard
            </a>
            <a href="/admin/user/projects" className="block hover:text-white">
              Projects
            </a>
            <a href="/admin/user/experience" className="block hover:text-white">
              Experience
            </a>
            <a
              href="/admin/user/testimonials"
              className="block hover:text-white"
            >
              Testimonials
            </a>
            <a href="/admin/user/youtube" className="block hover:text-white">
              YouTube
            </a>
            <a href="/admin/user/skills" className="block hover:text-white">
              Skills
            </a>
            <a href="/admin/user/reviews" className="block hover:text-white">
              Reviews
            </a>
            <a href="/admin/user/images" className="block hover:text-white">
              Images
            </a>
          </nav>
        </aside>

        {/* main */}
        <main className="flex-1 p-10">{children}</main>
      </div>
    </div>
  );
}
