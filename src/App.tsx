import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/profile.jpg";

import {
  achievements,
  education,
  experience,
  profile,
  projects,
  publications,
  skills,
} from "./data";

function Chip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm text-zinc-700 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-white/85">
      {text}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      {children}
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 py-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </motion.section>
  );
}



export default function App() {

  // GitHub Pages safe
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "publications", label: "Publications" },
      { id: "achievements", label: "Awards" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("about");

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 160;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) {
          setActive(item.id);
          return;
        }
      }
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [navItems]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-white text-zinc-900 dark:from-[#06122b] dark:via-[#071a3a] dark:to-[#050a18] dark:text-white">
      {/* Blue bubble background ONLY in dark mode */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="bubble absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#3b82f6]" />
        <div className="bubble2 absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#a855f7]" />
        <div className="bubble absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#22c55e]" />
        <div className="bubble2 absolute bottom-24 right-1/4 h-80 w-80 rounded-full bg-[#06b6d4]" />
      </div>

      {/* TOP BAR */}
      <div className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-[#050a18]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#about" className="font-semibold text-zinc-900 dark:text-white">
            {profile.name}
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  active === item.id
                    ? "text-sm font-semibold text-zinc-900 underline decoration-2 underline-offset-8 dark:text-white"
                    : "text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeHref}
              download
              className="rounded-xl border border-zinc-200 bg-white/60 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Download Resume
            </a>

            
          </div>
        </div>
      </div>

      {/* HERO */}
      <section id="about" className="scroll-mt-24 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-sm uppercase tracking-wider text-zinc-500 dark:text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {profile.title}
            </h1>

            <p className="mt-5 text-zinc-700 dark:text-white/80">{profile.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.highlights.map((h) => (
                <Chip key={h} text={h} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-[#050a18]"
              >
                Email me
              </a>

              <a
                href={profile.github}
                className="rounded-xl border border-zinc-200 bg-white/60 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                className="rounded-xl border border-zinc-200 bg-white/60 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-500 dark:text-white/70">{profile.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <Card>
              <div className="mb-5 flex items-center gap-5">
                <motion.div
                  className="h-56 w-56 overflow-hidden rounded-full border border-zinc-200 shadow-lg dark:border-white/15"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src={profilePic}
                    alt="Pranitha profile"
                    className="h-full w-full object-cover object-center brightness-90 contrast-105 saturate-90"
                  />
                </motion.div>

                <div>
                 <p className="text-lg text-white/70">Hi, I’m</p>
<p className="text-4xl font-semibold leading-tight">{profile.name}</p>


                </div>
              </div>

              <h3 className="text-lg font-semibold">Quick Info</h3>
              <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-white/80">
                <p>
                  <span className="font-medium text-zinc-900 dark:text-white">Email:</span>{" "}
                  <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </p>
                
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          {experience.map((e) => (
            <motion.div
              key={`${e.company}-${e.role}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
            >
              <Card>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <p className="text-sm text-zinc-600 dark:text-white/70">{e.company}</p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-white/60">{e.dates}</p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-white/80">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <Chip key={t} text={t} />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
            >
              <Card>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-white/80">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t} text={t} />
                  ))}
                </div>

                {p.links?.length ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="text-sm underline underline-offset-4 text-zinc-800 hover:text-zinc-900 dark:text-white/90 dark:hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

 {/* EDUCATION */}
      <Section id="education" title="Education">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((ed) => (
            <Card key={`${ed.school}-${ed.degree}`}>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{ed.degree}</h3>
                  <p className="text-sm text-zinc-600 dark:text-white/70">{ed.school}</p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-white/60">{ed.dates}</p>
              </div>

              {ed.note ? (
                <p className="mt-3 text-sm text-zinc-700 dark:text-white/80">{ed.note}</p>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>



      {/* PUBLICATIONS */}
      <Section id="publications" title="Publications">
        <div className="grid gap-4">
          {publications.map((pub) => (
            <Card key={pub.title}>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-lg font-semibold">{pub.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-white/60">{pub.date}</p>
              </div>

              <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">{pub.venue}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-white/80">
                {pub.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <Card key={group}>
              <h3 className="text-lg font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((x) => (
                  <Chip key={x} text={x} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

     
      {/* ACHIEVEMENTS */}
      <Section id="achievements" title="Awards & Achievements">
        <Card>
          <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-white/80">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Card>
          <p className="text-sm text-zinc-700 dark:text-white/80">
            Want to collaborate or have an opportunity? Reach out:
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-[#050a18]"
            >
              Email
            </a>

            <a
              href={profile.linkedin}
              className="rounded-xl border border-zinc-200 bg-white/60 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href={profile.github}
              className="rounded-xl border border-zinc-200 bg-white/60 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </Card>

        <p className="mx-auto mt-8 max-w-6xl px-4 text-xs text-zinc-500 dark:text-white/50">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Section>
    </div>
  );
}
