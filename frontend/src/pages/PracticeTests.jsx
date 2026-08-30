import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const TABS = ["Aptitude", "Technical", "Domain"];

const tests = {
  Aptitude: [
    { name: "Quantitative Aptitude", q: 20, badge: "Medium", score: 85 },
    { name: "Logical Reasoning", q: 20, badge: "Medium", score: 78 },
    { name: "Verbal Ability", q: 20, badge: "Easy", score: 82 },
    { name: "Data Interpretation", q: 20, badge: "Hard", score: 65 },
  ],
  Technical: [
    { name: "Data Structures", q: 25, badge: "Medium", score: 74 },
    { name: "OOP Concepts", q: 15, badge: "Easy", score: 88 },
  ],
  Domain: [
    { name: "Machine Learning Basics", q: 20, badge: "Hard", score: 70 },
    { name: "SQL Fundamentals", q: 18, badge: "Medium", score: 60 },
  ],
};

const badgeClass = { Easy: "badge-easy", Medium: "badge-medium", Hard: "badge-hard" };

export default function PracticeTests() {
  const [tab, setTab] = useState("Aptitude");
  const navigate = useNavigate();

  return (
    <>
      <div className="screen">
        <div className="topbar" style={{ padding: "18px 0 6px", justifyContent: "flex-start" }}>
          <h1>Practice Tests</h1>
        </div>

        <div className="tabbar" style={{ marginTop: 12 }}>
          {TABS.map((t) => (
            <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {tests[tab].map((t) => (
          <div className="card" key={t.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 14.5 }}>{t.name}</p>
              <p className="small muted" style={{ margin: 0 }}>
                {t.q} Questions &nbsp;·&nbsp;
                <span className={`badge ${badgeClass[t.badge]}`} style={{ marginLeft: 4 }}>{t.badge}</span>
              </p>
            </div>
            <p style={{ margin: 0, fontWeight: 700, color: "var(--steel)" }}>{t.score}%</p>
          </div>
        ))}

        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button className="btn btn-primary" onClick={() => navigate("/practice/coding")}>
            💻 Coding Practice
          </button>
        </div>
        <div style={{ marginTop: 12 }}>
          <button className="btn btn-secondary" onClick={() => navigate("/practice/interview")}>
            🤖 AI Mock Interview
          </button>
        </div>
        <div style={{ marginTop: 12 }}>
          <button className="btn btn-ghost" onClick={() => navigate("/interview-bank")}>
            📚 Interview Question Bank
          </button>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
