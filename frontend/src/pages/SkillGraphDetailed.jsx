import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const nodes = [
  { label: "Python", pct: 90, x: 90, y: 70 },
  { label: "DSA", pct: 85, x: 260, y: 70 },
  { label: "SQL", pct: 68, x: 300, y: 200 },
  { label: "Deep Learning", pct: 25, x: 250, y: 320 },
  { label: "Machine Learning", pct: 60, x: 100, y: 320 },
  { label: "Statistics", pct: 45, x: 50, y: 200 },
];

const CENTER = { x: 175, y: 195 };

function bandColor(pct) {
  if (pct >= 80) return "var(--success)";
  if (pct >= 60) return "var(--gold)";
  if (pct >= 40) return "var(--warn)";
  return "var(--danger)";
}

export default function SkillGraphDetailed() {
  return (
    <>
      <div className="screen">
        <TopBar title="Skill Graph (Detailed)" back />

        <div className="card" style={{ display: "flex", justifyContent: "center" }}>
          <svg viewBox="0 0 350 390" width="100%" style={{ maxWidth: 360 }}>
            {nodes.map((n) => (
              <line
                key={n.label}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={n.x}
                y2={n.y}
                stroke={bandColor(n.pct)}
                strokeWidth="2"
                opacity="0.6"
              />
            ))}

            {/* center node */}
            <circle cx={CENTER.x} cy={CENTER.y} r="42" fill="var(--steel)" />
            <text x={CENTER.x} y={CENTER.y - 4} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">
              AI/ML
            </text>
            <text x={CENTER.x} y={CENTER.y + 12} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">
              Engineer
            </text>

            {nodes.map((n) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="32" fill="#fff" stroke={bandColor(n.pct)} strokeWidth="2.5" />
                <text x={n.x} y={n.y - 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--steel-dark)">
                  {n.label.length > 10 ? n.label.split(" ")[0] : n.label}
                </text>
                <text x={n.x} y={n.y + 11} textAnchor="middle" fontSize="11" fontWeight="700" fill={bandColor(n.pct)}>
                  {n.pct}%
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="card">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <LegendDot color="var(--success)" label="Strong (80-100%)" />
            <LegendDot color="var(--gold)" label="Good (60-79%)" />
            <LegendDot color="var(--warn)" label="Needs Improve (40-59%)" />
            <LegendDot color="var(--danger)" label="Poor (0-39%)" />
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

function LegendDot({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: color, display: "inline-block" }} />
      {label}
    </div>
  );
}
