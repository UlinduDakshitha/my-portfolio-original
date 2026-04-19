import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={`${styles.hero} container`}>
        <div className={`${styles.heroContent} animate-fade-in`}>
          <h1 className={styles.title}>
            Hi, I'm <br />
            <span className="gradient-text">Ulindu</span>
          </h1>
          <h2 className={`${styles.subtitle} delay-1`}>
            Software Engineer
          </h2>
          <p className={`${styles.description} delay-2`}>
            Passionate about Full-Stack Web Development, <span style={{ color: 'var(--accent-purple)' }}>AI/ML/DL</span>, and <span style={{ color: 'var(--accent-cyan)' }}>DevOps</span>. I build scalable applications with modern technologies like React, Next.js, and Spring Boot.
          </p>
          <div className={`${styles.actions} delay-3`}>
            <Link href="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className={`${styles.heroVisual} animate-fade-in delay-2`}>
          <div className={styles.imageWrapper}>
            {/* Using a sleek geometric avatar placeholder until photo is provided/linked */}
            <div className={`${styles.photoPlaceholder} glass`}>
              <div className={styles.glowEffect}></div>
              <svg xmlns="http://www.000000.com/" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={styles.userIcon}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>




          </div>
        </div>
      </section>
    </div>
  );
}
