import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const companies = ["Microsoft", "Google", "Amazon", "TCS", "Infosys"];
const requiredSkills = ["DSA", "OOP", "DBMS", "OS", "System Design"];
const recommendedTests = ["DSA Test", "OOP Test", "System Design Test"];

export default function CompanyPreparation() {
  const [company, setCompany] = useState("Microsoft");

  return (
    <>
      <div className="screen">
        <TopBar title="Company Preparation" back />

        <div className="field">
          <label>Select Company</label>
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid var(--sage)",
              fontSize: 14,
              background: "var(--white)",
            }}
          >
            {companies.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="card">
          <p style={{ margin: "0 0 10px", fontWeight: 700 }}>Required Skills</p>
          <div>
            {requiredSkills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <p style={{ margin: "0 0 10px", fontWeight: 700 }}>Recommended Tests</p>
          {recommendedTests.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid var(--mist)",
                fontSize: 14,
              }}
            >
              <span>{t}</span>
              <span style={{ color: "var(--steel)" }}>→</span>
            </div>
          ))}
        </div>

        <button className="btn btn-primary">View Preparation Plan</button>
      </div>
      <BottomNav />
    </>
  );
}
