import styles from "./page.module.css";

export default function Projects() {
  const projects = [
    {
      title: "SMARTBIZ",
      type: "Individual Project",
      date: "Jan–Mar 2026",
      description:
        "A full-stack ERP system built as sole developer, managing inventory, customer records, and core business operations across 5+ integrated modules. Includes secure JWT authentication and 20+ RESTful API endpoints achieving full CRUD coverage.",
      role: "Fullstack Developer",
      tech: ["React.js", "Java Spring Boot", "MySQL"],
      link: "https://github.com/stars/UlinduDakshitha/lists/smart-biz",
      delay: "delay-1",
    },
    {
      title: "INKMATCH",
      type: "Individual",
      date: "Feb 2026–Present",
      description:
        "A marketplace platform for users to discover tattoo artists and studios, browse portfolios, and book appointments. Features 4-tier role-based access control and scalable APIs for bookings and consultations.",
      role: "Fullstack Developer",
      tech: ["Next.js", "TypeScript", "Java Spring Boot", "MySQL"],
      link: "https://github.com/stars/UlinduDakshitha/lists/inkmatch",
      delay: "delay-2",
    },
    {
      title: "SUSLCORE",
      type: "Group (Ongoing)",
      date: "Jan 2026–Present",
      description:
        "A university-level financial aid management system serving 100+ students. Developed collaboratively in an Agile team of 5 using Git feature-branch workflows and regular code reviews.",
      role: "Backend Developer",
      tech: ["Next.js", "Node.js", "Express.js", "MySQL"],
      link: "https://github.com/orgs/SUSLCore/repositories",
      delay: "delay-3",
    },
    {
      title: "PURE NATION",
      type: "Group Project",
      date: "Jun–Dec 2025",
      description:
        "A community platform for Sri Lankans to report environmental issues and coordinate clean-up activities. Includes RESTful APIs for issue tracking and user authentication with a fully responsive UI.",
      role: "Fullstack Developer",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Sequelize"],
      link: "https://github.com/stars/UlinduDakshitha/lists/pure-nation",
      delay: "delay-4",
    },
    {
      title: "CEYLONCONNECT",
      type: "Group Project",
      date: "Mar–Aug 2025",
      description:
        "A tourism platform connecting travelers with local Sri Lankan destinations and services. Featuring dynamic content management with Prisma ORM and an optimized, responsive interface.",
      role: "Frontend Lead",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma"],
      link: "https://github.com/CeylonConnect",
      delay: "delay-1",
    },
  ];

  return (
    <div className={`container section ${styles.projectsContainer}`}>
      <div className={`${styles.header} animate-fade-in`}>
        <h1 className="gradient-text">Key Projects</h1>
        <p className={styles.intro}>
          A showcase of real-world applications I've built, emphasizing scalable
          architecture and elegant UI.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.card} glass hover-lift animate-fade-in ${project.delay}`}
          >
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <span className={styles.date}>{project.date}</span>
            </div>

            <div className={styles.subtext}>
              <strong>{project.type}</strong> • My Role:{" "}
              <span className={styles.highlight}>{project.role}</span>
            </div>

            <p className={styles.desc}>{project.description}</p>

            <div className={styles.techStack}>
              {project.tech.map((tech, idx) => (
                <span key={idx} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
