import { Orbitron, Share_Tech_Mono } from "next/font/google";
import type { CSSProperties } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-orbitron",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tech",
});

const glitchLayers: {
  id: string;
  className: string;
  style: CSSProperties;
}[] = [
  { id: "base", className: "relative z-20", style: {} },
  {
    id: "cyan",
    className: "glitch-layer glitch-layer-1",
    style: {
      filter: "drop-shadow(0 0 12px rgba(90,204,255,0.45))",
    },
  },
  {
    id: "magenta",
    className: "glitch-layer glitch-layer-2",
    style: {
      filter: "drop-shadow(0 0 18px rgba(255,64,180,0.45))",
    },
  },
];

function Emblem({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      style={style}
      role="img"
      aria-labelledby="emblem-title"
    >
      <title id="emblem-title">BWA angelic glitch emblem</title>
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#b6f5ff" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#5fe1ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#020915" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wingGradient" x1="20%" x2="80%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0ff" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#9df" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2cf" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="glyphStroke" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.92" />
          <stop offset="50%" stopColor="#8de0ff" stopOpacity="0.82" />
          <stop offset="100%" stopColor="#ff66d4" stopOpacity="0.8" />
        </linearGradient>
        <filter id="blurGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#blurGlow)">
        <circle cx="200" cy="210" r="132" fill="url(#coreGlow)" opacity="0.7" />
      </g>
      <g stroke="url(#glyphStroke)" strokeWidth="1.8" strokeLinejoin="round">
        <path
          d="M200 152 L150 112 L102 146 L154 206 L96 222 L172 262 L118 280 L186 304 L144 334 L200 306 Z"
          fill="url(#wingGradient)"
          opacity="0.85"
        />
        <path
          d="M200 152 L250 112 L298 146 L246 206 L304 222 L228 262 L282 280 L214 304 L256 334 L200 306 Z"
          fill="url(#wingGradient)"
          opacity="0.85"
        />
        <path
          d="M200 136 C186 166 174 214 174 246 C174 268 186 290 200 298 C214 290 226 268 226 246 C226 214 214 166 200 136 Z"
          fill="#081322"
          opacity="0.95"
        />
        <path
          d="M200 136 C192 150 186 176 186 190 C186 208 194 218 200 222 C206 218 214 208 214 190 C214 176 208 150 200 136 Z"
          fill="#0f1d33"
        />
        <circle cx="200" cy="114" r="20" fill="#080f1e" stroke="url(#glyphStroke)" strokeWidth="1.2" />
        <ellipse
          cx="200"
          cy="92"
          rx="46"
          ry="12"
          fill="none"
          stroke="url(#glyphStroke)"
          strokeWidth="1.2"
        />
        <path
          d="M130 188 L154 206 L136 236"
          stroke="url(#glyphStroke)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.65"
        />
        <path
          d="M270 188 L246 206 L264 236"
          stroke="url(#glyphStroke)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.65"
        />
        <path
          d="M172 270 L200 254 L228 270"
          stroke="url(#glyphStroke)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.65"
        />
        <line
          x1="200"
          y1="172"
          x2="200"
          y2="212"
          stroke="url(#glyphStroke)"
          strokeWidth="1.4"
          opacity="0.65"
        />
        <line
          x1="162"
          y1="246"
          x2="238"
          y2="246"
          stroke="url(#glyphStroke)"
          strokeWidth="1.4"
          opacity="0.4"
          strokeDasharray="12 6"
        />
      </g>
      <g>
        <text
          x="200"
          y="272"
          textAnchor="middle"
          fontSize="64"
          letterSpacing="12"
          fill="#f2fbff"
          opacity="0.9"
          style={{
            fontFamily: "var(--font-orbitron), 'Orbitron', 'Share Tech Mono', monospace",
          }}
        >
          BWA
        </text>
        <text
          x="200"
          y="302"
          textAnchor="middle"
          fontSize="14"
          letterSpacing="8"
          fill="#7db6d9"
          opacity="0.7"
          style={{
            fontFamily: "var(--font-tech), 'Share Tech Mono', monospace",
          }}
        >
          BROKEN WINGED ANGEL
        </text>
      </g>
      <g stroke="url(#glyphStroke)" strokeWidth="1.2" opacity="0.4" strokeLinecap="round">
        <polyline points="108,122 96,98 128,88" />
        <polyline points="292,122 304,98 272,88" />
        <polyline points="120,306 96,322 132,344" />
        <polyline points="280,306 304,322 268,344" />
      </g>
      <g opacity="0.35">
        <rect x="90" y="156" width="16" height="4" fill="#5fe1ff" />
        <rect x="294" y="244" width="12" height="3" fill="#ff66d4" />
        <rect x="192" y="330" width="24" height="3" fill="#5fe1ff" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div
      className={`${orbitron.variable} ${shareTechMono.variable} relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020409] text-white`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1c2b4ea0,transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#050f24cc,transparent_55%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,255,199,0.08)_0deg,transparent_120deg,rgba(140,0,255,0.12)_240deg,transparent_360deg)] animate-slow-spin" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light" />
      <div className="noise pointer-events-none absolute inset-0 opacity-18" />

      <main className="relative z-10 flex flex-col items-center gap-10 px-6 py-20 text-center sm:px-12">
        <div className="relative flex items-center justify-center">
          <div className="glitch-wrapper relative h-[320px] w-[320px] sm:h-[420px] sm:w-[420px]">
            {glitchLayers.map(({ id, className, style }) => (
              <Emblem
                key={id}
                className={`glitch-svg ${className}`}
                style={style}
              />
            ))}
          </div>
          <div className="absolute -inset-6 rounded-full border border-cyan-500/30 blur-xl" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="font-orbitron text-3xl uppercase tracking-[0.4em] text-cyan-100 sm:text-4xl">
            Binary Winged Anomaly
          </h1>
          <p className="font-tech text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
            Cybernetic herald of the BWA collective
          </p>
        </div>

        <div className="grid gap-5 text-left sm:grid-cols-3 sm:gap-8">
          <div className="info-card">
            <h2 className="info-title">Angel Core</h2>
            <p className="info-body">
              A guardian algorithm forged from fractured wings and luminous
              prophecy. Monitors threat vectors across encrypted skies.
            </p>
          </div>
          <div className="info-card">
            <h2 className="info-title">Glitch Field</h2>
            <p className="info-body">
              Phase-shifted neon trails generate protective interference,
              masking signatures beneath cascading spectral noise.
            </p>
          </div>
          <div className="info-card">
            <h2 className="info-title">Cipher Mark</h2>
            <p className="info-body">
              The BWA insignia binds encrypted kin. A clean vector emblem cut
              for clandestine deployment across the grid.
            </p>
          </div>
        </div>
      </main>

      <div className="absolute bottom-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-zinc-600 sm:text-xs">
        <span className="h-px w-12 bg-cyan-400/60" />
        <span className="font-tech">Protocol BWA.404 // Ghostline Access</span>
        <span className="h-px w-12 bg-fuchsia-400/50" />
      </div>
    </div>
  );
}
