import styles from "./page.module.css";

export default function About() {
  return (
    <div className={`container section ${styles.aboutContainer}`}>
      <div className={`${styles.header} animate-fade-in`}>
        <h1 className="gradient-text">About Me</h1>
        <p className={styles.intro}>
          Motivated Software Engineering undergraduate blending full-stack web
          development with a strong passion for Artificial Intelligence, Deep
          Learning, and DevOps.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Education & Experience */}
        <div className={`${styles.column} animate-fade-in delay-1`}>
          <div className={`${styles.card} glass hover-lift`}>
            <h2 className={styles.cardTitle}>Education</h2>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <h3>BSc (Hons) in Software Engineering</h3>
              <h4>Sabaragamuwa University of Sri Lanka</h4>
              <span className={styles.date}>Oct 2023 — Present</span>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <h3>G.C.E. Advanced Level (Physical Science)</h3>
              <h4>Maliyadeva College, Kurunegala</h4>
              <span className={styles.date}>Jan 2019 — Aug 2021</span>
            </div>
          </div>

          <div className={`${styles.card} glass hover-lift`}>
            <h2 className={styles.cardTitle}>Experience</h2>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <h3>Full-Stack Development Trainee</h3>
              <h4>ACPT – Academy of Computer Programming and Training</h4>
              <span className={styles.date}>Jun 2025 — Present</span>
              <p className={styles.desc}>
                Delivered real-world training projects using Java Spring Boot,
                React.js, MySQL, REST API development, and AWS deployment.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <h3>Event Volunteer</h3>
              <h4>ComURS 2025, SUSL</h4>
              <span className={styles.date}>Nov 2025</span>
              <p className={styles.desc}>
                Coordinated logistics and on-site operations for the annual
                computing symposium.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Certifications */}
        <div className={`${styles.column} animate-fade-in delay-2`}>
          <div className={`${styles.card} glass hover-lift`}>
            <h2 className={styles.cardTitle}>Technical Skills</h2>

            <div className={styles.skillGroup}>
              <h3>Languages & Frameworks</h3>
              <div className={styles.tags}>
                <span>Java</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Spring Boot</span>
                <span>React.js</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <h3>Databases & Tools</h3>
              <div className={styles.tags}>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Git / GitHub</span>
                <span>REST APIs</span>
                <span>AWS</span>
                <span>Postman</span>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <h3>Core Interests</h3>
              <div className={styles.tags}>
                <span className={styles.highlightTag}>
                  Artificial Intelligence (AI)
                </span>
                <span className={styles.highlightTag}>
                  Machine Learning (ML)
                </span>
                <span className={styles.highlightTag}>Deep Learning (DL)</span>
                <span className={styles.highlightTag}>DevOps</span>
              </div>
            </div>
          </div>

          <div className={`${styles.card} glass hover-lift`}>
            <h2 className={styles.cardTitle}> Certifications</h2>
            <ul className={styles.certList}>
              <li>
                Postman API Fundamentals Student Expert —{" "}
                <span>Postman, 2026</span>
              </li>
              <li>
                Postman Essentials — <span>KodeKloud, 2026</span>
              </li>
              <li>
                
                <span className={styles.certText}>
                  Critical Thinking in the AI Era — <span>HP LIFE, 2026</span>
                </span>
              </li>
              <li>
                <span className={styles.certIcon}>U</span>
                <span className={styles.certText}>
                  Git & GitHub for Beginners — <span>Udemy, 2025</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
