import { useNavigate, useLocation } from "react-router-dom";

const TABS = [
  { key: "home", label: "Home", icon: "🏠", path: "/dashboard" },
  { key: "skills", label: "Skills", icon: "🧩", path: "/skills" },
  { key: "practice", label: "Practice", icon: "📝", path: "/practice" },
  { key: "roadmap", label: "Roadmap", icon: "🗺️", path: "/roadmap" },
  { key: "profile", label: "Profile", icon: "👤", path: "/profile" },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="bottom-nav">
      {TABS.map((tab) => {
        const active = pathname.startsWith(tab.path);
        return (
          <button
            key={tab.key}
            className={`nav-item ${active ? "active" : ""}`}
            onClick={() => navigate(tab.path)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
