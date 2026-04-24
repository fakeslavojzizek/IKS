import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "assess",
    label: "Step 1: Assessment",
    description:
      "The surgeon assesses the nasal defect and creates a leaf-shaped template measuring the exact dimensions of the missing tissue.",
    svgContent: (
      <g>
        <ellipse
          cx="200"
          cy="180"
          rx="90"
          ry="110"
          fill="oklch(0.88 0.06 65)"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2"
        />
        <ellipse cx="170" cy="160" rx="15" ry="8" fill="oklch(0.35 0.08 50)" />
        <ellipse cx="230" cy="160" rx="15" ry="8" fill="oklch(0.35 0.08 50)" />
        <path
          d="M 200 200 L 185 235 L 200 240 L 215 235 Z"
          fill="oklch(0.75 0.10 30 / 0.4)"
          stroke="oklch(0.55 0.15 30)"
          strokeWidth="2"
          strokeDasharray="4,2"
        />
        <path
          d="M 180 265 Q 200 278 220 265"
          fill="none"
          stroke="oklch(0.35 0.08 50)"
          strokeWidth="2"
        />
        <text
          x="270"
          y="220"
          fontFamily="serif"
          fontSize="11"
          fill="oklch(0.55 0.15 30)"
        >
          ← Leaf
        </text>
        <text
          x="270"
          y="235"
          fontFamily="serif"
          fontSize="11"
          fill="oklch(0.55 0.15 30)"
        >
          template
        </text>
        <ellipse
          cx="330"
          cy="260"
          rx="20"
          ry="12"
          fill="oklch(0.72 0.18 80 / 0.6)"
          stroke="oklch(0.55 0.15 30)"
          strokeWidth="1.5"
        />
        <text
          x="80"
          y="340"
          fontFamily="serif"
          fontSize="12"
          fill="oklch(0.50 0.12 70)"
        >
          Defect measured precisely using leaf template
        </text>
      </g>
    ),
  },
  {
    id: "design",
    label: "Step 2: Flap Design",
    description:
      "A pedicled forehead flap is designed with the pedicle at the root of the nose, maintaining blood supply through the supratrochlear vessels.",
    svgContent: (
      <g>
        <ellipse
          cx="200"
          cy="220"
          rx="90"
          ry="110"
          fill="oklch(0.88 0.06 65)"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2"
        />
        <ellipse
          cx="200"
          cy="130"
          rx="80"
          ry="60"
          fill="oklch(0.88 0.06 65)"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2"
        />
        <path
          d="M 185 90 Q 195 70 205 70 Q 215 70 225 90 L 230 140 L 170 140 Z"
          fill="oklch(0.68 0.18 30 / 0.35)"
          stroke="oklch(0.55 0.15 30)"
          strokeWidth="2.5"
          strokeDasharray="5,2"
        />
        <line
          x1="200"
          y1="140"
          x2="200"
          y2="185"
          stroke="oklch(0.55 0.15 30)"
          strokeWidth="3"
        />
        <path
          d="M 196 140 Q 194 160 196 175"
          stroke="oklch(0.65 0.20 20)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 204 140 Q 206 160 204 175"
          stroke="oklch(0.65 0.20 20)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 190 220 L 180 250 L 200 255 L 220 250 L 210 220 Z"
          fill="oklch(0.75 0.10 30 / 0.4)"
          stroke="oklch(0.55 0.15 30)"
          strokeWidth="2"
        />
        <ellipse cx="173" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <ellipse cx="227" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <text
          x="50"
          y="170"
          fontFamily="serif"
          fontSize="11"
          fill="oklch(0.65 0.20 20)"
        >
          Pedicle (blood supply)
        </text>
      </g>
    ),
  },
  {
    id: "elevate",
    label: "Step 3: Flap Elevation",
    description:
      "The skin flap is carefully raised from the forehead, preserving the subcutaneous tissue and the vascular pedicle at its base.",
    svgContent: (
      <g>
        <ellipse
          cx="200"
          cy="220"
          rx="90"
          ry="110"
          fill="oklch(0.88 0.06 65)"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2"
        />
        <ellipse
          cx="200"
          cy="130"
          rx="80"
          ry="60"
          fill="oklch(0.88 0.06 65)"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2"
        />
        <path
          d="M 185 90 Q 195 70 205 70 Q 215 70 225 90 L 230 140 L 220 145 Q 205 150 195 150 Q 180 145 170 140 Z"
          fill="oklch(0.75 0.12 30 / 0.7)"
          stroke="oklch(0.50 0.10 30)"
          strokeWidth="2"
        />
        <path
          d="M 185 92 Q 200 73 225 92 L 226 138 L 174 138 Z"
          fill="oklch(0.65 0.18 20 / 0.3)"
          stroke="oklch(0.55 0.15 30)"
          strokeWidth="1.5"
          strokeDasharray="3,2"
        />
        <path
          d="M 190 148 Q 192 165 190 180"
          stroke="oklch(0.65 0.20 20)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 210 148 Q 208 165 210 180"
          stroke="oklch(0.65 0.20 20)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="173" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <ellipse cx="227" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <path
          d="M 190 220 L 180 250 L 200 255 L 220 250 L 210 220 Z"
          fill="oklch(0.65 0.18 20 / 0.3)"
          stroke="oklch(0.55 0.15 30)"
          strokeWidth="2"
        />
        <text
          x="90"
          y="355"
          fontFamily="serif"
          fontSize="12"
          fill="oklch(0.50 0.12 70)"
        >
          Flap elevated — ready for rotation
        </text>
      </g>
    ),
  },
  {
    id: "rotate",
    label: "Step 4: Flap Rotation",
    description:
      "The flap is carefully rotated 180° downward and folded over to cover the nasal defect while maintaining blood supply through the pedicle.",
    svgContent: (
      <g>
        <defs>
          <marker
            id="arrow2"
            markerWidth="8"
            markerHeight="6"
            refX="0"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="oklch(0.50 0.12 70)" />
          </marker>
        </defs>
        <ellipse
          cx="200"
          cy="220"
          rx="90"
          ry="110"
          fill="oklch(0.88 0.06 65)"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2"
        />
        <path
          d="M 185 90 Q 200 72 225 90 L 226 138 L 174 138 Z"
          fill="oklch(0.65 0.18 20 / 0.2)"
          stroke="oklch(0.55 0.15 30)"
          strokeWidth="1.5"
          strokeDasharray="3,2"
        />
        <ellipse cx="173" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <ellipse cx="227" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <path
          d="M 200 148 Q 230 175 200 218"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="5,3"
          markerEnd="url(#arrow2)"
        />
        <path
          d="M 190 218 L 180 248 L 200 253 L 220 248 L 210 218 Z"
          fill="oklch(0.75 0.12 30 / 0.7)"
          stroke="oklch(0.50 0.10 30)"
          strokeWidth="2.5"
        />
        <path
          d="M 190 218 Q 188 185 190 148"
          stroke="oklch(0.65 0.20 20)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 210 218 Q 212 185 210 148"
          stroke="oklch(0.65 0.20 20)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="300"
          y="235"
          fontFamily="serif"
          fontSize="11"
          fill="oklch(0.55 0.15 30)"
        >
          Flap covers defect
        </text>
      </g>
    ),
  },
  {
    id: "suture",
    label: "Step 5: Suturing",
    description:
      "The flap is sutured to the wound edges with fine cotton or hemp thread. Reed or bamboo tubes are inserted into the nostrils to maintain patency during healing.",
    svgContent: (
      <g>
        <ellipse
          cx="200"
          cy="220"
          rx="90"
          ry="110"
          fill="oklch(0.88 0.06 65)"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2"
        />
        <ellipse cx="173" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <ellipse cx="227" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <path
          d="M 190 218 L 181 248 L 192 255 L 208 255 L 219 248 L 210 218 Z"
          fill="oklch(0.72 0.12 32)"
          stroke="oklch(0.45 0.10 30)"
          strokeWidth="2.5"
        />
        <line
          x1="186"
          y1="220"
          x2="183"
          y2="225"
          stroke="oklch(0.35 0.08 50)"
          strokeWidth="1.5"
        />
        <line
          x1="190"
          y1="220"
          x2="187"
          y2="225"
          stroke="oklch(0.35 0.08 50)"
          strokeWidth="1.5"
        />
        <line
          x1="194"
          y1="220"
          x2="191"
          y2="225"
          stroke="oklch(0.35 0.08 50)"
          strokeWidth="1.5"
        />
        <line
          x1="210"
          y1="248"
          x2="213"
          y2="253"
          stroke="oklch(0.35 0.08 50)"
          strokeWidth="1.5"
        />
        <line
          x1="206"
          y1="248"
          x2="209"
          y2="253"
          stroke="oklch(0.35 0.08 50)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="193"
          cy="255"
          rx="5"
          ry="6"
          fill="oklch(0.85 0.08 80 / 0.8)"
          stroke="oklch(0.60 0.15 80)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="207"
          cy="255"
          rx="5"
          ry="6"
          fill="oklch(0.85 0.08 80 / 0.8)"
          stroke="oklch(0.60 0.15 80)"
          strokeWidth="1.5"
        />
        <path
          d="M 190 218 Q 188 185 190 148"
          stroke="oklch(0.65 0.20 20)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 210 218 Q 212 185 210 148"
          stroke="oklch(0.65 0.20 20)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="270"
          y="258"
          fontFamily="serif"
          fontSize="11"
          fill="oklch(0.55 0.15 30)"
        >
          Reed tubes maintain nostril
        </text>
        <text
          x="90"
          y="360"
          fontFamily="serif"
          fontSize="12"
          fill="oklch(0.50 0.12 70)"
        >
          Nostrils stented with bamboo tubes
        </text>
      </g>
    ),
  },
  {
    id: "divide",
    label: "Step 6: Pedicle Division",
    description:
      "After 10–14 days when the flap has established its own blood supply from the nasal bed, the pedicle is divided and the forehead wound is closed.",
    svgContent: (
      <g>
        <ellipse
          cx="200"
          cy="220"
          rx="90"
          ry="110"
          fill="oklch(0.88 0.06 65)"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2"
        />
        <path
          d="M 185 90 Q 200 73 225 90 L 226 138 L 174 138 Z"
          fill="oklch(0.80 0.06 55 / 0.4)"
          stroke="oklch(0.60 0.08 55)"
          strokeWidth="1.5"
        />
        <ellipse cx="173" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <ellipse cx="227" cy="200" rx="13" ry="7" fill="oklch(0.35 0.08 50)" />
        <path
          d="M 188 218 L 179 248 L 192 258 L 200 260 L 208 258 L 221 248 L 212 218 Z"
          fill="oklch(0.75 0.10 32)"
          stroke="oklch(0.50 0.10 30)"
          strokeWidth="2"
        />
        <path
          d="M 196 218 Q 197 208 198 200 L 200 195"
          stroke="oklch(0.60 0.08 55)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="3,3"
        />
        <line
          x1="188"
          y1="215"
          x2="196"
          y2="218"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2.5"
        />
        <line
          x1="212"
          y1="218"
          x2="204"
          y2="215"
          stroke="oklch(0.50 0.12 70)"
          strokeWidth="2.5"
        />
        <ellipse
          cx="193"
          cy="255"
          rx="6"
          ry="7"
          fill="oklch(0.65 0.12 32)"
          stroke="oklch(0.45 0.10 30)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="207"
          cy="255"
          rx="6"
          ry="7"
          fill="oklch(0.65 0.12 32)"
          stroke="oklch(0.45 0.10 30)"
          strokeWidth="1.5"
        />
        <path
          d="M 180 275 Q 200 286 220 275"
          fill="none"
          stroke="oklch(0.35 0.08 50)"
          strokeWidth="2"
        />
        <text
          x="75"
          y="348"
          fontFamily="serif"
          fontSize="12"
          fill="oklch(0.45 0.15 140)"
        >
          Reconstruction complete after 14 days
        </text>
      </g>
    ),
  },
];

