import { useTheme } from '@/context/theme-provider'
import { Link } from 'react-router-dom'
import { CitySearch } from './city-search'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="mx-auto flex flex-wrap items-center justify-between px-4  h-auto gap-2 max-w-screen-xl">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={isDark ? '/logo1.png' : '/logo2.png'}
            alt="Climetrik logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 min-w-0">
          <div className="max-w-[150px] sm:max-w-none overflow-hidden truncate">
            <CitySearch />
          </div>
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
