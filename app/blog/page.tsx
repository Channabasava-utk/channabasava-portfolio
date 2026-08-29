import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen">
      <div className="container py-16">

        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-300"
        >
          ← Home
        </Link>

        <p className="mono mt-20 text-sm text-sky-300">
          BLOG
        </p>

        <h1 className="mt-3 text-5xl font-semibold">
          Writing & notes.
        </h1>

        <p className="mt-5 max-w-2xl text-zinc-400">
          Notes from my journey in AI, Machine Learning and software
          development.
        </p>

        {/* ARTICLE 2 */}
        <article className="card mt-12 p-8 md:p-10">

          <p className="mono text-sm text-sky-300">
            AUGUST 2026
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            What I Learned from Generative AI for Everyone
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            I recently completed Generative AI for Everyone by
            DeepLearning.AI on Coursera. The course gave me an
            opportunity to explore the foundations of Generative AI
            and understand how this technology is becoming part of
            modern applications and workflows.
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            Understanding Generative AI
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            Generative AI focuses on systems that can create new
            content based on the patterns and information they have
            learned. This can include text, images, code and other
            forms of content.
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            What stood out to me
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            One of the most interesting aspects of learning about
            Generative AI is seeing how AI is moving beyond
            traditional prediction and classification tasks.
            Generative systems can assist people with creating,
            exploring ideas and solving problems in new ways.
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            Connecting it to my AI/ML journey
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            As a B.Tech Artificial Intelligence and Machine Learning
            student, this course helped me connect what I am learning
            about AI and Machine Learning with a rapidly developing
            area of technology.
          </p>

          <p className="mt-4 leading-7 text-zinc-400">
            I want to continue strengthening my fundamentals in
            Python, Machine Learning and AI while gradually exploring
            Generative AI through practical projects.
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            What&rsquo;s next?
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            My next step is to move from learning concepts to
            building. I want to experiment with AI tools, develop
            practical projects and understand how these technologies
            can be applied to real-world problems.
          </p>

          <div className="mt-8">
            <a
              href="https://coursera.org/verify/ENBYGWAAH59E"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:border-sky-400 hover:text-sky-300"
            >
              Verify Course ↗
            </a>
          </div>

        </article>

        {/* ARTICLE 1 */}
        <article className="card mt-8 p-8 md:p-10">

          <p className="mono text-sm text-sky-300">
            AUGUST 2026
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Earning My AWS Educate – Machine Learning Foundations Badge
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            I&rsquo;m excited to share that I have earned the AWS
            Educate – Machine Learning Foundations badge from Amazon
            Web Services (AWS).
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            Why I pursued it
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            As a B.Tech Artificial Intelligence and Machine Learning
            student, I&rsquo;m continuously working on strengthening
            my understanding of machine learning and cloud
            technologies.
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            What I learned
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-zinc-400">
            <li>
              Fundamental machine learning concepts
            </li>

            <li>
              Foundational AWS concepts related to machine learning
            </li>

            <li>
              How cloud technologies can support AI/ML workflows
            </li>

            <li>
              The importance of continuously building practical skills
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold">
            What&rsquo;s next?
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            This is one step in my AI/ML learning journey. I&rsquo;m
            looking forward to building more projects, learning
            deeper machine learning concepts, and applying what I
            learn to real-world problems.
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
