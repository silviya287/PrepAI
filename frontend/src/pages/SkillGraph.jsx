import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const axes = [
  { label: "Python", you: 90, avg: 70 },
  { label: "DSA", you: 85, avg: 65 },
  { label: "SQL", you: 68, avg: 60 },
  { label: "ML", you: 60, avg: 75 },
  { label: "Statistics", you: 45, avg: 55 },
  { label: "DL", you: 25, avg: 50 },
];

const CX = 150, CY = 150, MAX_R = 105;
const N = axes.length;

function pointFor(index, value) {
  const angle = (Math.PI * 2 * index) / N - Math.PI / 2;
  const r = (value / 100) * MAX_R;
  return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)];
}

function labelPointFor(index) {
  const angle = (Math.PI * 2 * index) / N - Math.PI / 2;
  const r = MAX_R + 22;
  return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)];
}

function polygon(values) {
  return values.map((v, i) => pointFor(i, v).join(",")).join(" ");
}

export default function SkillGraph() {
  const youPts = polygon(axes.map((a) => a.you));
  const avgPts = polygon(axes.map((a) => a.avg));
  const rings = [20, 40, 60, 80, 100];

  return (
    <>
      <div className="screen">
        <TopBar title="Skill Graph" back />

        <div className="card" style={{ display: "flex", justifyContent: "center" }}>
          <svg viewBox="0 0 300 300" width="100%" style={{ maxWidth: 320 }}>
            {rings.map((r) => (
              <polygon
                key={r}
                points={polygon(axes.map(() => r))}
                fill="none"
                stroke="#e3e8e2"
                strokeWidth="1"
              />
            ))}
            {axes.map((_, i) => {
              const [x, y] = pointFor(i, 100);
              return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="#e3e8e2" strokeWidth="1" />;
            })}

            <polygon points={avgPts} fill="rgba(159,135,99,0.18)" stroke="var(--gold)" strokeWidth="1.5" />
            <polygon points={youPts} fill="rgba(94,114,152,0.28)" stroke="var(--steel)" strokeWidth="2" />

            {axes.map((a, i) => {
              const [x, y] = pointFor(i, a.you);
              return <circle key={i} cx={x} cy={y} r="3.5" fill="var(--steel)" />;
            })}

            {axes.map((a, i) => {
              const [x, y] = labelPointFor(i);
              return (
                <text
                  key={a.label}
                  x={x}
                  y={y}
                  fontSize="11"
                  fontWeight="700"
                  fill="var(--steel-dark)"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {a.label}
                </text>
              );
            })}
          </svg>
        </div>

        <div style={{ display: "flex", gap: 18, justifyContent: "center", marginTop: -6, marginBottom: 4 }}>
          <Legend color="var(--steel)" label="You" />
          <Legend color="var(--gold)" label="AI/ML Engineer Avg." />
        </div>

        <div className="card">
          <p style={{ margin: "0 0 8px", fontWeight: 700 }}>Overall Skill Match</p>
          <p style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 700, color: "var(--steel)" }}>72%</p>
          <div className="pbar"><div style={{ width: "72%" }} /></div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

function Legend({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5 }}>
      <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, display: "inline-block" }} />
      {label}
    </div>
  );
}
