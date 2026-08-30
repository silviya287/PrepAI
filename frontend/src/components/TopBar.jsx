import { useNavigate } from "react-router-dom";

export default function TopBar({ title, back = false, rightIcon = null, onRight = () => {} }) {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      {back ? (
        <button className="icon-btn" onClick={() => navigate(-1)}>←</button>
      ) : (
        <span style={{ width: 36 }} />
      )}
      <h1>{title}</h1>
      {rightIcon ? (
        <button className="icon-btn" onClick={onRight}>{rightIcon}</button>
      ) : (
        <span style={{ width: 36 }} />
      )}
    </div>
  );
}
