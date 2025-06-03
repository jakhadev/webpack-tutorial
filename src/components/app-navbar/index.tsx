import { NavLink } from "react-router";
import styles from "./app-navbar.module.scss";

const AppNavbar = () => {
  return (
    <nav className={styles.appNavbar}>
      <h1>Logo</h1>
      <div className={styles.navLinks}>
        <NavLink to={"/"} end>
          Home
        </NavLink>
        <NavLink to={"/about"} end>
          About
        </NavLink>
        <NavLink to={"/contact"} end>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default AppNavbar;
