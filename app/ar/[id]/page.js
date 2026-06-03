import Link from "next/link";
import { notFound } from "next/navigation";
import ModelViewer from "../../components/ModelViewer";
import { dishes } from "../../lib/dishes";

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((item) => item.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#111827] px-4 py-8 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-8xl space-y-8">
        <div className="rounded-[1.5rem] border border-[#111827]/8 bg-white p-6 shadow-[0_12px_40px_rgba(17,24,39,0.06)]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#111827]/60">{dish.category}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl">{dish.name}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#111827]/70">{dish.description}</p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#111827]/8 bg-white/95 px-5 py-2 text-lg font-semibold text-[#111827]">
              <span>${dish.price.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-8 lg:mt-10 grid gap-8 lg:grid-cols-[1.6fr_0.9fr] items-start">
            <div className="rounded-lg overflow-hidden border border-[#111827]/8 bg-white p-4 shadow-[0_20px_60px_rgba(17,24,39,0.06)]">
              <div className="overflow-hidden rounded-lg border border-[#111827]/10 bg-white/95">
                <div className="w-full">
                  <ModelViewer src={dish.modelUrl} alt={dish.name} />
                </div>
              </div>
              <div className="mt-4 rounded-md p-4">
                <p className="text-sm leading-6 text-[#111827]/70">
                  Drag to rotate, pinch to zoom. Use the AR action on supported devices to place the model in your space.
                </p>
                <p className="mt-2 text-xs text-[#111827]/50">3D model — replace with food model later.</p>
              </div>
            </div>

            <aside className="space-y-6 rounded-lg border border-[#111827]/8 bg-white p-6 shadow-[0_12px_40px_rgba(17,24,39,0.04)]">
              <div className="space-y-3 rounded-md p-4 border border-[#111827]/10 bg-white/95">
                <h2 className="text-sm uppercase tracking-[0.35em] text-[#111827]/60">Nutrition</h2>
                <p className="mt-3 text-2xl font-semibold text-[#111827]">{dish.calories} kcal</p>
              </div>

              <div className="space-y-3 rounded-md p-4 border border-[#111827]/10 bg-white/95">
                <h3 className="text-sm uppercase tracking-[0.35em] text-[#111827]/60">Ingredients</h3>
                <ul className="space-y-2 text-sm leading-6 text-[#111827]/80">
                  {dish.ingredients.map((ingredient) => (
                    <li key={ingredient} className="ml-5 list-disc">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 rounded-md p-4 border border-[#111827]/10 bg-white/95">
                <h3 className="text-sm uppercase tracking-[0.35em] text-[#111827]/60">Allergens</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="rounded-full border border-[#111827]/10 bg-white px-3 py-1 text-xs text-[#111827]/80"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/menu/demo-restaurant"
              className="inline-flex items-center justify-center rounded-full border border-[#111827]/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-white/95"
            >
              Back to demo restaurant
            </Link>

            <a
              href={dish.modelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]/90"
            >
              Open full model
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
