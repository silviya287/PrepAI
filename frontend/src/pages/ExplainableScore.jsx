import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const breakdown = [
  { name: "Resume (NLP)", pct: 80, weight: "15%" },
  { name: "Tests", pct: 88, weight: "30%" },
  { name: "Coding Practice", pct: 85, weight: "30%" },
  { name: "Projects", pct: 75, weight: "15%" },
  { name: "AI Interview", pct: 90, weight: "10%" },
];

export default function ExplainableScore() {
  return (
    <>
      <div className="screen">
        <TopBar title="Explainable Skill Score" back />

        <div className="card" style={{ textAlign: "center" }}>
          <p className="small muted" style={{ margin: "0 0 4px" }}>DSA</p>
          <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 15 }}>Overall Score</p>
          <p style={{ margin: "4px 0 0", fontSize: 30, fontWeight: 700, color: "var(--success)" }}>85%</p>
          <p className="small" style={{ margin: 0, color: "var(--success)", fontWeight: 600 }}>Excellent</p>
        </div>

        <div className="card">
          <p style={{ margin: "0 0 14px", fontWeight: 700 }}>Score Breakdown</p>
          {breakdown.map((b) => (
            <div key={b.name} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
                <span>{b.name} <span className="muted small">({b.weight})</span></span>
                <span className="muted">{b.pct}%</span>
              </div>
              <div className="pbar"><div style={{ width: `${b.pct}%` }} /></div>
            </div>
          ))}
        </div>

        <div className="card" style={{ background: "var(--mist)", boxShadow: "none" }}>
          <p className="small muted" style={{ margin: 0 }}>
            Score is calculated based on weighted performance in different areas.
          </p>
        </div>

        <button className="btn btn-ghost">Learn More</button>
      </div>
      <BottomNav />
    </>
  );
}
