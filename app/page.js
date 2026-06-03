import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <div className="mx-auto max-w-8xl px-6 py-6 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-5 border-b border-[#111827]/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-3 text-[#111827]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#111827]/10 bg-white text-xl font-bold">
              AR
            </span>
            <div>
              <p className="text-xl font-semibold">AR Menu</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#111827]/60">Restaurant SaaS</p>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#111827]/80">
            <Link href="/menu/demo-restaurant" className="transition hover:text-[#111827]">
              Demo Menu
            </Link>
            <a href="#features" className="transition hover:text-[#111827]">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-[#111827]">
              How it works
            </a>
          </nav>
        </header>

        <section className="grid gap-8 py-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.36em] text-[#111827]/60">WebAR restaurant menus</p>
              <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-6xl">
                Bring Your Menu to Life with Augmented Reality
              </h1>
              <p className="text-base leading-7 text-[#111827]/70 max-w-prose">
                Launch a confident, app-free WebAR experience so diners can preview dishes, check allergens, and order with certainty.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/menu/demo-restaurant"
                className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]/90"
              >
                View Demo Menu
              </Link>
              <Link
                href="/ar/burger"
                className="inline-flex items-center justify-center rounded-full border border-[#111827]/10 bg-white px-7 py-3 text-sm font-semibold text-[#111827] transition hover:bg-white/95"
              >
                Preview AR Dish
              </Link>
            </div>
          </div>

            <div className="rounded-[1.5rem] border border-[#111827]/8 bg-white p-4 shadow-[0_6px_30px_rgba(17,24,39,0.06)]">
            <div className="flex items-center justify-between rounded-2xl border border-[#111827]/10 bg-white/95 p-3">
              <div>
                <p className="text-sm font-semibold text-[#111827]">Demo Restaurant</p>
                <p className="text-xs text-[#111827]/60">Live AR menu preview</p>
              </div>
              <span className="rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white">AR</span>
            </div>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl overflow-hidden">
                <div className="mx-auto w-[230px] sm:w-[280px] lg:w-[320px] rounded-2xl border border-[#111827]/8 bg-white shadow-[0_10px_40px_rgba(17,24,39,0.06)]">
                  <div className="h-40 w-full bg-[#F8FAFC] rounded-t-2xl" />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-[#111827]">Classic Beef Burger</p>
                    <p className="mt-2 text-sm text-[#111827]/70">Juicy, handcrafted patty with signature sauce.</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="rounded-full border border-[#111827]/8 px-3 py-1 text-sm font-semibold text-[#111827]">$12.99</span>
                      <button className="rounded-full bg-[#2563EB] px-3 py-1 text-sm font-semibold text-white">View AR</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-5 sm:grid-cols-3">
          {[
            { title: "QR Access", description: "Scan a code and open the menu instantly on any phone." },
            { title: "3D Food Preview", description: "Preview dishes in AR before the order is placed." },
            { title: "Allergen Details", description: "Show ingredient alerts clearly inside the menu." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-[2rem] border border-[#111827]/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#2563EB]">{feature.title}</p>
              <p className="mt-3 text-sm leading-6 text-[#111827]/70">{feature.description}</p>
            </div>
          ))}
        </section>

        <section id="how-it-works" className="mt-12 rounded-[2rem] border border-[#111827]/10 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#111827]/50">How it works</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111827]">Simple, modern restaurant AR flow</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { step: "1", label: "Scan QR" },
                { step: "2", label: "Browse Dishes" },
                { step: "3", label: "View in AR" },
              ].map((item) => (
                <div key={item.step} className="space-y-3 rounded-[1.75rem] border border-[#111827]/10 bg-white/95 p-5 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white">
                    {item.step}
                  </div>
                  <p className="text-sm font-semibold text-[#111827]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-[#111827]/10 pt-8 text-sm text-[#111827]/70">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>AR Menu — Premium WebAR restaurant product.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transition hover:text-[#111827]">Privacy</a>
              <a href="#" className="transition hover:text-[#111827]">Terms</a>
              <a href="#" className="transition hover:text-[#111827]">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
