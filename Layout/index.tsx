import Navbar from "../components/Navbar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
