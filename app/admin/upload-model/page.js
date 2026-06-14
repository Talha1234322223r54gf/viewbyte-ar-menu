export default function UploadModelPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-4xl font-extrabold text-slate-950">3D Asset Upload</h1>
      <p className="mt-2 text-slate-500">Upload GLB/GLTF models for AR dish visualisation.</p>

      <div className="mt-10 grid grid-cols-[1.2fr_0.8fr] gap-8">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <div className="rounded-[2rem] border-2 border-dashed border-blue-200 bg-blue-50 p-16 text-center">
            <div className="text-6xl">📦</div>
            <h2 className="mt-6 text-2xl font-bold">Upload GLB / GLTF Model</h2>
            <p className="mt-2 text-slate-500">Drag and drop model file here or select from device.</p>
            <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 font-bold text-white">
              Choose File
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Asset Status</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border p-5">
              <p className="font-bold">burger.glb</p>
              <p className="text-sm text-green-600">Approved • Active</p>
            </div>
            <div className="rounded-2xl border p-5">
              <p className="font-bold">pizza.glb</p>
              <p className="text-sm text-green-600">Approved • Active</p>
            </div>
            <div className="rounded-2xl border p-5">
              <p className="font-bold">fries.glb</p>
              <p className="text-sm text-green-600">Approved • Active</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}