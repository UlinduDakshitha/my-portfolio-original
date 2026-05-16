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

        <div className={styles.resumeGrid}>
          <aside className={styles.leftCol}>
            <div className={styles.profileCard}>
              <div className={styles.avatarWrap}>
                <img
                  src="/profile.jpg"
                  alt="Ulindu"
                  className={styles.aboutAvatar}
                />
              </div>
              <h3 className={styles.profileName}>Ulindu Dakshitha</h3>
              <p className={styles.profileRole}>
                Software Engineer · Next.js & Spring Boot
              </p>
              <p className={styles.sectionLead}>
                Motivated Software Engineering undergraduate focused on building
                robust, maintainable web applications.
              </p>
              <div className={styles.interestRow}>
                <span className={styles.interestTag}>Gaming</span>
                <span className={styles.interestTag}>Film Making</span>
                <span className={styles.interestTag}>Traveling</span>
              </div>
            </div>

            <div className={styles.roleCards}>
              <div className={styles.roleCard}>
                <div>
                  <div className={styles.roleTitle}>Freelancer</div>
                  <div className={styles.roleSub}>
                    Logo/Brand Designer — 2021 - now
                  </div>
                </div>
              </div>

              <div className={styles.roleCard}>
                <div>
                  <div className={styles.roleTitle}>Meetzed</div>
                  <div className={styles.roleSub}>
                    Graphic Designer — 2020 - 2021
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.toolsCard}>
              <h4 className={styles.smallHeading}>Design Tools</h4>
              <div className={styles.toolBadges}>
                <span className={styles.toolBadge}>Ai</span>
                <span className={styles.toolBadge}>Ps</span>
                <span className={styles.toolBadge}>Id</span>
                <span className={styles.toolBadge}>Xd</span>
              </div>

              <h4
                className={styles.smallHeading}
                style={{ marginTop: "0.8rem" }}
              >
                Editing Tools
              </h4>
              <div className={styles.toolBadges}>
                <span className={styles.toolBadge}>Ae</span>
                <span className={styles.toolBadge}>Pr</span>
                <span className={styles.toolBadge}>Ps</span>
              </div>

              <h4
                className={styles.smallHeading}
                style={{ marginTop: "0.8rem" }}
              >
                Languages
              </h4>
              <div className={styles.toolBadges}>
                <span className={styles.toolBadge}>🇱🇰</span>
                <span className={styles.toolBadge}>🇬🇧</span>
                <span className={styles.toolBadge}>🇺🇸</span>
              </div>
            </div>

            <div className={styles.portfolioRow}>
              <a className={styles.portfolioLink} href="#">
                Bento
              </a>
              <a className={styles.portfolioLink} href="#">
                Behance
              </a>
              <a className={styles.portfolioLink} href="#">
                Instagram
              </a>
              <a className={styles.portfolioLink} href="#">
                YouTube
              </a>
              <a className={styles.portfolioLink} href="#">
                Dribbble
              </a>
            </div>

            <div className={styles.detailsRow}>
              <div className={styles.detailBadge}>26 years</div>
              <div className={styles.detailBadge}>iamulindu.freelancer.com</div>
              <a className={styles.detailBadge} href="tel:+919899052055">
                +91 9899052055
              </a>
              <div className={styles.detailBadge}>Sri Lanka</div>
            </div>
          </aside>

          <main className={styles.rightCol}>
            <section className={styles.aboutSection}>
              <h3 className={styles.smallHeading}>Education</h3>
              <ul className={styles.aboutList}>
                <li>
                  <strong>BSc (Hons) in Software Engineering</strong>,
                  Sabaragamuwa University of Sri Lanka — Belihuloya (Oct 2023 –
                  Present)
                </li>
                <li>
                  <strong>
                    G.C.E. Advanced Level — Physical Science Stream
                  </strong>
                  , Maliyadeva College, Kurunegala (Jan 2019 – Aug 2021)
                </li>
              </ul>
            </section>

            <section className={styles.aboutSection}>
              <h3 className={styles.smallHeading}>Professional Experience</h3>
              <ul className={styles.aboutList}>
                <li>
                  <strong>Full-Stack Development Trainee</strong>, ACPT —
                  Academy of Computer Programming and Training, Wadduwa (Jun
                  2023 – Present)
                  <div className={styles.sectionText}>
                    Completed a 6-month intensive program covering Java, Spring
                    Boot, React.js, MySQL, and full-stack development; delivered
                    3 real-world training projects and gained proficiency across
                    the web development lifecycle.
                  </div>
                </li>
              </ul>
            </section>

            <section className={styles.aboutSection}>
              <h3 className={styles.smallHeading}>Technical Skills</h3>
              <p className={`${styles.sectionText} ${styles.fadeIn}`}>
                Languages & Frameworks: Java | JavaScript | TypeScript | Spring
                Boot | React.js | Next.js | Node.js | Express.js
                <br />
                Databases & Tools: MySQL | MongoDB | PostgreSQL | Sequelize |
                Prisma | Git | GitHub | REST APIs | JWT | AWS | Postman
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
          </main>
        </div>

        {/* Contact details removed from About page per request */}

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
            Languages & Frameworks: Java | JavaScript | TypeScript | Spring Boot
            | React.js | Next.js | Node.js | Express.js
            <br />
            Databases & Tools: MySQL | MongoDB | PostgreSQL | Sequelize | Prisma
            | Git | GitHub | REST APIs | JWT | AWS | Postman
          </p>
        </section>

        {/* Projects section removed as requested */}

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

        {/* Removed Download CV and Back Home controls per request */}
      </div>
    </div>
  );
}
