const dishes = [
  ["Classic Beef Burger", "Burgers", "$12.90", "Wheat, Milk, Soy", "burger.glb", "Available"],
  ["Margherita Pizza", "Pizza", "$14.50", "Wheat, Milk", "pizza.glb", "Available"],
  ["Crispy Seasoned Fries", "Sides", "$6.25", "Soy", "fries.glb", "Available"],
];

export default function MenuItemsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-4xl font-extrabold text-slate-950">Menu Items</h1>
      <p className="mt-2 text-slate-500">Manage dishes, prices, allergens, and AR model status.</p>

      <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Dish CRUD Table</h2>
          <button className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white">+ Add Dish</button>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-sm uppercase tracking-widest text-slate-400">
              <th className="py-4">Dish</th>
              <th>Category</th>
              <th>Price</th>
              <th>Allergens</th>
              <th>Model</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {dishes.map((dish) => (
              <tr key={dish[0]} className="border-b">
                <td className="py-5 font-bold">{dish[0]}</td>
                <td>{dish[1]}</td>
                <td>{dish[2]}</td>
                <td>{dish[3]}</td>
                <td className="text-green-600">{dish[4]}</td>
                <td>{dish[5]}</td>
                <td className="space-x-2">
                  <button className="rounded-full border px-4 py-2 text-sm">Edit</button>
                  <button className="rounded-full border px-4 py-2 text-sm text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}