import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  Braces,
  Brain,
  Wrench,
  Code2,
  ExternalLink,
} from "lucide-react";

const expertise = [
  {
    icon: Braces,
    title: "Programming",
    items:
      "Python, C, Problem Solving, Data Structures & Algorithms",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    items:
      "Core ML concepts, exploring neural networks, applied problem-solving with AI",
  },
  {
    icon: Wrench,
    title: "Tools & Practices",
    items:
      "Git, GitHub, VS Code, debugging, clean code practices",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="grid-bg border-b border-zinc-800">
        <div className="container py-24 md:py-36">

          <span className="mono inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1 text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to internships & collaborations
          </span>

          <p className="mono mt-6 text-sm text-sky-300">
            AI/ML STUDENT • DEVELOPER • BUILDER
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
            Channabasava Utk
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            B.Tech AI-ML student at PES University, exploring Python, C,
            Artificial Intelligence, Machine Learning and software
            development.
          </p>

          <div className="mt-9 flex gap-3">

           <a
  href="#contact"
  className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white"
  style={{ color: "#09090b" }}
>
  Contact me
</a>

            <a
              href="/blog"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm"
            >
              Explore blog
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container py-20">

        <p className="mono text-sm text-sky-300">
          01 / ABOUT
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Learning by building.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 leading-8 text-zinc-400">

          <p>
            I&rsquo;m a B.Tech Artificial Intelligence and Machine Learning
            student at PES University, Bengaluru, with a strong interest in
            Artificial Intelligence, Machine Learning, and software
            development.
          </p>

          <p>
            I&rsquo;ve built a foundation in Python and C programming,
            problem solving, data structures, and core AI/ML concepts. I
            enjoy learning by building projects and exploring how technology
            can be applied to solve real-world problems.
          </p>

          <p>
            Goal: To become a skilled AI Engineer and build impactful
            solutions using AI and Machine Learning.
          </p>

        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="border-y border-zinc-800">

        <div className="container py-20">

          <p className="mono text-sm text-sky-300">
            02 / EXPERTISE
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            What I work with.
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">

            {expertise.map(({ icon: Icon, title, items }) => (

              <div key={title} className="card p-6">

                <Icon size={20} />

                <h3 className="mt-6 text-lg font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {items}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-b border-zinc-800"
      >

        <div className="container py-20">

          <p className="mono text-sm text-sky-300">
            03 / PROJECTS
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Things I&rsquo;ve built.
          </h2>

          <div className="mt-9 grid gap-5">

            <div className="card p-7">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <Code2 size={22} />

                  <h3 className="mt-6 text-2xl font-semibold">
                    Top Headlines Dashboard
                  </h3>

                  <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
                    A live news aggregation dashboard that fetches and
                    displays the latest headlines from multiple news
                    sources using RSS feeds and a REST API.
                  </p>
                </div>

              </div>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  HTML
                </span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  CSS
                </span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  JavaScript
                </span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  RSS
                </span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  REST API
                </span>

              </div>

              <div className="mt-7 flex flex-wrap gap-3">

                <a
                  href="https://github.com/Channabasava-utk/top-headlines-dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:border-sky-400 hover:text-sky-300"
                >
                  GitHub
                  <ExternalLink size={15} />
                </a>

                <a
                  href="https://channabasava-utk.github.io/top-headlines-dashboard/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm transition hover:border-sky-400 hover:text-sky-300"
                >
                  Live Demo
                  <ExternalLink size={15} />
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="container py-20">

        <p className="mono text-sm text-sky-300">
          04 / ACHIEVEMENTS
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Education & credentials.
        </h2>

        <div className="mt-9 grid gap-5 md:grid-cols-2">

          {/* PES */}
          <div className="card p-6">

            <GraduationCap />

            <h3 className="mt-6 text-xl font-semibold">
              PES University
            </h3>

            <p className="mt-2 text-zinc-400">
              Bachelor of Technology — Artificial Intelligence
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              2025 — 2029 • First-Year CGPA: 9.15
            </p>

          </div>

          {/* JNV */}
          <div className="card p-6">

            <GraduationCap />

            <h3 className="mt-6 text-xl font-semibold">
              Jawahar Navodaya Vidyalaya — JNV
            </h3>

            <p className="mt-2 text-zinc-400">
              Matriculation
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              2023 — Completed • 91.4%
            </p>

          </div>

          {/* HACKERRANK */}
          <div className="card p-6">

            <BookOpen />

            <h3 className="mt-6 text-xl font-semibold">
              Python (Basic)
            </h3>

            <p className="mt-2 text-zinc-400">
              HackerRank • Issued Dec 2025
            </p>

            <p className="mono mt-3 text-xs text-zinc-500">
              Credential ID 698B08BCB332
            </p>

            <a
              className="mt-5 inline-block rounded-full border border-zinc-700 px-4 py-2 text-sm"
              href="https://www.hackerrank.com/certificates/698b08bcb332"
              target="_blank"
              rel="noreferrer"
            >
              Show credential ↗
            </a>

          </div>

          {/* LAST ONE STANDING */}
          <div className="card p-6">

            <BookOpen />

            <h3 className="mt-6 text-xl font-semibold">
              The Last One Standing
            </h3>

            <p className="mt-2 text-zinc-400">
              Certificate of Participation • Team Aethros • PES University
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              12–13 September 2025
            </p>

          </div>

          {/* AWS */}
          <div className="card p-6">

            <BookOpen />

            <h3 className="mt-6 text-xl font-semibold">
              AWS Educate – Machine Learning Foundations
            </h3>

            <p className="mt-2 text-zinc-400">
              Amazon Web Services (AWS)
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Machine Learning Foundations
            </p>

            <a
              className="mt-5 inline-block rounded-full border border-zinc-700 px-4 py-2 text-sm"
              href="https://www.credly.com/badges/687e7939-2e17-4ea8-9017-5e29f0328a66/public_url"
              target="_blank"
              rel="noreferrer"
            >
              Verify credential ↗
            </a>

          </div>
          

{/* GENERATIVE AI FOR EVERYONE */}
<div className="card p-6">
  <BookOpen />

  <h3 className="mt-6 text-xl font-semibold">
    Generative AI for Everyone
  </h3>

  <p className="mt-2 text-zinc-400">
    DeepLearning.AI • Coursera
  </p>

  <p className="mt-3 text-sm text-zinc-500">
    Completed Aug 2026
  </p>

  <a
    className="mt-5 inline-block rounded-full border border-zinc-700 px-4 py-2 text-sm"
    href="https://coursera.org/verify/ENBYGWAAH59E"
    target="_blank"
    rel="noreferrer"
  >
    Verify credential ↗
  </a>
</div>

        </div>
      </section>

      {/* BLOG */}
      <section className="border-y border-zinc-800">

        <div className="container py-20">

          <p className="mono text-sm text-sky-300">
            05 / BLOG
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Learning, building & sharing.
          </h2>

         <div className="grid gap-6 md:grid-cols-2">

  {/* GENERATIVE AI ARTICLE */}
  <div className="card p-8">
    <p className="mono text-xs text-sky-300">
      LATEST ARTICLE
    </p>

    <h3 className="mt-4 text-2xl font-semibold">
      What I Learned from Generative AI for Everyone
    </h3>

    <p className="mt-3 leading-7 text-zinc-400">
      A reflection on what I learned about Generative AI,
      its applications, and how it connects to my AI/ML journey.
    </p>

    <a
      href="/blog"
      className="mt-6 inline-block text-sm font-medium hover:text-sky-300"
    >
      Read article ↗
    </a>
  </div>

  {/* AWS ARTICLE */}
  <div className="card p-8">
    <p className="mono text-xs text-sky-300">
      ARTICLE
    </p>

    <h3 className="mt-4 text-2xl font-semibold">
      Earning My AWS Educate – Machine Learning Foundations Badge
    </h3>

    <p className="mt-3 leading-7 text-zinc-400">
      I’m excited to share my AWS Educate – Machine Learning
      Foundations badge and reflect on what I learned during
      my AI/ML journey.
    </p>

    <a
      href="/blog"
      className="mt-6 inline-block text-sm font-medium hover:text-sky-300"
    >
      Read article ↗
    </a>
  </div>

</div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container py-24">

        <p className="mono text-sm text-sky-300">
          06 / CONTACT
        </p>

        <h2 className="mt-3 text-4xl font-semibold">
          Let&rsquo;s connect.
        </h2>

        <p className="mt-5 max-w-xl text-zinc-400">
          Open to learning, collaboration and interesting projects around
          AI, ML and technology.
        </p>

        <ContactForm />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          <a
            href="tel:+918951271507"
            className="rounded-xl border border-zinc-700 px-5 py-4 text-sm transition hover:border-sky-400 hover:text-sky-300"
          >
            <Phone className="mr-2 inline" size={16} />
            +91 89512 71507
          </a>

          <a
            href="mailto:channabasavautk@gmail.com"
            className="rounded-xl border border-zinc-700 px-5 py-4 text-sm transition hover:border-sky-400 hover:text-sky-300"
          >
            <Mail className="mr-2 inline" size={16} />
            channabasavautk@gmail.com
          </a>

          <a
            href="https://x.com/Channabasavautk"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-4 text-sm transition hover:border-sky-400 hover:text-sky-300"
          >
            <span className="mr-2 inline font-semibold">
              𝕏
            </span>
            X ↗
          </a>

          <a
            href="https://www.linkedin.com/in/channabasava-utk-b60bb6327"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-4 text-sm transition hover:border-sky-400 hover:text-sky-300"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Channabasava-utk"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-4 text-sm transition hover:border-sky-400 hover:text-sky-300"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.instagram.com/_channa_.07/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-4 text-sm transition hover:border-sky-400 hover:text-sky-300"
          >
            Instagram ↗
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800">

        <div className="container py-8 text-sm text-zinc-500">
          © 2026 Channabasava Utk · Built with curiosity.
        </div>

      </footer>
    </main>
  );
}
