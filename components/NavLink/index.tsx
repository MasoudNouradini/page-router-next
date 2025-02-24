import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navLink.module.css";

const NavLink = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={[styles.link, asPath === href ? styles.active : ""].join(" ")}
    >
      {children}
    </Link>
  );
};

export default NavLink;
