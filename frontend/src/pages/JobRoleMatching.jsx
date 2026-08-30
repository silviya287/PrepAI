import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const roles = [
  { name: "AI/ML Engineer", pct: 88, label: "Excellent Match", icon: "🏆", color: "var(--success)" },
  { name: "Data Scientist", pct: 82, label: "Very Good Match", icon: "📊", color: "var(--success)" },
  { name: "Data Analyst", pct: 74, label: "Good Match", icon: "📈", color: "var(--gold)" },
  { name: "Software Developer", pct: 68, label: "Good Match", icon: "💻", color: "var(--gold)" },
];

export default function JobRoleMatching() {
  return (
    <>
      <div className="screen">
        <TopBar title="Job Role Matching" back />

        <p style={{ margin: "4px 0 16px", fontWeight: 700, fontSize: 15 }}>Best Matched Roles</p>

        {roles.map((r) => (
          <div className="card" key={r.name} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                background: "var(--mist)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              {r.icon}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 3px", fontWeight: 700, fontSize: 14.5 }}>{r.name}</p>
              <p className="small" style={{ margin: 0, color: r.color, fontWeight: 600 }}>{r.label}</p>
            </div>
            <p style={{ margin: 0, fontWeight: 700, color: "var(--steel)" }}>{r.pct}%</p>
          </div>
        ))}

        <button className="btn btn-primary">View Details</button>
      </div>
      <BottomNav />
    </>
  );
}
