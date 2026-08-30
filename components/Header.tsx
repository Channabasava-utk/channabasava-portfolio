import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">

        <Link href="/" className="font-bold">
          CHANNABASAVA<span className="text-sky-300">.</span>
        </Link>

        <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
          <a href="/#about">About</a>
          <a href="/#expertise">Expertise</a>
          <a href="/#projects">Projects</a>
          <a href="/#achievements">Achievements</a>
          <Link href="/blog">Blog</Link>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://github.com/Channabasava-utk"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={19} />
          </a>

          <a
           href="https://www.linkedin.com/in/mr-channabasava-b60bb6327/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={19} />
          </a>
        </div>

      </div>
    </header>
  );
}