/* ─── Redesigned Rhinoplasty Animation ─────────────────────────────────────── */

const stepIllustrations: React.ReactNode[] = [
  /* Step 1 — Assessment */
  <svg
    key="s1"
    viewBox="0 0 320 260"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    aria-label="Step 1: Assessment — measuring the nasal defect"
  >
    <title>Step 1: Assessment — measuring the nasal defect</title>
    {/* Face outline */}
    <ellipse
      cx="160"
      cy="138"
      rx="72"
      ry="88"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Hair suggestion */}
    <ellipse cx="160" cy="58" rx="72" ry="30" fill="#5c3a1e" />
    {/* Eyes */}
    <ellipse
      cx="135"
      cy="118"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse
      cx="185"
      cy="118"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <circle cx="135" cy="118" r="4" fill="#3b2010" />
    <circle cx="185" cy="118" r="4" fill="#3b2010" />
    {/* Eyebrows */}
    <path
      d="M125 110 Q135 106 145 110"
      stroke="#5c3a1e"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M175 110 Q185 106 195 110"
      stroke="#5c3a1e"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Nose */}
    <path
      d="M160 125 L153 150 Q160 155 167 150 Z"
      fill="#e8c99a"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    {/* Nostrils */}
    <ellipse cx="154" cy="151" rx="5" ry="3.5" fill="#c9956a" />
    <ellipse cx="166" cy="151" rx="5" ry="3.5" fill="#c9956a" />
    {/* Lips */}
    <path
      d="M148 168 Q160 175 172 168"
      stroke="#a0522d"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M150 168 Q160 165 170 168"
      stroke="#a0522d"
      strokeWidth="2"
      fill="none"
    />
    {/* Defect region (missing nose tip dashed) */}
    <ellipse
      cx="160"
      cy="152"
      rx="14"
      ry="8"
      fill="none"
      stroke="#c0392b"
      strokeWidth="2"
      strokeDasharray="4,3"
    />
    {/* Measurement lines */}
    <line
      x1="146"
      y1="125"
      x2="174"
      y2="125"
      stroke="#1a6b3a"
      strokeWidth="1.5"
      strokeDasharray="3,2"
    />
    <line
      x1="160"
      y1="118"
      x2="160"
      y2="160"
      stroke="#1a6b3a"
      strokeWidth="1.5"
      strokeDasharray="3,2"
    />
    <line
      x1="140"
      y1="125"
      x2="136"
      y2="125"
      stroke="#1a6b3a"
      strokeWidth="1"
    />
    <line
      x1="180"
      y1="125"
      x2="184"
      y2="125"
      stroke="#1a6b3a"
      strokeWidth="1"
    />
    {/* Width label */}
    <text x="128" y="140" fontFamily="serif" fontSize="9" fill="#1a6b3a">
      ← 28mm →
    </text>
    {/* Defect label */}
    <text x="178" y="148" fontFamily="serif" fontSize="9" fill="#c0392b">
      Defect
    </text>
    {/* Leaf template */}
    <path
      d="M250 70 Q265 55 270 70 Q275 85 260 90 Q245 85 250 70 Z"
      fill="#c9956a"
      fillOpacity="0.5"
      stroke="#8b5a2b"
      strokeWidth="1.5"
      strokeDasharray="3,2"
    />
    <text x="242" y="100" fontFamily="serif" fontSize="9" fill="#8b5a2b">
      Leaf
    </text>
    <text x="236" y="111" fontFamily="serif" fontSize="9" fill="#8b5a2b">
      template
    </text>
  </svg>,

  /* Step 2 — Flap Design */
  <svg
    key="s2"
    viewBox="0 0 320 260"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    aria-label="Step 2: Flap Design — marking forehead flap boundaries"
  >
    <title>Step 2: Flap Design — marking forehead flap boundaries</title>
    {/* Face */}
    <ellipse
      cx="160"
      cy="148"
      rx="72"
      ry="88"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Forehead */}
    <ellipse
      cx="160"
      cy="75"
      rx="65"
      ry="45"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    {/* Hair */}
    <ellipse cx="160" cy="48" rx="70" ry="28" fill="#5c3a1e" />
    {/* Eyes */}
    <ellipse
      cx="135"
      cy="130"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse
      cx="185"
      cy="130"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <circle cx="135" cy="130" r="4" fill="#3b2010" />
    <circle cx="185" cy="130" r="4" fill="#3b2010" />
    {/* Nose */}
    <path
      d="M160 137 L153 162 Q160 167 167 162 Z"
      fill="#e8c99a"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse cx="154" cy="163" rx="5" ry="3.5" fill="#c9956a" />
    <ellipse cx="166" cy="163" rx="5" ry="3.5" fill="#c9956a" />
    {/* Lips */}
    <path
      d="M148 180 Q160 187 172 180"
      stroke="#a0522d"
      strokeWidth="2"
      fill="none"
    />
    {/* Forehead flap region highlighted */}
    <path
      d="M148 55 Q160 42 172 55 L176 95 Q168 100 160 101 Q152 100 144 95 Z"
      fill="#c0392b"
      fillOpacity="0.18"
      stroke="#c0392b"
      strokeWidth="2.5"
      strokeDasharray="5,3"
    />
    {/* Pedicle channel */}
    <rect
      x="154"
      y="95"
      width="12"
      height="38"
      fill="#c9956a"
      fillOpacity="0.5"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Labels */}
    <text x="182" y="68" fontFamily="serif" fontSize="9" fill="#c0392b">
      Flap outline
    </text>
    <text x="50" y="115" fontFamily="serif" fontSize="9" fill="#8b5a2b">
      Pedicle
    </text>
    <line
      x1="88"
      y1="113"
      x2="152"
      y2="108"
      stroke="#8b5a2b"
      strokeWidth="1"
      markerEnd="url(#arr)"
    />
    <defs>
      <marker
        id="arr"
        markerWidth="6"
        markerHeight="5"
        refX="0"
        refY="2.5"
        orient="auto"
      >
        <polygon points="0 0, 6 2.5, 0 5" fill="#8b5a2b" />
      </marker>
    </defs>
  </svg>,

  /* Step 3 — Elevation */
  <svg
    key="s3"
    viewBox="0 0 320 260"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    aria-label="Step 3: Flap Elevation — lifting the forehead skin flap"
  >
    <title>Step 3: Flap Elevation — lifting the forehead skin flap</title>
    {/* Side profile face */}
    <path
      d="M130 60 Q200 50 215 90 Q230 130 218 170 Q205 210 185 225 Q165 238 145 230 Q130 220 125 200 Q118 170 125 130 Q128 95 130 60 Z"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Hair */}
    <path
      d="M128 60 Q160 30 200 50 Q215 60 215 90 Q200 55 170 55 Q145 52 128 60 Z"
      fill="#5c3a1e"
    />
    {/* Eye */}
    <ellipse
      cx="188"
      cy="115"
      rx="9"
      ry="5.5"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <circle cx="188" cy="115" r="3.5" fill="#3b2010" />
    {/* Nose profile */}
    <path
      d="M215 150 Q225 145 222 160 Q218 170 210 168"
      fill="#e8c99a"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    {/* Forehead flap being elevated — shown lifted */}
    <path
      d="M160 62 Q172 48 180 62 L182 95 Q172 102 162 102 L155 95 Z"
      fill="#c9956a"
      fillOpacity="0.75"
      stroke="#8b5a2b"
      strokeWidth="2"
      transform="rotate(-20,170,80)"
    />
    {/* Lift arrows */}
    <line
      x1="170"
      y1="88"
      x2="155"
      y2="65"
      stroke="#1a6b3a"
      strokeWidth="2"
      markerEnd="url(#arrowUp)"
    />
    <line
      x1="178"
      y1="85"
      x2="168"
      y2="60"
      stroke="#1a6b3a"
      strokeWidth="2"
      markerEnd="url(#arrowUp)"
    />
    {/* Donor site (open wound) */}
    <path
      d="M158 65 Q172 50 182 65 L183 95 Q172 90 160 90 Z"
      fill="#e07b5a"
      fillOpacity="0.25"
      stroke="#c0392b"
      strokeWidth="1.5"
      strokeDasharray="3,2"
    />
    <defs>
      <marker
        id="arrowUp"
        markerWidth="6"
        markerHeight="5"
        refX="0"
        refY="2.5"
        orient="auto"
      >
        <polygon points="0 0, 6 2.5, 0 5" fill="#1a6b3a" />
      </marker>
    </defs>
    <text x="60" y="70" fontFamily="serif" fontSize="9.5" fill="#1a6b3a">
      ↑ Flap lifted
    </text>
    <text x="205" y="170" fontFamily="serif" fontSize="9" fill="#8b5a2b">
      Nasal
    </text>
    <text x="205" y="181" fontFamily="serif" fontSize="9" fill="#8b5a2b">
      defect
    </text>
    <ellipse
      cx="214"
      cy="175"
      rx="9"
      ry="6"
      fill="none"
      stroke="#c0392b"
      strokeWidth="1.5"
      strokeDasharray="3,2"
    />
  </svg>,

  /* Step 4 — Rotation */
  <svg
    key="s4"
    viewBox="0 0 320 260"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    aria-label="Step 4: Flap Rotation — rotating flap 180 degrees to cover the nasal defect"
  >
    <title>
      Step 4: Flap Rotation — rotating flap 180 degrees to cover the nasal
      defect
    </title>
    {/* Face */}
    <ellipse
      cx="160"
      cy="148"
      rx="72"
      ry="88"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    <ellipse
      cx="160"
      cy="75"
      rx="65"
      ry="42"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse cx="160" cy="48" rx="70" ry="26" fill="#5c3a1e" />
    {/* Eyes */}
    <ellipse
      cx="135"
      cy="130"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse
      cx="185"
      cy="130"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <circle cx="135" cy="130" r="4" fill="#3b2010" />
    <circle cx="185" cy="130" r="4" fill="#3b2010" />
    {/* Lips */}
    <path
      d="M148 182 Q160 189 172 182"
      stroke="#a0522d"
      strokeWidth="2"
      fill="none"
    />
    {/* Forehead donor site */}
    <path
      d="M148 55 Q160 42 172 55 L174 90 Q165 93 160 93 Q155 93 146 90 Z"
      fill="#e8c99a"
      fillOpacity="0.4"
      stroke="#8b5a2b"
      strokeWidth="1.5"
      strokeDasharray="4,2"
    />
    {/* Pedicle bridge */}
    <rect
      x="154"
      y="92"
      width="12"
      height="42"
      fill="#c9956a"
      fillOpacity="0.7"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Flap now at nose */}
    <path
      d="M148 134 L152 166 Q160 172 168 166 L172 134 Z"
      fill="#c9956a"
      fillOpacity="0.85"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Curved rotation arrow */}
    <path
      d="M160 93 Q200 93 200 134 Q200 155 172 155"
      fill="none"
      stroke="#1a6b3a"
      strokeWidth="2.5"
      strokeDasharray="5,3"
      markerEnd="url(#arrG)"
    />
    <defs>
      <marker
        id="arrG"
        markerWidth="7"
        markerHeight="6"
        refX="0"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 7 3, 0 6" fill="#1a6b3a" />
      </marker>
    </defs>
    <text x="205" y="120" fontFamily="serif" fontSize="9" fill="#1a6b3a">
      180° rotation
    </text>
    <text x="205" y="133" fontFamily="serif" fontSize="9" fill="#1a6b3a">
      downward
    </text>
  </svg>,

  /* Step 5 — Suturing */
  <svg
    key="s5"
    viewBox="0 0 320 260"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    aria-label="Step 5: Suturing — securing the flap with cotton sutures and reed stents"
  >
    <title>
      Step 5: Suturing — securing the flap with cotton sutures and reed stents
    </title>
    {/* Face */}
    <ellipse
      cx="160"
      cy="148"
      rx="72"
      ry="88"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    <ellipse
      cx="160"
      cy="75"
      rx="65"
      ry="42"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse cx="160" cy="48" rx="70" ry="26" fill="#5c3a1e" />
    {/* Eyes */}
    <ellipse
      cx="135"
      cy="130"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse
      cx="185"
      cy="130"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <circle cx="135" cy="130" r="4" fill="#3b2010" />
    <circle cx="185" cy="130" r="4" fill="#3b2010" />
    {/* Lips */}
    <path
      d="M148 182 Q160 189 172 182"
      stroke="#a0522d"
      strokeWidth="2"
      fill="none"
    />
    {/* Pedicle */}
    <rect
      x="154"
      y="92"
      width="12"
      height="42"
      fill="#c9956a"
      fillOpacity="0.7"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Nose flap — sutured in place */}
    <path
      d="M148 134 L151 168 Q160 175 169 168 L172 134 Z"
      fill="#c9956a"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Nostrils */}
    <ellipse cx="154" cy="169" rx="5" ry="3.5" fill="#a0522d" />
    <ellipse cx="166" cy="169" rx="5" ry="3.5" fill="#a0522d" />
    {/* Suture stitches — left edge */}
    <g>
      <line
        x1="145"
        y1="136"
        x2="151"
        y2="136"
        stroke="#5c3a1e"
        strokeWidth="1.5"
      />
      <line
        x1="146"
        y1="133"
        x2="146"
        y2="139"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="150"
        y1="133"
        x2="150"
        y2="139"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="145"
        y1="144"
        x2="151"
        y2="144"
        stroke="#5c3a1e"
        strokeWidth="1.5"
      />
      <line
        x1="146"
        y1="141"
        x2="146"
        y2="147"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="150"
        y1="141"
        x2="150"
        y2="147"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="145"
        y1="152"
        x2="151"
        y2="152"
        stroke="#5c3a1e"
        strokeWidth="1.5"
      />
      <line
        x1="146"
        y1="149"
        x2="146"
        y2="155"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="150"
        y1="149"
        x2="150"
        y2="155"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="145"
        y1="160"
        x2="151"
        y2="160"
        stroke="#5c3a1e"
        strokeWidth="1.5"
      />
      <line
        x1="146"
        y1="157"
        x2="146"
        y2="163"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="150"
        y1="157"
        x2="150"
        y2="163"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
    </g>
    {/* Suture stitches — right edge */}
    <g>
      <line
        x1="169"
        y1="136"
        x2="175"
        y2="136"
        stroke="#5c3a1e"
        strokeWidth="1.5"
      />
      <line
        x1="170"
        y1="133"
        x2="170"
        y2="139"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="174"
        y1="133"
        x2="174"
        y2="139"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="169"
        y1="144"
        x2="175"
        y2="144"
        stroke="#5c3a1e"
        strokeWidth="1.5"
      />
      <line
        x1="170"
        y1="141"
        x2="170"
        y2="147"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="174"
        y1="141"
        x2="174"
        y2="147"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="169"
        y1="152"
        x2="175"
        y2="152"
        stroke="#5c3a1e"
        strokeWidth="1.5"
      />
      <line
        x1="170"
        y1="149"
        x2="170"
        y2="155"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="174"
        y1="149"
        x2="174"
        y2="155"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="169"
        y1="160"
        x2="175"
        y2="160"
        stroke="#5c3a1e"
        strokeWidth="1.5"
      />
      <line
        x1="170"
        y1="157"
        x2="170"
        y2="163"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
      <line
        x1="174"
        y1="157"
        x2="174"
        y2="163"
        stroke="#5c3a1e"
        strokeWidth="1.2"
      />
    </g>
    {/* Reed stents */}
    <rect
      x="151"
      y="166"
      width="8"
      height="12"
      rx="3"
      fill="#d4a847"
      fillOpacity="0.8"
      stroke="#8b5a2b"
      strokeWidth="1.2"
    />
    <rect
      x="161"
      y="166"
      width="8"
      height="12"
      rx="3"
      fill="#d4a847"
      fillOpacity="0.8"
      stroke="#8b5a2b"
      strokeWidth="1.2"
    />
    <text x="186" y="174" fontFamily="serif" fontSize="9" fill="#8b5a2b">
      Reed stents
    </text>
    <text x="95" y="220" fontFamily="serif" fontSize="9" fill="#5c3a1e">
      Fine cotton sutures securing flap edges
    </text>
  </svg>,

  /* Step 6 — Pedicle Division */
  <svg
    key="s6"
    viewBox="0 0 320 260"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    aria-label="Step 6: Pedicle Division — pedicle cut after 14 days, reconstruction complete"
  >
    <title>
      Step 6: Pedicle Division — pedicle cut after 14 days, reconstruction
      complete
    </title>
    {/* Face */}
    <ellipse
      cx="160"
      cy="148"
      rx="72"
      ry="88"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    <ellipse
      cx="160"
      cy="75"
      rx="65"
      ry="42"
      fill="#f5ead8"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse cx="160" cy="48" rx="70" ry="26" fill="#5c3a1e" />
    {/* Eyes */}
    <ellipse
      cx="135"
      cy="130"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <ellipse
      cx="185"
      cy="130"
      rx="10"
      ry="6"
      fill="#fff"
      stroke="#8b5a2b"
      strokeWidth="1.5"
    />
    <circle cx="135" cy="130" r="4" fill="#3b2010" />
    <circle cx="185" cy="130" r="4" fill="#3b2010" />
    {/* Eyebrows */}
    <path
      d="M125 122 Q135 118 145 122"
      stroke="#5c3a1e"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M175 122 Q185 118 195 122"
      stroke="#5c3a1e"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Reconstructed nose — healed */}
    <path
      d="M148 134 L151 165 Q160 172 169 165 L172 134 Z"
      fill="#e8c99a"
      stroke="#8b5a2b"
      strokeWidth="2"
    />
    {/* Bridge */}
    <path
      d="M155 134 Q160 130 165 134"
      stroke="#8b5a2b"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Nostrils */}
    <ellipse
      cx="154"
      cy="166"
      rx="5.5"
      ry="4"
      fill="#c9956a"
      stroke="#8b5a2b"
      strokeWidth="1"
    />
    <ellipse
      cx="166"
      cy="166"
      rx="5.5"
      ry="4"
      fill="#c9956a"
      stroke="#8b5a2b"
      strokeWidth="1"
    />
    {/* Lips with slight smile */}
    <path
      d="M146 182 Q160 192 174 182"
      stroke="#a0522d"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M148 182 Q160 179 172 182"
      stroke="#a0522d"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Healed forehead — faint scar line only */}
    <path
      d="M150 60 Q160 48 170 60 L171 88 Q165 85 160 85 Q155 85 149 88 Z"
      fill="#f0d9b8"
      fillOpacity="0.5"
      stroke="#c9956a"
      strokeWidth="1"
      strokeDasharray="2,2"
    />
    {/* Cut scissors symbol at pedicle division point */}
    <circle
      cx="160"
      cy="133"
      r="6"
      fill="#fff"
      stroke="#c0392b"
      strokeWidth="2"
    />
    <line
      x1="156"
      y1="129"
      x2="164"
      y2="137"
      stroke="#c0392b"
      strokeWidth="2"
    />
    <line
      x1="164"
      y1="129"
      x2="156"
      y2="137"
      stroke="#c0392b"
      strokeWidth="2"
    />
    {/* Healing glow */}
    <ellipse
      cx="160"
      cy="152"
      rx="24"
      ry="20"
      fill="#1a6b3a"
      fillOpacity="0.07"
      stroke="#1a6b3a"
      strokeWidth="1"
      strokeDasharray="4,3"
    />
    <text x="188" y="150" fontFamily="serif" fontSize="9" fill="#1a6b3a">
      ✓ Healed
    </text>
    <text x="100" y="220" fontFamily="serif" fontSize="9.5" fill="#1a6b3a">
      Reconstruction complete — natural appearance restored
    </text>
  </svg>,
];

