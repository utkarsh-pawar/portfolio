import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles["header-logo"]}>
        <Link to="/">
          <FaHome color="var(--primary-color)" />
        </Link>
      </div>
      <div className={styles["header-links"]}>
        <NavLink activeClassName={styles.active} to="/contact"> Message me!</NavLink>
      </div>
    </nav>
  );
};

export default Header;
