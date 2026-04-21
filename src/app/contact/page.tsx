import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={`container section ${styles.contactContainer}`}>
      <div className={`${styles.header} animate-fade-in`}>
        <h1 className="gradient-text">Let&apos;s Connect</h1>
        <p className={styles.intro}>
          I&apos;m actively seeking a software engineering internship to
          contribute to innovative teams. If you have an opportunity or just
          want to discuss tech, my inbox is open!
        </p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.infoCards} animate-fade-in delay-1`}>
          <a
            href="mailto:ulindudakshitha001@gmail.com"
            className={`${styles.card} glass hover-lift`}
          >
            <div className={styles.iconBox}>📧</div>
            <h3>Email</h3>
            <p>ulindudakshitha001@gmail.com</p>
          </a>

          <a
            href="tel:+94717028242"
            className={`${styles.card} glass hover-lift`}
          >
            <div className={styles.iconBox}>📞</div>
            <h3>Phone</h3>
            <p>+94 71 702 8242</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ulindu-dakshitha-bandara-6aa081303"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} glass hover-lift`}
          >
            <div className={styles.iconBox}>
              <img src="/linkedin.svg" alt="LinkedIn" />
            </div>
            <h3>LinkedIn</h3>
            <p>Ulindu Dakshitha Bandara</p>
          </a>

          <a
            href="https://github.com/UlinduDakshitha"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} glass hover-lift`}
          >
            <div className={styles.iconBox}>
              <img src="/github.svg" alt="GitHub" />
            </div>
            <h3>GitHub</h3>
            <p>github.com/UlinduDakshitha</p>
          </a>
        </div>
      </div>
    </div>
  );
}
