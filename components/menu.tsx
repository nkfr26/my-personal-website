import Link from "next/link";

export function Menu({ isError }: { isError: boolean }) {
  const underline = isError
    ? "underline decoration-red-600 decoration-wavy decoration-1 underline-offset-4"
    : "";

  return (
    <nav className="text-xl sm:flex">
      <span className="text-red-600 after:content-['\00A0']">const</span>
      <span className="text-sky-700 after:content-['\00A0']">menu</span>
      <span className="text-red-600 after:content-['\00A0']">=</span>
      <span>[</span>

      <ul className="sm:flex">
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <Link
            href="/about"
            className={`hover:text-muted-foreground ${underline}`}
          >
            about
          </Link>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <Link
            href="/blog"
            className={`hover:text-muted-foreground ${underline}`}
          >
            blog
          </Link>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <Link
            href="/contact"
            className={`hover:text-muted-foreground ${underline}`}
          >
            contact
          </Link>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[','] sm:before:content-none sm:after:content-none">
          <Link
            href="/projects"
            className={`hover:text-muted-foreground ${underline}`}
          >
            projects
          </Link>
        </li>
      </ul>

      <span>];</span>
    </nav>
  );
}
