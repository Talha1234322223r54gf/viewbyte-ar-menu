import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 px-4 py-10">
      <div className="mx-auto max-w-xl text-center">
        <Link href="/" className="inline-flex items-center gap-3 text-3xl font-bold text-blue-700">
          <span className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-2 text-white">⚡</span>
          ViewBite
        </Link>

        <h1 className="mt-10 text-5xl font-extrabold text-slate-950">Welcome back</h1>
        <p className="mt-4 text-xl text-slate-600">Sign in to your ViewBite account</p>

        <div className="mt-10 rounded-[2rem] border border-blue-200 bg-white p-8 text-left shadow-xl">
          <label className="font-semibold text-slate-900">Email Address</label>
          <input className="mt-3 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500" placeholder="you@restaurant.com" />

          <label className="mt-6 block font-semibold text-slate-900">Password</label>
          <input type="password" className="mt-3 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-blue-500" placeholder="••••••••" />

          <div className="mt-5 flex items-center justify-between">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" /> Remember me
            </label>
            <a className="font-semibold text-blue-600">Forgot password?</a>
          </div>

          <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 py-4 font-bold text-white shadow-lg">
            ⚡ Sign In
          </button>

          <p className="mt-6 text-center text-slate-600">
            Don&apos;t have an account? <Link href="/sign-up" className="font-bold text-blue-600">Sign up free</Link>
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
            <p className="font-semibold">🔑 Demo Credentials</p>
            <p className="mt-2">Owner: owner@demo.com / password123</p>
            <p>Admin: admin@demo.com / password123</p>
          </div>
        </div>
      </div>
    </main>
  );
}