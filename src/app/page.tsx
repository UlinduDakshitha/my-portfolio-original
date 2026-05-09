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
            <strong style={{ color: "var(--text-primary)" }}>Next.js</strong> &{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              Spring Boot
            </strong>
            . I am deeply passionate about pushing the boundaries of web
            development by integrating{" "}
            <span className="gradient-text">AI/ML</span> and automating
            workflows through{" "}
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
    </div>
  );
}
