import { MoonIcon, SunIcon } from '@primer/octicons-react'
import { useTheme } from 'next-themes'
import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'

export function ThemeButton({ ...props }: ComponentProps<typeof Button>) {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} {...props}>
      <SunIcon className="dark:hidden" />
      <MoonIcon className="hidden dark:inline-block" />
    </Button>
  )
}
