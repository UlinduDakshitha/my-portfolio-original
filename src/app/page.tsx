import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../assets/Gemini_Generated_Image_ryc8zqryc8zqryc8.png";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={`${styles.hero} container`}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot}></span>
            Available for new projects
          </div>

          <h1 className={styles.title}>
            Hi, I&apos;m <br />
            <span className="gradient-text">Ulindu</span>
          </h1>

          <h2 className={styles.subtitle}>Software Engineer</h2>

          <p className={styles.description}>
            I build clean, scalable digital products with{" "}
            <strong>Next.js</strong>, <strong>Spring Boot</strong>, and a focus
            on thoughtful UX. I like turning complex ideas into interfaces that
            feel fast, modern, and easy to use.
          </p>

          {/* action links removed per request */}

          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} glass`}>
              <span className={styles.statValue}>Full-Stack</span>
              <span className={styles.statLabel}>Web apps and APIs</span>
            </div>
            <div className={`${styles.statCard} glass`}>
              <span className={styles.statValue}>AI/ML</span>
              <span className={styles.statLabel}>Experimentation mindset</span>
            </div>
            <div className={`${styles.statCard} glass`}>
              <span className={styles.statValue}>DevOps</span>
              <span className={styles.statLabel}>Automation workflows</span>
            </div>
          </div>

          <div className={`${styles.cvCard} glass`}>
            <div className={styles.cvTopline}>
              <span className={styles.cvBadge}>CV</span>
              <span className={styles.cvMeta}>Fast overview of my work</span>
            </div>

            <div className={styles.cvCopy}>
              <h3 className={styles.cvTitle}>Download my CV</h3>
              <p className={styles.cvLine}>
                A concise snapshot of my skills, experience, and projects.
              </p>
            </div>

            <div className={styles.cvFooter}>
              <span className={styles.cvHint}>PDF download</span>
              <div
                style={{
                  display: "flex",
                  gap: "0.65rem",
                  alignItems: "center",
                }}
              >
                <a
                  href="/cv"
                  download="Ulindu_Dakshitha_CV.pdf"
                  className={styles.cvAction}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.cvIcon}>↘</span>
                  <span>Download CV</span>
                </a>

                {/* LinkedIn moved to About section */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.imageWrapper}>
            <div className={`${styles.photoPlaceholder} glass`}>
              <Image
                src={profilePhoto}
                alt="Ulindu profile photo"
                fill
                sizes="(max-width: 992px) 300px, 380px"
                style={{ objectFit: "cover", borderRadius: "30px" }}
                priority
              />
              <div className={styles.photoOverlay}>
                <span className={styles.overlayBadge}>Software Engineer</span>
                <p>
                  Building polished, reliable interfaces with modern full-stack
                  tooling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.section} container`}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIndex}>01</span>
            <h2 className={styles.sectionTitle}>About Me</h2>
          </div>
          <div className={styles.aboutProfile}>
            <p className={styles.sectionText}>
              Motivated Software Engineering undergraduate with strong academic
              background and hands-on experience in full-stack application
              development using Java, Node.js, React.js, and modern web
              technologies. Passionate about building scalable, secure, and
              maintainable software while following engineering best practices.
            </p>

            <div className={styles.aboutContacts}>
              <div>
                <strong>Email:</strong> ulindudakshitha001@gmail.com
              </div>
              <div>
                <strong>Phone:</strong> +94 71 702 8242
              </div>
              <div>
                <strong>Location:</strong> Colombo, Sri Lanka
              </div>
              <div>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/ulindu-dakshitha-bandara-6aa081303"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.linkedin.com/in/ulindu-dakshitha-bandara-6aa081303
                </a>
              </div>
            </div>

            <h3 className={styles.smallHeading}>Education</h3>
            <ul className={styles.aboutList}>
              <li>
                <strong>BSc (Hons) in Software Engineering</strong>,
                Sabaragamuwa University of Sri Lanka — Belihuloya (Oct 2023 –
                Present)
              </li>
              <li>
                <strong>G.C.E. Advanced Level</strong> — Maliyadeva College,
                Kurunegala (Jan 2019 – Aug 2021)
              </li>
            </ul>

            <h3 className={styles.smallHeading}>Technical Skills</h3>
            <p className={styles.sectionText}>
              Languages & Frameworks: Java | JavaScript | TypeScript | Spring
              Boot | React.js | Next.js | Node.js | Express.js
              <br />
              Databases & Tools: MySQL | MongoDB | PostgreSQL | Sequelize | Git
              | GitHub | REST APIs | JWT | AWS | Postman
            </p>

            <h3 className={styles.smallHeading}>Selected Projects</h3>
            <ul className={styles.aboutList}>
              <li>
                <strong>SMARTBIZ</strong> — Full-stack ERP system with inventory
                and customer management, secure authentication, and REST APIs.
              </li>
              <li>
                <strong>INKMATCH</strong> — Marketplace platform for artists and
                studios with bookings and profile management.
              </li>
              <li>
                <strong>SULSCORE</strong> — University management system for
                student and academic workflows.
              </li>
            </ul>

            <h3 className={styles.smallHeading}>Certifications</h3>
            <ul className={styles.aboutList}>
              <li>Postman API Fundamentals Student Expert — Postman</li>
              <li>Postman Essentials — KodeKloud</li>
              <li>Critical Thinking in the AI Era — HP LIFE</li>
              <li>Git & GitHub for Beginners — Udemy</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className={`${styles.section} container`}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIndex}>02</span>
            <h2 className={styles.sectionTitle}>Projects</h2>
          </div>
          <p className={styles.sectionText}>
            Explore selected work and practical experiments that mix UI polish,
            product thinking, and technical depth.
          </p>
          {/* Removed direct navigation to /projects from homepage */}
        </div>
      </section>

      <section id="contact" className={`${styles.section} container`}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIndex}>03</span>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
          </div>
          <p className={styles.sectionText}>
            If you have a project, collaboration, or opportunity in mind, feel
            free to reach out. I&apos;m always open to interesting
            conversations.
          </p>
          {/* Removed direct navigation to /contact from homepage */}
        </div>
      </section>
    </div>
  );
}
