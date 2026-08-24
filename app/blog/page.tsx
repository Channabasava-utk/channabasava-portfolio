import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen">
      <div className="container py-16">
        <Link href="/" className="text-sm text-zinc-500">
          ← Home
        </Link>

        <p className="mono mt-20 text-sm text-sky-300">BLOG</p>

        <h1 className="mt-3 text-5xl font-semibold">
          Writing & notes.
        </h1>

        <p className="mt-5 max-w-2xl text-zinc-400">
          Notes from my journey in AI, Machine Learning and software development.
        </p>

        <article className="card mt-12 p-8 md:p-10">
          <p className="mono text-sm text-sky-300">
            AUGUST 2026
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Earning My AWS Educate – Machine Learning Foundations Badge
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            I’m excited to share that I have earned the AWS Educate –
            Machine Learning Foundations badge from Amazon Web Services (AWS).
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            Why I pursued it
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            As a B.Tech Artificial Intelligence and Machine Learning student,
            I’m continuously working on strengthening my understanding of
            machine learning and cloud technologies. This learning experience
            gave me an opportunity to explore important machine learning
            foundations and understand how AWS fits into the broader AI/ML
            ecosystem.
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            What I learned
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-zinc-400">
            <li>Fundamental machine learning concepts</li>
            <li>Foundational AWS concepts related to machine learning</li>
            <li>How cloud technologies can support AI/ML workflows</li>
            <li>The importance of continuously building practical skills</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold">
            What’s next?
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            This is one step in my AI/ML learning journey. I’m looking forward
            to building more projects, learning deeper machine learning
            concepts, and applying what I learn to real-world problems.
          </p>

          <div className="mt-8">
            <a
              href="https://www.credly.com/badges/687e7939-2e17-4ea8-9017-5e29f0328a66/public_url"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:border-sky-400 hover:text-sky-300"
            >
              Verify AWS Badge ↗
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
