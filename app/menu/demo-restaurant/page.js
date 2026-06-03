import Image from "next/image";
import Link from "next/link";
import { dishes } from "../../lib/dishes";

const categories = ["Burgers", "Pizza", "Sides"];

export default function DemoRestaurantMenuPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-8xl space-y-8">
        <section className="rounded-[2rem] border border-[#111827]/10 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.4em] text-[#111827]/50">Demo Restaurant</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl">
                A premium AR dining menu for modern restaurants.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#111827]/70">
                Scan the QR code, browse curated dishes, and preview each meal in AR before it reaches the table.
              </p>
            </div>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[#111827]/10 bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-white/95"
              >
              Back to homepage
            </Link>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.75rem] border border-[#111827]/10 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-[#111827]/60">Search</p>
              <div className="mt-3 flex items-center gap-3 rounded-[1.5rem] border border-[#111827]/10 bg-white/95 px-4 py-3">
                <span className="text-lg font-semibold text-[#2563EB]">🔍</span>
                <input
                  type="search"
                  placeholder="Search dishes, ingredients, or allergens..."
                  className="w-full bg-transparent text-[#111827] placeholder:text-[#111827]/50 outline-none"
                />
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#111827]/10 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-[#111827]/60">Categories</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <span
                    key={category}
                    className={`rounded-full border px-4 py-2 text-sm font-medium ${index === 0 ? "border-[#2563EB] bg-[#2563EB] text-white" : "border-[#111827]/10 bg-white text-[#111827]"}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="overflow-hidden rounded-[1.5rem] border border-[#111827]/8 bg-white shadow-[0_10px_30px_rgba(17,24,39,0.05)] transition-transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-72 w-full overflow-hidden bg-white/95">
                <Image
                  src={dish.imageUrl}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="space-y-4 p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#111827]/50">{dish.category}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-[#111827]">{dish.name}</h2>
                  </div>
                  <span className="rounded-full border border-[#111827]/8 bg-white px-3 py-1 text-sm font-semibold text-[#111827]">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-sm leading-6 text-[#111827]/70">{dish.description}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {dish.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="rounded-full border border-[#111827]/10 bg-white/95 px-3 py-1 text-[#111827]/80"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/ar/${dish.id}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]/90 mt-4"
                >
                  View in AR
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
