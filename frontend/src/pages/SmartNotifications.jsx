import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const notifs = [
  { icon: "⚠️", text: "Your DSA score is low. Complete today's challenge to improve!", time: "10:30 AM", unread: true },
  { icon: "📝", text: "New SQL test added to your roadmap.", time: "09:15 AM", unread: true },
  { icon: "📈", text: "You are 8% away from your target readiness score!", time: "Yesterday", unread: false },
  { icon: "🔥", text: "Great! You are on a 7-day preparation streak.", time: "Yesterday", unread: false },
];

export default function SmartNotifications() {
  return (
    <>
      <div className="screen">
        <TopBar title="Smart Notifications" back />

        {notifs.map((n, i) => (
          <div
            className="card"
            key={i}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              background: n.unread ? "var(--mist)" : "var(--white)",
              boxShadow: n.unread ? "none" : "var(--shadow-card)",
              border: n.unread ? "1px solid var(--dusk)" : "none",
            }}
          >
            <div style={{ fontSize: 18 }}>{n.icon}</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 4px", fontSize: 13.5 }}>{n.text}</p>
              <p className="small muted" style={{ margin: 0 }}>{n.time}</p>
            </div>
          </div>
        ))}

        <button className="btn btn-ghost">View All</button>
      </div>
      <BottomNav />
    </>
  );
}
