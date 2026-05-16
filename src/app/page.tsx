import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../assets/Gemini_Generated_Image_ryc8zqryc8zqryc8.png";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={`${styles.hero} container`}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Hi, I&apos;m <br />
            <span className="gradient-text">Ulindu</span>
          </h1>
          <h2 className={styles.subtitle}>Software Engineer</h2>
          <p className={styles.description}>
            Turning complex problems into elegant, scalable solutions using{" "}
            <strong>Next.js</strong> & <strong>Spring Boot</strong>. I am deeply
            passionate about pushing the boundaries of web development by
            integrating <span className="gradient-text">AI/ML</span> and
            automating workflows through{" "}
            <span style={{ color: "var(--accent-cyan)" }}>DevOps</span>.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className={`${styles.cvCard} glass`}>
            <div className={styles.cvTopline}>
              <span className={styles.cvBadge}></span>
              <span className={styles.cvMeta}></span>
            </div>

            <div className={styles.cvCopy}>
              <h3 className={styles.cvTitle}>Download my CV</h3>
              <p className={styles.cvLine}>
                A concise snapshot of my skills, experience, and projects.
              </p>
            </div>

            <div className={styles.cvFooter}>
              <span className={styles.cvHint}></span>
              <a
                href="/cv"
                download="Ulindu_Dakshitha_CV.pdf"
                className={styles.cvAction}
              >
                <span className={styles.cvIcon}>↘</span>
                <span>Download CV</span>
              </a>
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
            </div>
          </div>
        </div>
      </section>
      <section id="about" className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionText}>
          I&apos;m a passionate software engineer with experience in building
          modern, scalable web applications. I enjoy turning ideas into clean,
          usable products with strong attention to detail.
        </p>
      </section>

      <section id="projects" className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionText}>
          Explore some of my recent work and practical experiments. I focus on
          useful solutions, clean interfaces, and solid engineering.
        </p>
        <Link href="/projects" className="btn-primary">
          View All Projects
        </Link>
      </section>

      <section id="contact" className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionText}>
          If you have a project, collaboration, or opportunity in mind, feel
          free to reach out. I&apos;m always open to interesting conversations.
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Me
        </Link>
      </section>
    </div>
  );
}
