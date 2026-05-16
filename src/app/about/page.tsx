import styles from "../page.module.css";

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

        <div className={styles.simpleHero}>
          <div className={styles.avatarWrap}>
            <img
              src="/profile.jpg"
              alt="Ulindu"
              className={styles.aboutAvatar}
            />
          </div>
          <div>
            <h3 className={styles.profileName}>Ulindu Dakshitha</h3>
            <p className={styles.profileRole}>
              Software Engineer · Next.js & Spring Boot
            </p>
            <p className={styles.sectionLead} style={{ marginTop: 6 }}>
              Motivated Software Engineering undergraduate focused on building
              robust, maintainable web applications. I design clean APIs with
              Spring Boot and polished frontends with Next.js.
            </p>
            {/* contact buttons intentionally removed for a cleaner CV presentation */}
          </div>
        </div>

        <section className={styles.aboutSection}>
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

        <section className={styles.aboutSection}>
          <h3 className={styles.smallHeading}>Professional Experience</h3>
          <ul className={styles.aboutList}>
            <li>
              <strong>Full-Stack Development Trainee</strong>, ACPT — Academy of
              Computer Programming and Training, Wadduwa (Jun 2023 – Present)
              <div className={styles.sectionText}>
                Completed a 6-month intensive program covering Java, Spring
                Boot, React.js, MySQL, and full-stack development; delivered 3
                real-world training projects and gained proficiency across the
                web development lifecycle.
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.aboutSection}>
          <h3 className={styles.smallHeading}>Technical Skills</h3>
          <p className={`${styles.sectionText} ${styles.fadeIn}`}>
            Java · Spring Boot · Next.js · React · Node.js · TypeScript · MySQL
            · MongoDB · REST APIs · Docker
          </p>
        </section>

        <section className={styles.aboutSection}>
          <h3 className={styles.smallHeading}>Certifications</h3>
          <ul className={styles.aboutList}>
            <li>Postman API Fundamentals Student Expert — Postman</li>
            <li>Postman Essentials — KodeKloud</li>
            <li>Critical Thinking in the AI Era — HP LIFE</li>
            <li>Git & GitHub for Beginners — Udemy</li>
          </ul>
        </section>

        <section className={styles.aboutSection}>
          <h3 className={styles.smallHeading}>Volunteer Experience</h3>
          <p className={styles.sectionText}>
            COMURS 2025 — Sabaragamuwa University of Sri Lanka — Program
            Moderator (2025 Present)
          </p>
        </section>

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
        {/* Removed Download CV and Back Home controls per request */}
      </div>
    </div>
  );
}
