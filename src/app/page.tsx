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

          <div className={styles.actions}>
            <Link href="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>

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

                <a
                  href="https://www.linkedin.com/in/ulindu-dakshitha-bandara-6aa081303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certAction}
                  aria-label="LinkedIn"
                >
                  <img
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    style={{ width: 18, height: 18 }}
                  />
                </a>
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
          <p className={styles.sectionText}>
            I&apos;m a passionate software engineer focused on building
            practical, elegant web experiences. I care about clean structure,
            readable code, and interfaces that feel intentional from the first
            click.
          </p>
          <div className={styles.certificates} id="about-certificates">
            <h3 className={styles.certHeading}>Certificates</h3>
            <div className={styles.certGrid}>
              <div className={styles.certCard}>
                <div className={styles.certCardBody}>
                  <h4 className={styles.certCardTitle}>
                    Full-Stack Web Development
                  </h4>
                  <p className={styles.certCardMeta}>Coursera • 2023</p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certAction}
                >
                  View
                </a>
              </div>

              <div className={styles.certCard}>
                <div className={styles.certCardBody}>
                  <h4 className={styles.certCardTitle}>
                    Spring Boot Microservices
                  </h4>
                  <p className={styles.certCardMeta}>Udemy • 2022</p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certAction}
                >
                  View
                </a>
              </div>

              <div className={styles.certCard}>
                <div className={styles.certCardBody}>
                  <h4 className={styles.certCardTitle}>Next.js Mastery</h4>
                  <p className={styles.certCardMeta}>Frontend Masters • 2024</p>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certAction}
                >
                  View
                </a>
              </div>
            </div>
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
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
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
          <Link href="/contact" className="btn-primary">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
