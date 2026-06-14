export default function HomePage() {
  const demoLinks = [
    ["Customer Menu", "/menu/demo-restaurant"],
    ["Burger AR", "/ar/burger"],
    ["Pizza AR", "/ar/pizza"],
    ["Fries AR", "/ar/fries"],
    ["Chicken AR", "/ar/chicken"],
    ["Dessert AR", "/ar/dessert"],
    ["Sign In", "/sign-in"],
    ["Sign Up", "/sign-up"],
    ["Admin Dashboard", "/admin"],
    ["Menu Items CRUD", "/admin/menu-items"],
    ["Categories", "/admin/categories"],
    ["QR Codes", "/admin/qr"],
    ["Analytics", "/admin/analytics"],
    ["Subscription", "/admin/subscription"],
    ["Settings", "/admin/settings"],
    ["3D Upload", "/admin/upload-model"],
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <header className="mx-auto flex max-w-7xl flex-col gap-5 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="flex items-center gap-3">
          <span className="rounded-xl border px-3 py-2 font-bold">AR</span>
          <div>
            <p className="text-xl font-bold">ViewBite</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Restaurant SaaS
            </p>
          </div>
        </a>

        <nav className="flex flex-wrap justify-center gap-4 text-sm font-semibold sm:justify-end">
          <a href="/menu/demo-restaurant">Demo Menu</a>
          <a href="#screens">Demo Screens</a>
          <a href="/admin">Admin</a>
        </nav>
      </header>

      <section className="mx-auto mt-12 grid max-w-7xl gap-10 lg:mt-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            WebAR Restaurant Menus
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Bring Your Menu to Life with Augmented Reality
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Launch an app-free WebAR experience so diners can preview dishes,
            check allergens, scan QR codes, and view 3D food models instantly.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/menu/demo-restaurant"
              className="rounded-full bg-blue-600 px-8 py-4 text-center font-bold text-white"
            >
              View Demo Menu
            </a>

            <a
              href="/ar/burger"
              className="rounded-full border px-8 py-4 text-center font-bold"
            >
              Preview AR Dish
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="rounded-3xl border p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-bold">Demo Restaurant</p>
                <p className="text-sm text-slate-500">Live AR menu preview</p>
              </div>

              <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                AR
              </span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
              alt="Classic Beef Burger"
              className="mt-5 h-52 w-full rounded-3xl object-cover sm:h-64"
            />

            <div className="mt-4">
              <p className="font-bold">Classic Beef Burger</p>

              <p className="mt-1 text-sm text-slate-500">
                Juicy, handcrafted patty with signature sauce.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="w-fit rounded-full border px-4 py-2 font-bold">
                  $12.90
                </span>

                <a
                  href="/ar/burger"
                  className="rounded-full bg-blue-600 px-5 py-3 text-center font-bold text-white sm:py-2"
                >
                  View AR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {[
          ["QR Access", "Scan a code and open the menu instantly."],
          ["3D Food Preview", "Preview dishes in AR before ordering."],
          [
            "Allergen Details",
            "Show ingredient and allergen information clearly.",
          ],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="rounded-[2rem] border bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="font-bold text-blue-600">{title}</h3>
            <p className="mt-4 text-slate-600">{desc}</p>
          </div>
        ))}
      </section>

      <section
        id="screens"
        className="mx-auto mt-12 max-w-7xl rounded-[2rem] border bg-slate-50 p-5 sm:p-8 lg:mt-16"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          FYP Demo Navigation
        </p>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Demo Screens
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {demoLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t py-8 text-sm text-slate-500 sm:flex-row sm:justify-between lg:mt-16">
        <p>ViewBite — Premium WebAR restaurant product.</p>
        <p>FYP-1 Demonstration</p>
      </footer>
    </main>
  );
}