import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div
      className="screen no-nav"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(180deg, var(--mist) 0%, var(--dusk) 140%)",
        minHeight: "100vh",
        padding: "40px 28px",
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          background: "var(--steel)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 40,
          marginBottom: 24,
          boxShadow: "0 10px 30px rgba(94,114,152,0.35)",
        }}
      >
        🧠
      </div>

      <h1 style={{ fontSize: 30, margin: "0 0 6px", letterSpacing: -0.5 }}>
        Prep<span style={{ color: "var(--steel)" }}>AI</span>
      </h1>
      <p className="muted" style={{ margin: "0 0 48px", fontSize: 14.5 }}>
        Your AI Placement Mentor
      </p>

      <div style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 17, fontWeight: 600, margin: "0 0 4px" }}>
          Smart Guidance. Better Preparation.
        </p>
        <p className="muted" style={{ margin: 0, fontSize: 14 }}>
          Bright Future.
        </p>
      </div>

      <button className="btn btn-primary" onClick={() => navigate("/login")}>
        Get Started
      </button>
    </div>
  );
}
