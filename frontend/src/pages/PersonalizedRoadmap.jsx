import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const weeks = [
  { title: "Week 1", desc: "Python & SQL Basics", status: "done" },
  { title: "Week 2", desc: "DSA Fundamentals", status: "active" },
  { title: "Week 3", desc: "Statistics & ML Basics", status: "upcoming" },
  { title: "Week 4", desc: "Machine Learning", status: "upcoming" },
  { title: "Week 5", desc: "Mock Interviews", status: "upcoming" },
];

const statusStyle = {
  done: { bg: "var(--success)", label: "Completed", color: "var(--success)" },
  active: { bg: "var(--steel)", label: "In Progress", color: "var(--steel)" },
  upcoming: { bg: "#d7ddd6", label: "Upcoming", color: "#8b968f" },
};

export default function PersonalizedRoadmap() {
  return (
    <>
      <div className="screen">
        <TopBar title="Personalized Roadmap" back />

        <div style={{ position: "relative", paddingLeft: 8 }}>
          {weeks.map((w, i) => {
            const s = statusStyle[w.status];
            return (
              <div key={w.title} style={{ display: "flex", gap: 14, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: s.bg,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {w.status === "done" ? "✓" : ""}
                  </div>
                  {i < weeks.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 40, background: "#d7ddd6" }} />
                  )}
                </div>
                <div style={{ paddingBottom: 26 }}>
                  <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 14.5 }}>{w.title}</p>
                  <p className="small muted" style={{ margin: "0 0 4px" }}>{w.desc}</p>
                  <span className="small" style={{ color: s.color, fontWeight: 600 }}>{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        <button className="btn btn-primary">View Full Roadmap</button>
      </div>
      <BottomNav />
    </>
  );
}
