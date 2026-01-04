import { MoonIcon, SunIcon } from '@primer/octicons-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <SunIcon className="dark:hidden" />
      <MoonIcon className="hidden dark:inline-block" />
    </Button>
  )
}
