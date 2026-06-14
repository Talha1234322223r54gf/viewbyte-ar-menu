export default function AnalyticsPage() {
  const topItems = [
    ["Butter Chicken", "343 views", "$18.99"],
    ["Lamb Biryani", "289 views", "$22.50"],
    ["Samosa", "195 views", "$9.99"],
  ];

  return (
    <main className="min-h-screen bg-blue-50">
      <div className="flex">
        <aside className="min-h-screen w-72 border-r bg-white p-6">
          <h2 className="text-2xl font-bold text-blue-700">⚡ ViewBite</h2>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Main Menu</p>
          <nav className="mt-6 space-y-4 font-semibold text-slate-600">
            <a className="block">Overview</a>
            <a className="block">Menu Items</a>
            <a className="block">Categories</a>
            <a className="block">QR Codes</a>
            <a className="block rounded-2xl bg-violet-100 px-5 py-4 text-violet-600">Analytics</a>
            <a className="block">Subscription</a>
          </nav>
        </aside>

        <section className="flex-1 p-10">
          <h1 className="text-4xl font-extrabold text-slate-950">Overview</h1>
          <p className="mt-2 text-slate-500">Restaurant Owner Portal</p>

          <h2 className="mt-12 text-3xl font-bold">Spice Garden 🍽️</h2>
          <p className="mt-2 text-slate-500">Here&apos;s your performance overview</p>

          <div className="mt-8 grid grid-cols-4 gap-6">
            {[
              ["1,854", "Total QR Scans"],
              ["12", "Period Scans"],
              ["428", "AR Views"],
              ["12", "Menu Views"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-4xl font-bold">{value}</h3>
                <p className="mt-2 text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold">Scan Trends</h2>
              <div className="mt-8 h-72 rounded-2xl border bg-gradient-to-t from-blue-50 to-white p-6">
                <div className="mt-40 h-2 w-full rounded bg-blue-600"></div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold">Top Menu Items</h2>
              <div className="mt-6 space-y-5">
                {topItems.map(([name, views, price], i) => (
                  <div key={name} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                    <div>
                      <p className="font-bold">{i + 1}. {name}</p>
                      <p className="text-sm text-slate-500">{views}</p>
                    </div>
                    <p className="font-bold text-violet-600">{price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}