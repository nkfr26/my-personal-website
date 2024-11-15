import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function Drawer() {
  const searchParams = useSearchParams();

  let underline = "";
  if (searchParams.get("cannot-find-name") === "true") {
    underline = "underline decoration-red-500 decoration-wavy decoration-1";
  }

  return (
    <nav className="text-xl sm:flex">
      <span className="text-red-500 after:content-['\00A0']">const</span>
      <span className="text-blue-700 after:content-['\00A0']">menu</span>
      <span className="text-red-500 after:content-['\00A0']">=</span>
      <span>[</span>

      <ul className="sm:flex">
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <Link
            href="/about"
            className={`${underline} hover:text-muted-foreground`}
          >
            about
          </Link>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <Link
            href="/blog"
            className={`${underline} hover:text-muted-foreground`}
          >
            blog
          </Link>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <Link
            href="/contact"
            className={`${underline} hover:text-muted-foreground`}
          >
            contact
          </Link>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[','] sm:before:content-none sm:after:content-none">
          <Link
            href="/projects"
            className={`${underline} hover:text-muted-foreground`}
          >
            projects
          </Link>
        </li>
      </ul>

      <span>];</span>
    </nav>
  );
}
