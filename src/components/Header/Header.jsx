import styles from "./HeaderStyles.module.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { useTheme } from "../../common/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? moon : sun;
  
 
  return (
    <section className={styles.header}>
      <nav className={styles.headerNav}>
        <h1 className={styles.headerLogo}>Your Logo</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li> 
            <a href="#feedback">Feedback</a>
          </li>
          <li>
            <img
              src={themeIcon}
              alt="Color Mode Icon"
              className={styles.colorMode}
              onClick={toggleTheme}
            />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
