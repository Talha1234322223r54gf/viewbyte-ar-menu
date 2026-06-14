export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-4xl font-extrabold text-slate-950">Settings</h1>
      <p className="mt-2 text-slate-500">Restaurant profile, AR settings, and offline caching.</p>

      <div className="mt-10 grid grid-cols-2 gap-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Restaurant Profile</h2>

          <label className="mt-6 block font-semibold">Restaurant Name</label>
          <input className="mt-2 w-full rounded-2xl border px-5 py-4" defaultValue="Spice Garden" />

          <label className="mt-6 block font-semibold">Menu URL</label>
          <input className="mt-2 w-full rounded-2xl border px-5 py-4" defaultValue="/menu/demo-restaurant" />

          <label className="mt-6 block font-semibold">Email</label>
          <input className="mt-2 w-full rounded-2xl border px-5 py-4" defaultValue="owner@demo.com" />

          <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 font-bold text-white">
            Save Changes
          </button>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Offline Caching</h2>
            <p className="mt-2 text-slate-500">Last menu cached for 30 minutes.</p>
            <p className="mt-5 font-bold text-green-600">Enabled</p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">AR Model Quality</h2>
            <p className="mt-2 text-slate-500">Optimized GLB models for faster WebAR loading.</p>
            <p className="mt-5 font-bold text-blue-600">High Quality</p>
          </div>
        </div>
      </div>
    </main>
  );
}