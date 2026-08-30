import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const TABS = ["Technical", "HR", "Project"];

const banks = {
  Technical: [
    { name: "Python Questions", count: 120 },
    { name: "DSA Questions", count: 150 },
    { name: "DBMS Questions", count: 100 },
    { name: "OS Questions", count: 80 },
  ],
  HR: [
    { name: "Tell me about yourself", count: 1 },
    { name: "Strengths & Weaknesses", count: 1 },
  ],
  Project: [
    { name: "Explain your project", count: 1 },
    { name: "Challenges faced", count: 1 },
  ],
};

export default function InterviewQuestionBank() {
  const [tab, setTab] = useState("Technical");

  return (
    <>
      <div className="screen">
        <TopBar title="Interview Question Bank" back />

        <div className="tabbar">
          {TABS.map((t) => (
            <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>

        {banks[tab].map((b) => (
          <div className="card" key={b.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>{b.name}</p>
            <span className="small muted">{b.count} Questions</span>
          </div>
        ))}

        <button className="btn btn-primary">Practice Now</button>
      </div>
      <BottomNav />
    </>
  );
}
