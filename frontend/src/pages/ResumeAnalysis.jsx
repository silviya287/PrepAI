import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const skills = ["Python", "SQL", "Machine Learning", "Pandas", "Numpy", "Seaborn", "Matplotlib", "OpenCV"];

export default function ResumeAnalysis() {
  const navigate = useNavigate();

  return (
    <>
      <div className="screen">
        <TopBar title="Resume Analysis" back />

        <div
          className="card"
          style={{
            border: "2px dashed var(--dusk)",
            textAlign: "center",
            background: "var(--mist)",
            boxShadow: "none",
          }}
        >
          <div style={{ fontSize: 30, marginBottom: 8 }}>📄</div>
          <p style={{ margin: "0 0 2px", fontWeight: 700 }}>Upload Your Resume</p>
          <p className="small muted" style={{ margin: "0 0 14px" }}>PDF only (Max 5MB)</p>
          <button className="btn btn-primary btn-sm">Choose PDF</button>
        </div>

        <div className="card">
          <p style={{ margin: "0 0 12px", fontWeight: 700 }}>Extracted Skills</p>
          <div>
            {skills.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>

        <button className="btn btn-primary" style={{ marginTop: 4 }}>Analyze Again</button>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
          <button className="btn btn-ghost" onClick={() => navigate("/resume/extracted-skills")}>
            View Extracted Skills (NLP) →
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/progress")}>
            View Progress →
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/badges")}>
            Streaks & Badges →
          </button>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
