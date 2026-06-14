export default function HomePage() {
  const demoLinks = [
    ["Menu", "/menu/demo-restaurant"],
    ["Burger AR", "/ar/burger"],
    ["Pizza AR", "/ar/pizza"],
    ["Chicken AR", "/ar/chicken"],
    ["Admin", "/admin"],
    ["QR", "/admin/qr"],
    ["Analytics", "/admin/analytics"],
    ["Upload 3D", "/admin/upload-model"],
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <header className="sticky top-0 z-50 border-b bg-white/95 px-4 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 font-black text-white">
              V
            </span>
            <div>
              <p className="text-lg font-black">ViewBite</p>
              <p className="text-xs text-slate-500">AR Restaurant Menu</p>
            </div>
          </a>

          <a
            href="/menu/demo-restaurant"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white"
          >
            Demo
          </a>
        </div>
      </header>

      <section className="px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-600 shadow-sm">
                FYP-1 Demonstration
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Scan. View. Experience Food in AR.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                ViewBite turns restaurant menus into app-free WebAR experiences.
                Customers scan a QR code, browse dishes, and preview food in 3D
                before ordering.
              </p>

              <div className="mt-7 grid gap-3 sm:flex">
                <a
                  href="/menu/demo-restaurant"
                  className="rounded-2xl bg-blue-600 px-7 py-4 text-center font-bold text-white shadow-sm"
                >
                  Open Customer Menu
                </a>

                <a
                  href="/ar/burger"
                  className="rounded-2xl bg-white px-7 py-4 text-center font-bold text-slate-900 shadow-sm ring-1 ring-slate-200"
                >
                  View Burger AR
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-4 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 sm:p-6">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80"
                alt="Burger preview"
                className="h-64 w-full rounded-[1.5rem] object-cover sm:h-80"
              />

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-blue-600">
                    Demo Restaurant
                  </p>
                  <h2 className="mt-1 text-2xl font-black">
                    Classic Beef Burger
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Ingredients, allergens, calories and interactive 3D preview.
                  </p>
                </div>

                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-black text-white">
                  AR
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-lg font-black">$12.90</p>
                  <p className="text-xs text-slate-500">Price</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-lg font-black">780</p>
                  <p className="text-xs text-slate-500">Calories</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-lg font-black">GLB</p>
                  <p className="text-xs text-slate-500">Model</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["QR Access", "Open menu instantly without app install."],
              ["WebAR Preview", "View dishes as interactive 3D models."],
              ["Admin Tools", "Menu, QR, analytics and upload screens."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <section className="mt-10 rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold text-blue-600">
                  Presentation Links
                </p>
                <h2 className="mt-1 text-3xl font-black">Demo Screens</h2>
              </div>
              <p className="text-sm text-slate-500">
                Open all screens from one place.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {demoLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-2xl bg-slate-50 px-4 py-4 text-center text-sm font-black ring-1 ring-slate-200 transition hover:bg-blue-600 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}