import styles from './ExpertiseStyles.module.css';
import frontEnd from '../../assets/frontend.png';
import ui from '../../assets/ui.png';
import webFlow from '../../assets/webflow.png';

function Expertise() {
  return (
    <section className={styles.expertise}>
        <h1 className={styles.expertiseH1}>My Expertise</h1>
        <div className={styles.expertiseGroup}>
            <div className={styles.expertiseDiv}>
                <img src={frontEnd} alt="FrontEnd" />
                <h2>Front End</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
            <div className={styles.expertiseDiv}>
                <img src={ui} alt="UI" />
                <h2>UI & UX Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
            <div className={styles.expertiseDiv}>
                <img src={webFlow} alt="WebFlow" />
                <h2>Webflow Development</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
        </div>
    </section>
  )
}

export default Expertise