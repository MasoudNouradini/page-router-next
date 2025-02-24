import styles from "./navbar.module.css";
import NavLink from "../NavLink";

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <div className={styles.logo}>Data</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <NavLink href={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink href={"/users"}>
            <li>Users</li>
          </NavLink>
          <NavLink href={"/posts"}>
            <li>Posts</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
