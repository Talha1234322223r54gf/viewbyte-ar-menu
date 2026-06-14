"use client";

import "@google/model-viewer";

export default function ModelViewer({ src, alt }) {
  const isSketchfab = src.includes("sketchfab.com");

  if (isSketchfab) {
    return (
      <iframe
        title={alt}
        src={src}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        className="h-full min-h-[520px] w-full rounded-3xl border"
      />
    );
  }

  return (
    <model-viewer
      src={src}
      alt={alt}
      camera-controls
      auto-rotate
      ar
      shadow-intensity="1"
      exposure="1"
      class="h-full min-h-[520px] w-full rounded-3xl"
    />
  );
}