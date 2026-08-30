import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const topSkills = [
  { name: "Python", icon: "🐍", pct: 90 },
  { name: "Machine Learning", icon: "🤖", pct: 85 },
  { name: "Pandas", icon: "🐼", pct: 80 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div className="screen">
        <div className="topbar" style={{ padding: "18px 0 6px" }}>
          <button className="icon-btn">☰</button>
          <h1>Dashboard</h1>
          <button className="icon-btn" onClick={() => navigate("/notifications")}>🔔</button>
        </div>

        <p style={{ fontSize: 19, fontWeight: 700, margin: "10px 0 0" }}>
          Good Morning, Tanisha! 👋
        </p>
        <p className="muted" style={{ marginTop: 2, fontSize: 14 }}>
          Let's continue your preparation.
        </p>

        {/* Readiness card */}
        <div
          className="card"
          style={{
            background: "var(--steel)",
            color: "var(--white)",
            marginTop: 18,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.35)",
              borderTopColor: "var(--white)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 17,
              flexShrink: 0,
            }}
          >
            78%
          </div>
          <div>
            <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 15 }}>
              Placement Readiness
            </p>
            <p style={{ margin: 0, fontSize: 12.5, opacity: 0.9 }}>
              You are on the right track! 📈
            </p>
          </div>
        </div>

        {/* Stat pair */}
        <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
          <div className="card" style={{ flex: 1 }} onClick={() => navigate("/skills")}>
            <p className="small muted" style={{ margin: "0 0 4px" }}>Skill Match</p>
            <p style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "var(--steel)" }}>72%</p>
            <p className="small muted" style={{ margin: "2px 0 0" }}>For AI/ML Engineer</p>
          </div>
          <div className="card" style={{ flex: 1 }} onClick={() => navigate("/progress")}>
            <p className="small muted" style={{ margin: "0 0 4px" }}>Percentile</p>
            <p style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "var(--gold)" }}>81%</p>
            <p className="small muted" style={{ margin: "2px 0 0" }}>Among all students</p>
          </div>
        </div>

        {/* Top skills */}
        <div className="card" style={{ marginTop: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>Top Skills</p>
            <button
              className="small"
              onClick={() => navigate("/skills/overview")}
              style={{ background: "none", border: "none", color: "var(--steel)", fontWeight: 700, cursor: "pointer" }}
            >
              See All
            </button>
          </div>
          {topSkills.map((s) => (
            <div key={s.name} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
                <span>{s.icon} {s.name}</span>
                <span className="muted">{s.pct}%</span>
              </div>
              <div className="pbar"><div style={{ width: `${s.pct}%` }} /></div>
            </div>
          ))}
        </div>

        {/* Quick links to newer features */}
        <div className="card">
          <p style={{ margin: "0 0 10px", fontWeight: 700, fontSize: 15 }}>More Tools</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <QuickLink icon="🕸️" label="Skill Graph" onClick={() => navigate("/skills/graph")} />
            <QuickLink icon="🎯" label="Job Match" onClick={() => navigate("/jobs")} />
            <QuickLink icon="🧭" label="Explainable Score" onClick={() => navigate("/skills/explainable-score")} />
            <QuickLink icon="🗺️" label="Roadmap" onClick={() => navigate("/roadmap/full")} />
            <QuickLink icon="🔥" label="Daily Challenge" onClick={() => navigate("/challenge")} />
            <QuickLink icon="🏢" label="Company Prep" onClick={() => navigate("/company-prep")} />
            <QuickLink icon="🏅" label="Badges" onClick={() => navigate("/badges")} />
            <QuickLink icon="📚" label="Resources" onClick={() => navigate("/resources")} />
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

function QuickLink({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "14px 8px",
        borderRadius: 12,
        border: "1px solid var(--sage)",
        background: "var(--mist)",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span className="small" style={{ fontWeight: 600, textAlign: "center" }}>{label}</span>
    </button>
  );
}
