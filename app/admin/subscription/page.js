const plans = [
  ["Monthly", "$19", ["1 restaurant", "20 menu items", "QR menu", "Basic analytics"]],
  ["Yearly", "$149", ["3 restaurants", "100 menu items", "AR models", "Advanced analytics"]],
  ["Lifetime", "$399", ["Unlimited menus", "AR uploads", "Priority support", "Full dashboard"]],
];

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-4xl font-extrabold text-slate-950">Subscription Billing</h1>
      <p className="mt-2 text-slate-500">Monthly, yearly, and lifetime SaaS pricing plans.</p>

      <div className="mt-10 grid grid-cols-3 gap-6">
        {plans.map(([name, price, features]) => (
          <div key={name} className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">{name}</h2>
            <h3 className="mt-6 text-5xl font-extrabold text-blue-600">{price}</h3>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature}>✅ {feature}</li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-full bg-blue-600 py-3 font-bold text-white">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}