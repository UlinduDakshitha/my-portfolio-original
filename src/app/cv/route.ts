export async function GET() {
  const cvText = `ULINDU DAKSHITHA BANDARA
Software Engineer

SUMMARY
Software engineer focused on building scalable web applications with Next.js and Spring Boot, with growing interest in AI/ML and DevOps automation.

TECHNICAL SKILLS
- Frontend: Next.js, React, TypeScript, CSS
- Backend: Spring Boot, Node.js, REST APIs
- Tools: Git, GitHub, DevOps workflows
- Interests: AI/ML, automation, modern web performance

EXPERIENCE HIGHLIGHTS
- Built responsive portfolio and web UI experiences
- Designed reusable components and clean frontend layouts
- Worked across modern JavaScript and Java ecosystem projects

EDUCATION
- Relevant academic background in software development and engineering

CONTACT
- Portfolio: personal website
- LinkedIn: linkedin.com/in/ulindu-dakshitha-bandara-6aa081303
- GitHub: github.com/UlinduDakshitha
`;

  return new Response(cvText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Ulindu-CV.txt"',
      "Cache-Control": "no-store",
    },
  });
}
