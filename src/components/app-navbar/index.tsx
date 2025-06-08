import { NavLink } from "react-router";
import styles from "./app-navbar.module.scss";
import Logo from "@/assets/logo.svg";

const AppNavbar = () => {
  return (
    <nav className={styles.appNavbar}>
      <h1>
        <Logo width={40} height={40} />
      </h1>
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
