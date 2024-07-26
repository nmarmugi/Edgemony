import { NavLink } from "react-router-dom";
import { labels } from "../data/labels";

const menuList = [
  { name: labels.navHome, path: "/" },
  { name: "Create", path: "/create" },
];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-slate-300">
      <NavLink to={"/"}>
        <h1 className="font-bold">{labels.leggiBookTitle}</h1>
      </NavLink>
      <ul className="flex gap-4">
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "font-bold underline" : "";
              }}
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
