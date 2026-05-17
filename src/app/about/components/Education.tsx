import styles from "../../page.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.aboutSection}>
      <h3 className={styles.smallHeading}>Education</h3>
      <ul className={styles.aboutList}>
        <li>
          <strong>BSc (Hons) in Software Engineering</strong>, Sabaragamuwa
          University of Sri Lanka — Belihuloya (Oct 2023 – Present)
        </li>
        <li>
          <strong>G.C.E. Advanced Level — Physical Science Stream</strong>,
          Maliyadeva College, Kurunegala (Jan 2019 – Aug 2021)
        </li>
      </ul>
    </section>
  );
}
