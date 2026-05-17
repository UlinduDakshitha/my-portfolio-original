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