function RhinoplastyAnimation() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (fadeRef.current) clearTimeout(fadeRef.current);
    };
  }, []);

  const goToStep = (next: number) => {
    setVisible(false);
    fadeRef.current = setTimeout(() => {
      setStep(next);
      setVisible(true);
    }, 220);
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsPlaying(false);
    } else {
      if (step >= steps.length - 1) {
        goToStep(0);
      }
      setIsPlaying(true);
      let current = step >= steps.length - 1 ? 0 : step;
      timerRef.current = setInterval(() => {
        current += 1;
        if (current >= steps.length) {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsPlaying(false);
          return;
        }
        goToStep(current);
      }, 2500);
    }
  };

  const restart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (fadeRef.current) clearTimeout(fadeRef.current);
    setIsPlaying(false);
    setVisible(false);
    setTimeout(() => {
      setStep(0);
      setVisible(true);
    }, 220);
  };

  const prev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    goToStep(Math.max(0, step - 1));
  };

  const next = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    goToStep(Math.min(steps.length - 1, step + 1));
  };

  const currentStep = steps[step];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fdf3e1 0%, #f5e6c8 100%)",
        border: "2px solid #8b5a2b",
        borderRadius: "4px",
        boxShadow:
          "0 4px 24px rgba(139,90,43,0.18), inset 0 0 40px rgba(192,146,80,0.08)",
        padding: "24px",
        position: "relative",
      }}
    >
      {/* Decorative corner ornaments */}
      {[
        "top-2 left-2",
        "top-2 right-2",
        "bottom-2 left-2",
        "bottom-2 right-2",
      ].map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} text-primary/40 text-sm select-none`}
        >
          ✦
        </span>
      ))}

      {/* Step indicator row */}
      <div className="flex items-center justify-center gap-2 mb-5">
        {steps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              setIsPlaying(false);
              goToStep(i);
            }}
            data-ocid={`rhinoplasty.step_dot.${i + 1}`}
            aria-label={`Go to ${s.label}`}
            style={{
              width: i === step ? "32px" : "24px",
              height: "24px",
              borderRadius: "12px",
              background:
                i === step ? "#8b5a2b" : i < step ? "#c9956a" : "#e8d5ba",
              border: `2px solid ${i === step ? "#5c3a1e" : "#c9956a"}`,
              color: i === step ? "#fdf3e1" : i < step ? "#5c3a1e" : "#8b5a2b",
              fontSize: "10px",
              fontFamily: "serif",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: "3px",
          background: "#e8d5ba",
          borderRadius: "2px",
          marginBottom: "16px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${((step + 1) / steps.length) * 100}%`,
            background: "linear-gradient(90deg, #8b5a2b, #c9956a)",
            borderRadius: "2px",
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* SVG illustration area */}
      <div
        style={{
          background: "#fffdf5",
          border: "1px solid #c9956a",
          borderRadius: "2px",
          height: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom: "16px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.22s ease-in-out",
          position: "relative",
        }}
      >
        {stepIllustrations[step]}
        {/* Step label badge */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            background: "rgba(139,90,43,0.88)",
            color: "#fdf3e1",
            fontFamily: "serif",
            fontSize: "11px",
            fontWeight: "bold",
            padding: "3px 10px",
            borderRadius: "2px",
            letterSpacing: "0.05em",
          }}
        >
          {currentStep.label}
        </div>
        {/* Step counter badge */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: "rgba(201,149,106,0.2)",
            border: "1px solid #c9956a",
            color: "#8b5a2b",
            fontFamily: "serif",
            fontSize: "10px",
            padding: "3px 8px",
            borderRadius: "2px",
          }}
        >
          {step + 1} / {steps.length}
        </div>
      </div>

      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed mb-5"
        style={{
          color: "#5c3a1e",
          minHeight: "52px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.22s ease-in-out",
          padding: "0 4px",
        }}
      >
        {currentStep.description}
      </p>

      {/* Controls */}
      <div className="flex gap-2 flex-wrap items-center">
        <button
          type="button"
          onClick={togglePlay}
          data-ocid="rhinoplasty.play_button"
          style={{
            padding: "8px 20px",
            background: "#8b5a2b",
            color: "#fdf3e1",
            border: "none",
            fontFamily: "serif",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.12em",
            cursor: "pointer",
            borderRadius: "2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#5c3a1e";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#8b5a2b";
          }}
        >
          {isPlaying
            ? "⏸ PAUSE"
            : step === steps.length - 1
              ? "↺ REPLAY"
              : "▶ PLAY"}
        </button>
        <button
          type="button"
          onClick={restart}
          data-ocid="rhinoplasty.restart_button"
          style={{
            padding: "8px 14px",
            background: "transparent",
            color: "#8b5a2b",
            border: "1.5px solid #c9956a",
            fontFamily: "serif",
            fontSize: "11px",
            letterSpacing: "0.1em",
            cursor: "pointer",
            borderRadius: "2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(201,149,106,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          ↺ Reset
        </button>
        <button
          type="button"
          onClick={prev}
          disabled={step === 0}
          data-ocid="rhinoplasty.prev_button"
          style={{
            padding: "8px 14px",
            background: "transparent",
            color: step === 0 ? "#c9956a88" : "#8b5a2b",
            border: `1.5px solid ${step === 0 ? "#c9956a44" : "#c9956a"}`,
            fontFamily: "serif",
            fontSize: "11px",
            letterSpacing: "0.1em",
            cursor: step === 0 ? "not-allowed" : "pointer",
            borderRadius: "2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            if (step > 0) {
              e.currentTarget.style.background = "rgba(201,149,106,0.15)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          ← Prev
        </button>
        <button
          type="button"
          onClick={next}
          disabled={step === steps.length - 1}
          data-ocid="rhinoplasty.next_button"
          style={{
            padding: "8px 14px",
            background: "transparent",
            color: step === steps.length - 1 ? "#c9956a88" : "#8b5a2b",
            border: `1.5px solid ${step === steps.length - 1 ? "#c9956a44" : "#c9956a"}`,
            fontFamily: "serif",
            fontSize: "11px",
            letterSpacing: "0.1em",
            cursor: step === steps.length - 1 ? "not-allowed" : "pointer",
            borderRadius: "2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            if (step < steps.length - 1) {
              e.currentTarget.style.background = "rgba(201,149,106,0.15)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

const tableRows = [
  [
    "Pre-op",
    "Patient preparation",
    "3-day fasting, herbal medicines to promote healing, ritual purification, psychological preparation",
    "Pre-operative optimization",
  ],
  [
    "Pre-op",
    "Anesthesia",
    "Wine (madya) administered; pressure applied to carotid arteries; herbal sedatives including Cannabis and Datura",
    "General/local anesthesia",
  ],
  [
    "Marking",
    "Template creation",
    "Leaf shaped to mirror defect; placed on forehead to mark flap outline with turmeric or charcoal paste",
    "Surgical marking with template",
  ],
  [
    "Elevation",
    "Flap raising",
    "Mandalagra used to cut outlined flap; subcutaneous plane maintained; pedicle preserved at nasal root",
    "Paramedian forehead flap elevation",
  ],
  [
    "Transfer",
    "Flap rotation",
    "Flap folded 180° downward; wound edges of nasal defect freshened to bleeding; flap inset and sutured with Suchi",
    "Flap rotation and inset",
  ],
  [
    "Stenting",
    "Nostril tubes",
    "Reed or bamboo tubes inserted into nostrils to maintain patency; inner surface smeared with sesame oil and honey",
    "Silicone nasal stents",
  ],
  [
    "Healing",
    "Wound dressing",
    "Sesame oil, honey, and turmeric applied to all wounds daily; patient rested in specific position",
    "Wound care and dressings",
  ],
  [
    "Division",
    "Pedicle division",
    "After 10–14 days: pedicle divided; forehead wound closed; nasal flap trimmed to final shape with Kartarika",
    "Pedicle division at 3 weeks",
  ],
  [
    "Post-op",
    "Refinement",
    "Minor adjustments; Rasayana medicines for scar healing; long-term dietary therapy",
    "Scar revision and aftercare",
  ],
];

const historyCards = [
  {
    year: "600 BCE",
    title: "Original Description",
    text: "Sushruta Samhita documents the full rhinoplasty procedure in Chapter 16 of Sutrasthana with precise anatomical and surgical detail.",
  },
  {
    year: "800 CE",
    title: "Arabic Translation",
    text: "Kitab-i-Susrud translates the Samhita into Arabic, preserving rhinoplasty technique for the Islamic Golden Age physicians.",
  },
  {
    year: "1794 CE",
    title: "European Rediscovery",
    text: "British surgeons publish account of 'Indian rhinoplasty' in Gentleman's Magazine, introducing the technique to Western surgery.",
  },
];

export function RhinoplastySection() {
  return (
    <section
      id="rhinoplasty"
      data-ocid="rhinoplasty.section"
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-3">
            Nasasandhana — 600 BCE
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wider mb-4">
            THE RHINOPLASTY
          </h2>
          <p className="font-display italic text-lg text-muted-foreground mb-4">
            नासासंधान — World's First Reconstructive Surgery
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-border" />
            <span className="text-primary text-sm">✦</span>
            <div className="h-px w-24 bg-border" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-xl text-primary tracking-wider uppercase mb-4">
              Interactive Procedure Animation
            </h3>
            <RhinoplastyAnimation />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="parchment-edge terracotta-border overflow-hidden mb-6">
              <img
                src="/assets/generated/rhinoplasty-procedure.dim_900x600.jpg"
                alt="Ancient Indian rhinoplasty — forehead flap technique illustrated in manuscript style"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 font-body text-sm text-foreground/75 leading-relaxed">
              <h3 className="font-display text-xl text-foreground tracking-wider uppercase">
                Historical Context
              </h3>
              <p>
                In ancient India, nasal amputation was a common punishment for
                crimes and a mark of battlefield defeat. Sushruta's development
                of nasal reconstruction gave patients their faces — and their
                dignity — back.
              </p>
              <p>
                The forehead flap technique described in the Sushruta Samhita
                around 600 BCE uses the same fundamental principle as the
                pedicled paramedian forehead flap performed in modern plastic
                surgery worldwide. The operation was so well-designed that it
                remains essentially unchanged after 2,600 years.
              </p>
              <p>
                In 1794, British surgeons observing Indian rhinoplasty in Pune
                published their observations in the
                <em> Gentleman's Magazine</em>, introducing Sushruta's technique
                to European medicine. Joseph Carpue performed the first European
                rhinoplasty using this technique in London in 1814.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Operative Protocol Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card border border-border parchment-edge overflow-hidden mb-12"
        >
          <div className="bg-primary/10 border-b border-border px-6 py-4">
            <h3 className="font-display text-lg text-primary tracking-widest uppercase">
              Complete Operative Protocol — As Described in the Sushruta Samhita
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["Phase", "Action", "Detail", "Modern Parallel"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 font-body text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([phase, action, detail, modern]) => (
                  <tr
                    key={action}
                    className="border-b border-border/50 hover:bg-muted/20 transition-smooth"
                  >
                    <td className="px-4 py-3 font-display text-xs text-primary tracking-wider uppercase">
                      {phase}
                    </td>
                    <td className="px-4 py-3 font-body text-sm text-foreground font-medium">
                      {action}
                    </td>
                    <td className="px-4 py-3 font-body text-xs text-foreground/70 leading-relaxed max-w-xs">
                      {detail}
                    </td>
                    <td className="px-4 py-3 font-body text-xs text-accent italic">
                      {modern}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Historical significance cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {historyCards.map((item) => (
            <div
              key={item.year}
              data-ocid={`rhinoplasty.history_card.${item.year}`}
              className="bg-card border border-border p-6 text-center parchment-edge"
            >
              <p className="font-display text-3xl text-primary/40 mb-2">
                {item.year}
              </p>
              <h4 className="font-display text-base text-primary tracking-wider uppercase mb-3">
                {item.title}
              </h4>
              <p className="font-body text-xs text-foreground/70 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
