const categories = [
  ["🍔", "Burgers", "4 items"],
  ["🍕", "Pizza", "3 items"],
  ["🍟", "Sides", "2 items"],
  ["🥤", "Drinks", "1 item"],
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-4xl font-extrabold text-slate-950">Categories</h1>
      <p className="mt-2 text-slate-500">Organize restaurant menu items by category.</p>

      <div className="mt-10 grid grid-cols-4 gap-6">
        {categories.map(([icon, name, count]) => (
          <div key={name} className="rounded-[2rem] bg-white p-8 shadow-sm">
            <div className="text-5xl">{icon}</div>
            <h2 className="mt-8 text-2xl font-bold">{name}</h2>
            <p className="mt-2 text-slate-500">{count}</p>
            <button className="mt-6 rounded-full border px-5 py-2 font-semibold">Manage</button>
          </div>
        ))}
      </div>
    </main>
  );
}