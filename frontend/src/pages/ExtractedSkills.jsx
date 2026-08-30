import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const found = ["Python", "Machine Learning", "SQL", "Pandas", "Numpy", "Scikit-learn", "OpenCV", "Matplotlib"];
const missing = ["DSA", "Deep Learning", "Statistics", "AWS", "NLP"];

export default function ExtractedSkills() {
  const navigate = useNavigate();

  return (
    <>
      <div className="screen">
        <TopBar title="Extracted Skills (NLP)" back />

        <div className="card">
          <p style={{ margin: "0 0 12px", fontWeight: 700 }}>Skills Found</p>
          <div>
            {found.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <p style={{ margin: "0 0 12px", fontWeight: 700, color: "var(--danger)" }}>Missing Important Skills</p>
          <div>
            {missing.map((s) => (
              <span
                key={s}
                className="chip"
                style={{ background: "#f9eceb", color: "var(--danger)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="card" style={{ background: "var(--mist)", boxShadow: "none" }}>
          <p className="small muted" style={{ margin: 0 }}>NLP accuracy: 92%</p>
        </div>

        <button className="btn btn-primary" onClick={() => navigate("/jobs")}>
          View Matching Roles
        </button>
      </div>
      <BottomNav />
    </>
  );
}
