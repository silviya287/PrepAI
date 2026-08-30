import { useState } from "react";
import BottomNav from "../components/BottomNav";

const TABS = ["Recommended", "Courses", "Resources"];

const items = [
  {
    priority: "High Priority",
    title: "Data Structures & Algorithms",
    desc: "Essential for your target role. Currently missing in your profile.",
    icon: "💻",
    color: "var(--danger)",
    bg: "#f9eceb",
  },
  {
    priority: "Medium Priority",
    title: "SQL Advanced",
    desc: "Improve your SQL skills for better interview preparation.",
    icon: "🗄️",
    color: "var(--warn)",
    bg: "#fcf3e5",
  },
  {
    priority: "Low Priority",
    title: "Deep Learning Basics",
    desc: "Important for AI/ML roles.",
    icon: "🧠",
    color: "var(--success)",
    bg: "#eaf5ee",
  },
];

export default function Recommendations() {
  const [tab, setTab] = useState("Recommended");

  return (
    <>
      <div className="screen">
        <div className="topbar" style={{ padding: "18px 0 6px", justifyContent: "flex-start", gap: 8 }}>
          <h1>Recommendations</h1>
        </div>

        <div className="tabbar" style={{ marginTop: 12 }}>
          {TABS.map((t) => (
            <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {tab === "Recommended" ? (
          items.map((it) => (
            <div className="card" key={it.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <span
                  className="badge"
                  style={{ background: it.bg, color: it.color, marginBottom: 8, display: "inline-block" }}
                >
                  {it.priority}
                </span>
                <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 15 }}>{it.title}</p>
                <p className="small muted" style={{ margin: "0 0 12px" }}>{it.desc}</p>
                <button className="btn btn-primary btn-sm">Start Learning</button>
              </div>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "var(--mist)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  flexShrink: 0,
                }}
              >
                {it.icon}
              </div>
            </div>
          ))
        ) : (
          <div className="card" style={{ textAlign: "center", color: "#7c8a86" }}>
            {tab} coming soon.
          </div>
        )}
      </div>
      <BottomNav />
    </>
  );
}
