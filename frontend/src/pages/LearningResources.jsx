import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const TABS = ["For You", "Bookmarks"];

const resources = [
  { title: "Arrays in Python", meta: "Article · 10 min", icon: "📄" },
  { title: "DSA Arrays Playlist", meta: "Video · 45 min", icon: "🎬" },
  { title: "SQL Tutorial", meta: "Article · 15 min", icon: "📄" },
  { title: "Dynamic Programming", meta: "Video · 60 min", icon: "🎬" },
];

export default function LearningResources() {
  const [tab, setTab] = useState("For You");

  return (
    <>
      <div className="screen">
        <TopBar title="Learning Resources" back />

        <div className="tabbar">
          {TABS.map((t) => (
            <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>

        {resources.map((r) => (
          <div className="card" key={r.title} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: "var(--mist)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              {r.icon}
            </div>
            <div>
              <p style={{ margin: "0 0 3px", fontWeight: 700, fontSize: 14 }}>{r.title}</p>
              <p className="small muted" style={{ margin: 0 }}>{r.meta}</p>
            </div>
          </div>
        ))}

        <button className="btn btn-primary">View All Resources</button>
      </div>
      <BottomNav />
    </>
  );
}
