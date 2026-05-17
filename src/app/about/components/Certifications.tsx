import styles from "../../page.module.css";

export default function Certifications() {
  return (
    <section id="certifications" className={styles.aboutSection}>
      <h3 className={styles.smallHeading}>Certifications</h3>
      <ul className={styles.aboutList}>
        <li>Postman API Fundamentals Student Expert — Postman</li>
        <li>Postman Essentials — KodeKloud</li>
        <li>Critical Thinking in the AI Era — HP LIFE</li>
        <li>Git & GitHub for Beginners — Udemy</li>
      </ul>
    </section>
  );
}
