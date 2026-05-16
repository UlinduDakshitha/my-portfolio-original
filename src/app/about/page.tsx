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
          <h2 className={styles.sectionTitle}>About / CV</h2>
        </div>

        <section style={{ marginBottom: "1rem" }}>
          <h3 className={styles.smallHeading}>Profile</h3>
          <p className={styles.sectionText}>
            Motivated Software Engineering undergraduate with strong academic
            and hands-on experience in full-stack application development using
            Java, Node.js, React.js, and modern web technologies. Passionate
            about building scalable and efficient software solutions while
            following secure coding and software engineering best practices.
          </p>
        </section>

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

        <section>
          <h3 className={styles.smallHeading}>Key Projects</h3>
          <ul className={styles.aboutList}>
            <li>
              <strong>SMARTBIZ</strong> — Full-stack ERP system with inventory,
              customer records, and core business operations (Individual
              project)
            </li>
            <li>
              <strong>INKMATCH</strong> — Marketplace platform for artists and
              studios with bookings and profiles (Individual, ongoing)
            </li>
            <li>
              <strong>SULSCORE</strong> — University management system for
              students and staff (Group ongoing)
            </li>
            <li>
              <strong>PURE NATION</strong> — Community platform for
              environmental issue reporting (Group project)
            </li>
            <li>
              <strong>CEYLONCONNECT</strong> — Tourism platform with local Sri
              Lankan destinations and services (Group project)
            </li>
          </ul>
        </section>

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
