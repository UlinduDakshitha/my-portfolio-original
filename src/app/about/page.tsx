import styles from "../page.module.css";
import Hero from "./components/Hero";
import Toc from "./components/Toc";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Volunteer from "./components/Volunteer";

export default function AboutPage() {
  return (
    <div className={`container ${styles.section}`}>
      <div
        className={styles.sectionCard}
        style={{ maxWidth: 980, margin: "2rem auto" }}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIndex}>01</span>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.sectionSubtitle}>
            Software engineer — Next.js & Spring Boot · Full-stack developer
          </p>
        </div>

        <Hero />
        <Toc />

        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <Volunteer />
      </div>
    </div>
  );
}
