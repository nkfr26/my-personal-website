import { Link } from '@tanstack/react-router'
import {
  HomeIcon,
  MarkGithubIcon,
  ThreeBarsIcon,
  XIcon,
} from '@primer/octicons-react'
import { parseAsBoolean, useQueryState } from 'nuqs'
import { useState } from 'react'
import { Menu } from '@/routes/-components/menu'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ThemeButton } from '@/routes/-components/theme-button'

export function Header() {
  const [isError] = useQueryState('error', parseAsBoolean.withDefault(false))

  const [isOpen, setIsOpen] = useState(isError)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="sticky top-0 z-[calc(infinity)] flex h-12 shrink-0 items-center border-b border-foreground bg-background">
      <div className="container mx-auto flex justify-end pr-2">
        <Button
          size="icon"
          variant="ghost"
          nativeButton={false}
          render={
            <Link
              to="/"
              onClick={isOpen ? toggleMenu : undefined}
              aria-label="Home"
            >
              <HomeIcon />
            </Link>
          }
        />
        <Button
          size="icon"
          variant="ghost"
          nativeButton={false}
          render={
            <a
              href="https://github.com/nkfr26/my-personal-website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <MarkGithubIcon />
            </a>
          }
        />
        <ThemeButton aria-label="Toggle Theme" />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <XIcon /> : <ThreeBarsIcon />}
        </Button>
      </div>

      <div
        className={cn(
          'absolute top-12 grid h-[calc(100svh-48px)] w-full place-content-center bg-background pb-12 transition duration-300',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <Menu isError={isError} />
      </div>
    </header>
  )
}
