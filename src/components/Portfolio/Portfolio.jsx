import styles from './PortfolioStyles.module.css';
import portfolio1 from '../../assets/portfolio1.png';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.png';


function Portfolio() {
  return (
    <section id='portfolio' className={styles.portfolio}>
        <h1 className={styles.portfolioH1}>
            My Portfolio
        </h1>
        <div className={styles.portfolioGroup}>
            <div className={styles.porfolioDiv}>
                <img src={portfolio1} alt="portfolio1" />
                <div className={styles.infoDiv}>
                <h3>Portfolio 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
                <a href="https://github.com/farukozgu" target='_blank'>View in Github</a>
                </div>
            </div>
            <div className={styles.porfolioDiv}>
                <img src={portfolio2} alt="portfolio2" />
                <div className={styles.infoDiv}>
                <h3>Portfolio 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
                <a href="https://github.com/farukozgu" target='_blank'>View in Github</a>
                </div>
            </div>
            <div className={styles.porfolioDiv}>
                <img src={portfolio3} alt="portfolio3" />
                <div className={styles.infoDiv}>
                <h3>Portfolio 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
                <a href="https://github.com/farukozgu" target='_blank'>View in Github</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio