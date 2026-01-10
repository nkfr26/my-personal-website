import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

const LINK_CLASS_NAME = cn(
  'border-current text-lg text-blue-700 focus:text-blue-400 sm:hover:text-blue-400 dark:text-blue-300 dark:focus:text-blue-500 dark:sm:hover:text-blue-500',
)

export function BusinessCard() {
  return (
    <div className="inline-grid grid-cols-[auto_auto_auto_auto] select-none">
      <Link to="/" className={cn('border-b', LINK_CLASS_NAME)}>
        me
      </Link>
      <span />
      <span
        tabIndex={0}
        className={cn('group col-span-2 border-b', LINK_CLASS_NAME)}
      >
        <span className="group-focus:hidden sm:group-hover:hidden">
          website
        </span>
        <span className="hidden group-focus:inline sm:group-hover:inline">
          here
        </span>
      </span>

      <span className="text-2xl">nokky</span>
      <span className="text-2xl">@</span>
      <span className="text-2xl">nkfr26</span>
      <span className="text-2xl">.com</span>

      <span />
      <a
        href="https://x.com/nkfr26"
        className={cn('col-span-2 border-t', LINK_CLASS_NAME)}
        target="_blank"
        rel="noopener noreferrer"
      >
        x
      </a>
      <span />

      <a
        href="mailto:nokky@nkfr26.com"
        className={cn('col-span-4 border-t', LINK_CLASS_NAME)}
      >
        email
      </a>
    </div>
  )
}
