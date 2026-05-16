"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToTarget = (targetY: number, duration = 1100) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string,
  ) => {
    if (pathname !== "/") {
      return;
    }

    if (name === "Home") {
      event.preventDefault();
      setMobileOpen(false);
      scrollToTarget(0, 900);
      return;
    }

    const targetId = name.toLowerCase();
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    setMobileOpen(false);

    const offsetTop =
      targetElement.getBoundingClientRect().top + window.scrollY - 80;
    scrollToTarget(offsetTop, 1200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="gradient-text">Ulindu</span>.
        </Link>

        <div
          className={`${styles.navLinks} ${mobileOpen ? styles.mobileOpen : ""}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href, link.name)}
              className={`${styles.navLink} ${pathname === "/" && link.name === "Home" ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
