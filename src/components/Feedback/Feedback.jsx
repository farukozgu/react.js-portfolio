import styles from "./FeedbackStyles.module.css";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";
import customer3 from "../../assets/customer3.png";
import star from "../../assets/star.png";

function Feedback() {
  return (
    <section id="feedback" className={styles.feedback}>
      <div className={styles.feedbackDiv}>
        <h1>Customer Feedback</h1>
        <div className={styles.feedbackGroup}>
          <div className={styles.feedbackSubDiv}>
            <div className={styles.starGroup}>
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
            <div className={styles.customerDiv}>
              <img src={customer1} alt="Customer 1" />
              <div className={styles.customerInfo}>
                <h3>Dianne Russel</h3>
                <span>Apple</span>
              </div>
            </div>
          </div>
          <div className={styles.feedbackSubDiv}>
            <div className={styles.starGroup}>
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
            <div className={styles.customerDiv}>
              <img src={customer2} alt="Customer 2" />
              <div className={styles.customerInfo}>
                <h3>Kate Winston</h3>
                <span>Starbucks</span>
              </div>
            </div>
          </div>
          <div className={styles.feedbackSubDiv}>
            <div className={styles.starGroup}>
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
            <div className={styles.customerDiv}>
              <img src={customer3} alt="Customer 3" />
              <div className={styles.customerInfo}>
                <h3>John Maya</h3>
                <span>Zara</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
