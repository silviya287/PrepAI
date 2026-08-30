import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const badges = [
  { name: "First Task", icon: "🎯", earned: true },
  { name: "7 Day Streak", icon: "🔥", earned: true },
  { name: "DSA Novice", icon: "🧮", earned: true },
  { name: "Interview Ready", icon: "🎤", earned: false },
  { name: "Problem Solver", icon: "🧩", earned: false },
];

export default function StreaksBadges() {
  return (
    <>
      <div className="screen">
        <TopBar title="Streaks & Badges" back />

        <div className="card" style={{ textAlign: "center" }}>
          <div style={{ fontSize: 30 }}>🔥</div>
          <p style={{ margin: "6px 0 2px", fontWeight: 700, fontSize: 22 }}>7 Days</p>
          <p className="small muted" style={{ margin: 0 }}>Current Streak — Keep it up!</p>
        </div>

        <div className="card">
          <p style={{ margin: "0 0 14px", fontWeight: 700 }}>Badges</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {badges.map((b) => (
              <div key={b.name} style={{ textAlign: "center", opacity: b.earned ? 1 : 0.35 }}>
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: b.earned ? "var(--mist)" : "#eef1ee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    margin: "0 auto 6px",
                  }}
                >
                  {b.icon}
                </div>
                <p className="small" style={{ margin: 0, fontWeight: 600 }}>{b.name}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="btn btn-ghost">View All Badges</button>
      </div>
      <BottomNav />
    </>
  );
}
