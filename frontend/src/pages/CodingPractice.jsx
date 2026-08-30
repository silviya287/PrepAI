import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const TABS = ["All", "Easy", "Medium", "Hard"];

const problems = [
  { name: "Two Sum", diff: "Easy", topic: "Arrays", status: "Solved" },
  { name: "Valid Parentheses", diff: "Easy", topic: "Stack", status: "Solved" },
  { name: "Binary Search", diff: "Medium", topic: "Binary Search", status: "Attempt" },
  { name: "Reverse Linked List", diff: "Medium", topic: "Linked List", status: "Attempt" },
  { name: "Merge Intervals", diff: "Hard", topic: "Intervals", status: "Locked" },
];

const badgeClass = { Easy: "badge-easy", Medium: "badge-medium", Hard: "badge-hard" };
const statusStyle = {
  Solved: { color: "var(--success)", label: "Solved" },
  Attempt: { color: "var(--warn)", label: "Attempt" },
  Locked: { color: "#9aa3a0", label: "🔒 Locked" },
};

export default function CodingPractice() {
  const [tab, setTab] = useState("All");
  const filtered = tab === "All" ? problems : problems.filter((p) => p.diff === tab);

  return (
    <>
      <div className="screen">
        <TopBar title="Coding Practice" back />

        <div className="tabbar">
          {TABS.map((t) => (
            <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {filtered.map((p) => (
          <div className="card" key={p.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 14.5 }}>{p.name}</p>
              <span className={`badge ${badgeClass[p.diff]}`} style={{ marginRight: 6 }}>{p.diff}</span>
              <span className="small muted">{p.topic}</span>
            </div>
            <span className="small" style={{ fontWeight: 700, color: statusStyle[p.status].color }}>
              {statusStyle[p.status].label}
            </span>
          </div>
        ))}
      </div>
      <BottomNav />
    </>
  );
}
