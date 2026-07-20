import { useRef, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import starIcon from '../assets/star.svg'

export default function Nav() {
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const spinningRef = useRef(false)

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
    `text-base leading-none transition-opacity hover:opacity-50 ${isActive ? 'text-[#E85430]' : 'text-[#1a1917]'}`

  return (
    <nav className={`grid grid-cols-4 gap-x-4 gap-y-6 px-4 py-8 items-center fixed top-0 left-0 right-0 z-10 transition-colors duration-200 ${scrolled ? 'bg-[#eeeeee]/90 backdrop-blur-sm' : ''}`}>
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

      <div className="flex items-center gap-6">
        <NavLink to="/work" className={linkClass}>Work</NavLink>
        <NavLink to="/labs" className={linkClass}>Labs</NavLink>
        <NavLink to="/profile" className={linkClass}>Profile</NavLink>
      </div>

      <div className="text-base text-[#1a1917]/50 font-medium leading-none">
        Design and engineering
      </div>

      <a
        href="mailto:manukyanrobert@gmail.com"
        className="justify-self-end text-base text-[#1a1917] hover:opacity-50 transition-opacity leading-none whitespace-nowrap"
      >
        Contact
      </a>
    </nav>
  )
}
