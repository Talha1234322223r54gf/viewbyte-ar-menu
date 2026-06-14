const cards = [
  ["🏪", "2", "Total Restaurants"],
  ["✅", "2", "Approved"],
  ["⏳", "0", "Pending Review"],
  ["📈", "10", "Total Menu Items"],
  ["⌗", "2,817", "Total QR Scans"],
  ["👥", "—", "Registered Users"],
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex">
        <aside className="min-h-screen w-72 border-r bg-white p-6">
          <h2 className="text-2xl font-bold text-blue-700">⚡ ViewBite</h2>
          <p className="text-sm text-red-500">Admin Panel</p>

          <nav className="mt-10 space-y-3 font-semibold text-slate-600">
            <a
              href="/admin"
              className="block rounded-2xl bg-red-50 px-5 py-4 text-red-600"
            >
              Overview
            </a>

            <a href="/admin/menu-items" className="block px-5 py-4">
              Menu Items
            </a>

            <a href="/admin/categories" className="block px-5 py-4">
              Categories
            </a>

            <a href="/admin/qr" className="block px-5 py-4">
              QR Codes
            </a>

            <a href="/admin/analytics" className="block px-5 py-4">
              Analytics
            </a>

            <a href="/admin/subscription" className="block px-5 py-4">
              Subscription
            </a>

            <a href="/admin/settings" className="block px-5 py-4">
              Settings
            </a>

            <a href="/admin/upload-model" className="block px-5 py-4">
              3D Upload
            </a>
          </nav>
        </aside>

        <section className="flex-1 p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-slate-950">
              Overview
            </h1>

            <span className="rounded-full bg-red-100 px-5 py-2 font-bold text-red-500">
              Admin Access
            </span>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold text-slate-950">
              Platform Overview
            </h2>

            <p className="mt-2 text-slate-500">
              Key admin metrics and shortcuts for managing restaurants, users,
              and support.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {cards.map(([icon, value, label]) => (
              <div
                key={label}
                className="rounded-[2rem] bg-white p-8 shadow-sm"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-8 text-4xl font-bold text-slate-950">
                  {value}
                </h3>

                <p className="mt-2 text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              ["Manage Menu Items", "/admin/menu-items"],
              ["QR Code Generator", "/admin/qr"],
              ["Analytics Dashboard", "/admin/analytics"],
            ].map(([item, link]) => (
              <a
                key={item}
                href={link}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-bold text-slate-900">{item}</h3>
                <p className="mt-1 text-slate-500">Open section</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}