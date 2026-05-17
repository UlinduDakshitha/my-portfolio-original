import styles from "../../page.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.simpleHero}>
      <div className={styles.avatarWrap}>
        <Image
          src="/profile.jpg"
          alt="Ulindu"
          width={112}
          height={112}
          className={styles.aboutAvatar}
          priority
        />
      </div>
      <div>
        <h3 className={styles.profileName}>Ulindu Dakshitha</h3>
        <p className={styles.profileRole}>
          Software Engineer
        </p>
        <p className={styles.sectionLead} style={{ marginTop: 6 }}>
          Motivated Software Engineering undergraduate focused on building
          robust, maintainable web applications. I design clean APIs with Spring
          Boot and polished frontends with Next.js.
        </p>
      </div>
    </div>
  );
}
