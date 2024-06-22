import styles from "./HeroStyles.module.css";
import profilePic from "../../assets/profile-pic.png";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
        <div className={styles.heroDiv}>
            <div className={styles.heroInfo}>
                <span>Hey I am Thomas</span>
                <h1>Front End <br/>Developer</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ab exercitationem hic repellendus iste possimus. </p>
                <a href="">
                    <button>Resume</button>
                </a>
            </div>
            <div className={styles.heroImg}>
                <img src={profilePic} alt="Profile Pic" />
            </div>
        </div>
    </section>
  )
}

export default Hero