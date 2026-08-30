import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const skillList = [
  { name: "Python", pct: 90, label: "Excellent", color: "var(--success)", icon: "🐍" },
  { name: "DSA", pct: 85, label: "Excellent", color: "var(--success)", icon: "🧮" },
  { name: "SQL", pct: 68, label: "Good", color: "var(--gold)", icon: "🗄️" },
  { name: "Machine Learning", pct: 60, label: "Good", color: "var(--gold)", icon: "🤖" },
  { name: "Statistics", pct: 45, label: "Needs Improvement", color: "var(--warn)", icon: "📊" },
  { name: "Deep Learning", pct: 25, label: "Poor", color: "var(--danger)", icon: "🧠" },
];

export default function SkillOverview() {
  const [tab, setTab] = useState("Skills");
  const navigate = useNavigate();

  return (
    <>
      <div className="screen">
        <TopBar title="Skill Overview" back />

        <div className="tabbar">
          <button className={tab === "Skills" ? "active" : ""} onClick={() => setTab("Skills")}>Skills</button>
          <button className={tab === "Skill Graph" ? "active" : ""} onClick={() => navigate("/skills/graph")}>Skill Graph</button>
        </div>

        {skillList.map((s) => (
          <div className="card" key={s.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 20 }}>{s.icon}</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 3px", fontWeight: 700, fontSize: 14.5 }}>{s.name}</p>
              <p className="small" style={{ margin: 0, color: s.color, fontWeight: 600 }}>{s.label}</p>
            </div>
            <p style={{ margin: 0, fontWeight: 700 }}>{s.pct}%</p>
          </div>
        ))}
      </div>
      <BottomNav />
    </>
  );
}
