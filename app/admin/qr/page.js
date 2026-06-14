export default function QRPage() {
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
            <a className="block rounded-2xl bg-violet-100 px-5 py-4 text-violet-600">QR Codes</a>
            <a className="block">Analytics</a>
            <a className="block">Subscription</a>
            <a className="block">Settings</a>
          </nav>
        </aside>

        <section className="flex-1 p-10">
          <h1 className="text-4xl font-extrabold text-slate-950">QR Codes</h1>
          <p className="mt-2 text-slate-500">Restaurant Owner Portal</p>

          <div className="mt-10 grid grid-cols-[1fr_1fr] gap-8">
            <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
              <div className="mx-auto grid h-64 w-64 grid-cols-8 gap-1 rounded-3xl bg-white p-6 shadow-lg">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={`${i % 3 === 0 || i % 7 === 0 ? "bg-slate-900" : "bg-white"} rounded-sm`} />
                ))}
              </div>
              <h2 className="mt-8 text-3xl font-bold">Spice Garden</h2>
              <p className="mt-2 text-slate-500">Scan to view AR menu</p>
              <button className="mt-8 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-12 py-4 font-bold text-white">
                Download PNG
              </button>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-bold">Menu Link</h2>
                <div className="mt-6 rounded-2xl border px-5 py-4 text-slate-600">
                  https://viewbite.vercel.app/menu/demo-restaurant
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-bold">QR Stats</h2>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-violet-50 p-6">
                    <h3 className="text-3xl font-bold text-violet-600">1854</h3>
                    <p>Total Scans</p>
                  </div>
                  <div className="rounded-2xl bg-violet-50 p-6">
                    <h3 className="text-3xl font-bold text-violet-600">428</h3>
                    <p>AR Views</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h2 className="text-3xl font-bold">Usage Tips</h2>
                <p className="mt-4 text-slate-500">Print and place QR codes on restaurant tables.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}