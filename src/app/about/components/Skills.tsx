import styles from "../../page.module.css";

const skills = [
  "Java",
  "Spring Boot",
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Docker",
];

export default function Skills() {
  return (
    <section id="skills" className={styles.aboutSection}>
      <h3 className={styles.smallHeading}>Technical Skills</h3>
      <div className={styles.skillPills}>
        {skills.map((s) => (
          <span key={s} className={styles.skillPill}>
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
