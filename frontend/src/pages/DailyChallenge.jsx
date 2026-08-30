import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const tasks = [
  { name: "Aptitude", sub: "5 Questions", done: true },
  { name: "Coding", sub: "1 Problem", done: true },
  { name: "DBMS", sub: "5 Questions", done: true },
  { name: "Interview", sub: "1 Question", done: false },
];

export default function DailyChallenge() {
  const completed = tasks.filter((t) => t.done).length;

  return (
    <>
      <div className="screen">
        <TopBar title="Daily Placement Challenge" back />

        <div className="card" style={{ background: "var(--steel)", color: "var(--white)" }}>
          <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 16 }}>Today's Challenge</p>
          <p className="small" style={{ margin: 0, opacity: 0.9 }}>Complete all & boost your score!</p>
        </div>

        <div className="card">
          {tasks.map((t) => (
            <div
              key={t.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px solid var(--mist)",
              }}
            >
              <div>
                <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 14 }}>{t.name}</p>
                <p className="small muted" style={{ margin: 0 }}>{t.sub}</p>
              </div>
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  background: t.done ? "var(--success)" : "#e7ebe6",
                  color: t.done ? "#fff" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                ✓
              </span>
            </div>
          ))}
        </div>

        <div className="card" style={{ textAlign: "center" }}>
          <p className="small muted" style={{ margin: "0 0 6px" }}>Progress</p>
          <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: 20 }}>{completed} / {tasks.length}</p>
          <div className="pbar"><div style={{ width: `${(completed / tasks.length) * 100}%` }} /></div>
        </div>

        <button className="btn btn-primary">Start Remaining</button>
      </div>
      <BottomNav />
    </>
  );
}
