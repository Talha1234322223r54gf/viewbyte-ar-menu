import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 px-4 py-10">
      <div className="mx-auto max-w-xl text-center">
        <Link href="/" className="inline-flex items-center gap-3 text-3xl font-bold text-blue-700">
          <span className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-2 text-white">⚡</span>
          ViewBite
        </Link>

        <h1 className="mt-10 text-5xl font-extrabold text-slate-950">Create your account</h1>
        <p className="mt-4 text-lg text-slate-600">Start your free 14-day trial. No credit card required.</p>

        <div className="mt-10 rounded-[2rem] border border-blue-200 bg-white p-8 text-left shadow-xl">
          <p className="font-semibold text-slate-900">I am a...</p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-blue-300 bg-blue-50 p-4">
              <p className="font-bold text-slate-900">🏪 Restaurant Owner</p>
              <p className="mt-1 text-sm text-slate-500">Manage your menu and AR experience</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="font-bold text-slate-900">👥 Customer</p>
              <p className="mt-1 text-sm text-slate-500">Browse and order from AR menus</p>
            </div>
          </div>

          {["Full Name", "Email Address", "Password", "Confirm Password"].map((label) => (
            <div key={label} className="mt-5">
              <label className="font-semibold text-slate-900">{label}</label>
              <input
                type={label.includes("Password") ? "password" : "text"}
                className="mt-3 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500"
                placeholder={label}
              />
            </div>
          ))}

          <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 py-4 font-bold text-white shadow-lg">
            ⚡ Create Free Account
          </button>

          <p className="mt-6 text-center text-slate-600">
            Already have an account? <Link href="/sign-in" className="font-bold text-blue-600">Sign in</Link>
          </p>
        </div>
      </div>
    </main>
  );
}