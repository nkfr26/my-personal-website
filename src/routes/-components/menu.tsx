import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

// TS Playground
const ERROR_UNDERLINE_CLASS = cn(
  'underline decoration-[#e51400] decoration-wavy decoration-1 underline-offset-4 dark:decoration-[#f14c4c]',
)

export function Menu({ isError }: { isError: boolean }) {
  const underline = cn(isError && ERROR_UNDERLINE_CLASS)
  return (
    <nav className="text-xl select-none sm:flex">
      {/* GitHub Light Default, GitHub Dark Default */}
      <span className="text-[#cf222e] after:content-['\00A0'] dark:text-[#ff7b72]">
        const
      </span>
      <span className="text-[#0550ae] after:content-['\00A0'] dark:text-[#79c0ff]">
        menu
      </span>
      <span className="text-[#cf222e] after:content-['\00A0'] dark:text-[#ff7b72]">
        =
      </span>
      <span>[</span>

      <ul className="sm:flex">
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <Link
            to="/"
            className={cn(
              'focus:text-muted-foreground sm:hover:text-muted-foreground',
              underline,
            )}
          >
            about
          </Link>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <Link
            to="/"
            className={cn(
              'focus:text-muted-foreground sm:hover:text-muted-foreground',
              underline,
            )}
          >
            blog
          </Link>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[',\00A0'] sm:before:content-none">
          <a
            href="mailto:nokky@nkfr26.com"
            className={cn(
              'focus:text-muted-foreground sm:hover:text-muted-foreground',
              underline,
            )}
          >
            contact
          </a>
        </li>
        <li className="before:content-['\00A0\00A0'] after:content-[','] sm:before:content-none sm:after:content-none">
          <Link
            to="/"
            className={cn(
              'focus:text-muted-foreground sm:hover:text-muted-foreground',
              underline,
            )}
          >
            projects
          </Link>
        </li>
      </ul>

      <span>];</span>
    </nav>
  )
}
