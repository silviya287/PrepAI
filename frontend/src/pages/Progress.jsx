import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const months = [
  { m: "Jan", v: 30 }, { m: "Feb", v: 40 }, { m: "Mar", v: 35 },
  { m: "Apr", v: 55 }, { m: "May", v: 62 }, { m: "Jun", v: 78 },
];

const sections = [
  { name: "Aptitude", pct: 81 },
  { name: "Technical", pct: 76 },
  { name: "Coding", pct: 70 },
  { name: "Interview", pct: 74 },
];

export default function Progress() {
  const max = Math.max(...months.map((m) => m.v));

  return (
    <>
      <div className="screen">
        <TopBar title="Progress" back />

        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <p style={{ margin: 0, fontWeight: 700 }}>Overall Progress</p>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "var(--steel)" }}>78%</p>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 100, marginTop: 20 }}>
            {months.map((m) => (
              <div key={m.m} style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    height: `${(m.v / max) * 80}px`,
                    background: "var(--steel)",
                    borderRadius: 6,
                    marginBottom: 6,
                  }}
                />
                <span className="small muted">{m.m}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <p style={{ margin: "0 0 12px", fontWeight: 700 }}>Section Wise Performance</p>
          {sections.map((s) => (
            <div key={s.name} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
                <span>{s.name}</span>
                <span className="muted">{s.pct}%</span>
              </div>
              <div className="pbar"><div style={{ width: `${s.pct}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
