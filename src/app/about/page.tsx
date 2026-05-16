import Link from "next/link";
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
        </div>

        <div className={styles.aboutHero}>
          <div>
            <p className={styles.sectionLead}>
              Motivated Software Engineering undergraduate focused on building
              robust, maintainable web applications. I enjoy designing clean
              APIs with Spring Boot and shipping polished frontends with
              Next.js.
            </p>
          </div>

          <aside className={styles.skillPanel}>
            <h4 className={styles.smallHeading}>Core Skills</h4>
            <div className={styles.skillTags}>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>Spring Boot</span>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Node.js</span>
              <span className={styles.tag}>TypeScript</span>
              <span className={styles.tag}>MySQL</span>
              <span className={styles.tag}>MongoDB</span>
              <span className={styles.tag}>REST APIs</span>
              <span className={styles.tag}>Docker</span>
            </div>
          </aside>
        </div>

        {/* Contact details removed from About page per request */}

        <section>
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

        <section>
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

        <section>
          <h3 className={styles.smallHeading}>Technical Skills</h3>
          <p className={styles.sectionText}>
            Languages & Frameworks: Java | JavaScript | TypeScript | Spring Boot
            | React.js | Next.js | Node.js | Express.js
            <br />
            Databases & Tools: MySQL | MongoDB | PostgreSQL | Sequelize | Prisma
            | Git | GitHub | REST APIs | JWT | AWS | Postman
          </p>
        </section>

        {/* Projects section removed as requested */}

        <section>
          <h3 className={styles.smallHeading}>Certifications</h3>
          <ul className={styles.aboutList}>
            <li>Postman API Fundamentals Student Expert — Postman</li>
            <li>Postman Essentials — KodeKloud</li>
            <li>Critical Thinking in the AI Era — HP LIFE</li>
            <li>Git & GitHub for Beginners — Udemy</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.smallHeading}>Volunteer Experience</h3>
          <p className={styles.sectionText}>
            COMURS 2025 — Sabaragamuwa University of Sri Lanka — Program
            Moderator (2025 Present)
          </p>
        </section>

        {/* Removed Download CV and Back Home controls per request */}
      </div>
    </div>
  );
}
