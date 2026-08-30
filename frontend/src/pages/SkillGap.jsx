import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const strong = [
  { name: "Python", pct: 90 },
  { name: "Machine Learning", pct: 85 },
  { name: "Pandas", pct: 80 },
];
const improve = [
  { name: "SQL", pct: 45 },
  { name: "Statistics", pct: 40 },
];
const missing = ["DSA", "Deep Learning", "NLP"];

export default function SkillGap() {
  const navigate = useNavigate();
  return (
    <>
      <div className="screen">
        <TopBar title="Skill Gap" back />

        <p className="small muted" style={{ margin: "4px 0 0" }}>Target Role</p>
        <p style={{ margin: "2px 0 16px", fontWeight: 700, fontSize: 18, color: "var(--steel)" }}>
          AI/ML Engineer
        </p>

        <div className="card">
          <p style={{ margin: "0 0 4px", fontWeight: 700 }}>Overall Skill Match</p>
          <p style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 700, color: "var(--steel)" }}>72%</p>
          <div className="pbar"><div style={{ width: "72%" }} /></div>
        </div>

        <div className="card">
          <p style={{ margin: "0 0 12px", fontWeight: 700, color: "var(--success)" }}>✅ Strong Skills</p>
          {strong.map((s) => (
            <Row key={s.name} name={s.name} pct={s.pct} color="var(--success)" />
          ))}
        </div>

        <div className="card">
          <p style={{ margin: "0 0 12px", fontWeight: 700, color: "var(--warn)" }}>⚠️ Needs Improvement</p>
          {improve.map((s) => (
            <Row key={s.name} name={s.name} pct={s.pct} color="var(--warn)" />
          ))}
        </div>

        <div className="card">
          <p style={{ margin: "0 0 12px", fontWeight: 700, color: "var(--danger)" }}>❌ Missing Skills</p>
          {missing.map((m) => (
            <div key={m} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14 }}>
              <span>{m}</span>
              <span className="badge badge-hard">Low</span>
            </div>
          ))}
        </div>

        <button className="btn btn-ghost" onClick={() => navigate("/skills/graph-detailed")}>
          View Detailed Skill Graph →
        </button>
      </div>
      <BottomNav />
    </>
  );
}

function Row({ name, pct, color }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
        <span>{name}</span>
        <span className="muted">{pct}%</span>
      </div>
      <div className="pbar"><div style={{ width: `${pct}%`, background: color }} /></div>
    </div>
  );
}
