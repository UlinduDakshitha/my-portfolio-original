import styles from "../../page.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.aboutSection}>
      <h3 className={styles.smallHeading}>Professional Experience</h3>
      <ul className={styles.aboutList}>
        <li>
          <strong>Full-Stack Development Trainee</strong>, ACPT — Academy of
          Computer Programming and Training, Wadduwa (Jun 2023 – Present)
          <div className={styles.sectionText}>
            Completed a 6-month intensive program covering Java, Spring Boot,
            React.js, MySQL, and full-stack development; delivered 3 real-world
            training projects and gained proficiency across the web development
            lifecycle.
          </div>
        </li>
      </ul>
    </section>
  );
}
