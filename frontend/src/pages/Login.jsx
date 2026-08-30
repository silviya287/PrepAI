import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Demo only — no backend wired up yet.
    navigate("/dashboard");
  }

  return (
    <div className="screen no-nav" style={{ paddingTop: 56 }}>
      <h1 style={{ fontSize: 24, margin: "0 0 4px" }}>Welcome Back! 👋</h1>
      <p className="muted" style={{ marginTop: 0, marginBottom: 32, fontSize: 14 }}>
        Login to continue your PrepAI journey
      </p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field" style={{ position: "relative" }}>
          <label>Password</label>
          <input
            type={showPw ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPw((s) => !s)}
            style={{
              position: "absolute",
              right: 14,
              top: 38,
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#9aa3a0",
            }}
          >
            {showPw ? "🙈" : "👁️"}
          </button>
        </div>

        <div style={{ textAlign: "right", marginBottom: 22 }}>
          <a href="#" className="small" style={{ color: "var(--steel)", fontWeight: 600 }}>
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <p className="small" style={{ textAlign: "center", marginTop: 24 }}>
        Don't have an account?{" "}
        <a href="#" style={{ color: "var(--steel)", fontWeight: 700 }}>
          Sign Up
        </a>
      </p>
    </div>
  );
}
