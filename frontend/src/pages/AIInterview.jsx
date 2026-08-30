import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

export default function AIInterview() {
  const [answer, setAnswer] = useState("");

  return (
    <>
      <div className="screen">
        <TopBar title="AI Interview" back />

        <div className="card" style={{ display: "flex", gap: 10 }}>
          <div style={{ fontSize: 22 }}>🤖</div>
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 13.5 }}>PrepAI Bot</p>
            <p style={{ margin: "4px 0 0", fontSize: 14 }}>
              Explain overfitting in Machine Learning.
            </p>
            <p className="small muted" style={{ margin: "6px 0 0" }}>10:30 AM</p>
          </div>
        </div>

        <div
          className="card"
          style={{
            background: "var(--steel)",
            color: "var(--white)",
            marginLeft: 40,
          }}
        >
          <p style={{ margin: 0, fontSize: 14 }}>
            Overfitting occurs when a model learns the training data too well,
            including noise and outliers, so it performs poorly on new data.
          </p>
          <p className="small" style={{ margin: "8px 0 0", opacity: 0.8 }}>10:32 AM</p>
        </div>

        <div className="card">
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                border: "5px solid var(--steel)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              82/100
            </div>
            <div>
              <p style={{ margin: "0 0 6px", fontWeight: 700 }}>Good Answer! 🎉</p>
              <p className="small" style={{ margin: "2px 0", color: "var(--success)" }}>✓ Correct Concept</p>
              <p className="small" style={{ margin: "2px 0", color: "var(--success)" }}>✓ Well Explained</p>
              <p className="small" style={{ margin: "2px 0", color: "var(--success)" }}>✓ Added Examples</p>
            </div>
          </div>
          <p className="small" style={{ marginTop: 12, marginBottom: 0 }}>
            <strong style={{ color: "var(--steel)" }}>Suggestion:</strong> Add more about
            regularization techniques.
          </p>
        </div>

        <input
          type="text"
          placeholder="Type your answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid var(--sage)",
            marginBottom: 12,
            fontSize: 14,
          }}
        />
        <button className="btn btn-primary">Next Question</button>
      </div>
      <BottomNav />
    </>
  );
}
