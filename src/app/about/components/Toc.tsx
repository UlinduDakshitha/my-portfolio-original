import styles from "../../page.module.css";

export default function Toc() {
  return (
    <nav className={styles.toc} aria-label="About contents">
      <a href="#education" className={styles.tocLink}>
        Education
      </a>
      <a href="#experience" className={styles.tocLink}>
        Experience
      </a>
      <a href="#skills" className={styles.tocLink}>
        Skills
      </a>
      <a href="#certifications" className={styles.tocLink}>
        Certifications
      </a>
      <a href="#volunteer" className={styles.tocLink}>
        Volunteer
      </a>
    </nav>
  );
}
