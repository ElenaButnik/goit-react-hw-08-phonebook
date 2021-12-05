import { NavLink } from "react-router-dom";
import s from "./contacts.module.css";

export default function AuthNav() {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink
            to="/login"
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            Login
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            to="/register"
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
