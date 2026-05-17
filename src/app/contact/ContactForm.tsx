"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | {
    type: string;
    message: string;
  }>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (!name || !email || !message || !subject) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent — thank you!" });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const data = await res.json();
        setStatus({ type: "error", message: data?.error || "Failed to send." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div className={styles.formRow}>
        <label className={styles.srOnly}>Name</label>
        <input
          className={styles.input}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className={styles.srOnly}>Email</label>
        <input
          className={styles.input}
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <input
        className={styles.inputFull}
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <label className={styles.srOnly}>Message</label>
      <textarea
        className={styles.textarea}
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
      />

      <div className={styles.formActions}>
        <button
          className={`${styles.btn} ${styles.primary}`}
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <div
            className={
              status.type === "success" ? styles.success : styles.error
            }
          >
            {status.message}
          </div>
        )}
      </div>
    </form>
  );
}
