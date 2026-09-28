import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import starIcon from '../assets/star.svg'

const NAV_ITEMS: { to: string; label: string; scrollTargetId?: string }[] = [
  { to: '/work', label: 'Work', scrollTargetId: 'work' },
  { to: '/profile', label: 'Profile' },
]

export default function Nav() {
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const spinningRef = useRef(false)
  const location = useLocation()
  const navigate = useNavigate()
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null)

  const activeTo = NAV_ITEMS.find((item) =>
    item.scrollTargetId
      ? location.pathname === '/' && location.hash === `#${item.scrollTargetId}`
      : location.pathname.startsWith(item.to)
  )?.to ?? null

  useLayoutEffect(() => {
    const measure = () => {
      const el = activeTo ? linkRefs.current[activeTo] : null
      setPillStyle(el ? { left: el.offsetLeft, width: el.offsetWidth } : null)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [activeTo])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleStarMouseEnter = () => {
    if (spinningRef.current) return
    spinningRef.current = true
    setIsSpinning(true)
  }

  const handleStarAnimationEnd = () => {
    setRotation((r) => r + 360)
    setIsSpinning(false)
    spinningRef.current = false
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative z-10 inline-flex items-center justify-center px-[10px] py-[5px] rounded-full text-sm leading-none transition-colors duration-200 hover:opacity-50 ${isActive ? 'text-black' : 'text-[#1a1917]/50'}`

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
      navigate('/#work', { replace: true })
    } else {
      navigate('/#work')
    }
  }

  return (
    <nav className={`grid grid-cols-[auto_1fr_auto] md:grid-cols-4 gap-x-2 sm:gap-x-4 gap-y-6 p-4 items-center fixed top-0 left-0 right-0 z-10 transition-colors duration-200 ${scrolled ? 'bg-[#eeeeee]/90 backdrop-blur-sm' : ''}`}>
      <Link
        to="/"
        className="inline-flex items-center px-2 text-[#1a1917] hover:opacity-50 transition-opacity leading-none"
      >
        <span className="inline-block shrink-0" style={{ transform: `rotate(${rotation}deg)` }}>
          <img
            src={starIcon}
            alt=""
            width={20}
            height={20}
            onMouseEnter={handleStarMouseEnter}
            onAnimationEnd={handleStarAnimationEnd}
            className={`block ${isSpinning ? 'star-spin' : ''}`}
          />
        </span>
      </Link>

      <div className="relative flex items-center gap-1">
        {pillStyle && (
          <span
            className="absolute inset-y-0 rounded-full border border-[rgba(0,0,0,0.15)] transition-all duration-300 ease-out"
            style={{ left: pillStyle.left, width: pillStyle.width }}
          />
        )}
        {NAV_ITEMS.map((item) =>
          item.scrollTargetId ? (
            <a
              key={item.to}
              href={`/#${item.scrollTargetId}`}
              onClick={handleWorkClick}
              ref={(el) => {
                linkRefs.current[item.to] = el
              }}
              className={linkClass({
                isActive: location.pathname === '/' && location.hash === `#${item.scrollTargetId}`,
              })}
            >
              {item.label}
            </a>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              ref={(el) => {
                linkRefs.current[item.to] = el
              }}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          )
        )}
      </div>

      <div className="hidden md:block text-sm text-[#1a1917]/50 font-medium leading-[1.5]">
        Design and engineering
      </div>

      <a
        href="mailto:manukyanrobert@gmail.com"
        className="justify-self-end inline-flex items-center justify-center px-[10px] py-[5px] rounded-full text-sm text-[#1a1917]/50 hover:opacity-50 transition-opacity leading-none whitespace-nowrap"
      >
        Contact
      </a>
    </nav>
  )
}
