import { NavLink } from "react-router-dom";
import "./sidebar.css";
const items = [
  { name: "Home", to: "/", exact: true },
  { name: "Comments", to: "/comments" },
  { name: "Add Comments", to: "/add-comments" },
];
const Sidebar = () => {
  return (
    <aside>
      <nav className="sidebar">
        <h3 className="sidebar-title">SPA</h3>
        <ul className="sidebar-nav">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                  }
                  to={item.to}
                  exact={item.exact ? `${item.exact}` : "false"}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <span className="sidebar-desc">Single Page App v1.0</span>
      </nav>
    </aside>
  );
};

export default Sidebar;
