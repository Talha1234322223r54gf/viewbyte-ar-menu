"use client";

import { useEffect } from "react";

export default function ModelViewer({ src, alt }) {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-[1.25rem] border border-[#111827]/10 bg-white/95">
      <model-viewer
        src={src}
        alt={alt}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1"
        style={{
          width: "100%",
          height: "min(80vh,720px)",
          backgroundColor: "#FFFFFF",
        }}
      />
    </div>
  );
}