import styles from "./FooterStyles.module.css";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;

  return (
    <section className={styles.Footer}>
      <div className={styles.footerDiv}>
        <div className={styles.footerLogo}>
          <h1 className={styles.headerLogo}>Your Logo</h1>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://x.com/home" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
