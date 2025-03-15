"use client"

import type React from "react"

interface StaticBackgroundProps {
  imageUrl: string
  children: React.ReactNode
  overlay?: boolean
  overlayColor?: string
}

export default function StaticBackground({
  imageUrl,
  children,
  overlay = true,
  overlayColor = "rgba(0, 0, 0, 0.5)",
}: StaticBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Fixed position background container */}
      <div
        className="fixed inset-0 z-0 overflow-hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {/* The actual image */}
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Optional overlay */}
        {overlay && <div className="absolute inset-0" style={{ backgroundColor: overlayColor }}></div>}
      </div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  )
}

