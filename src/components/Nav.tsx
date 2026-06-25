import { Link, NavLink } from 'react-router-dom'
import starIcon from '../assets/star.svg'

export default function Nav() {
  return (
    <nav className="grid grid-cols-[auto_1fr_1fr_auto] gap-8 px-4 pt-4 pb-6 items-start fixed top-0 left-0 right-0 z-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-[#1a1917] hover:opacity-50 transition-opacity leading-snug"
      >
        <img src={starIcon} alt="" width={12} height={12} className="shrink-0" />
      </Link>

      <div className="flex gap-4">
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `text-sm leading-snug transition-opacity hover:opacity-50 ${isActive ? 'text-[#c8c5c2]' : 'text-[#1a1917]'}`
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/experiments"
          className={({ isActive }) =>
            `text-sm leading-snug transition-opacity hover:opacity-50 ${isActive ? 'text-[#c8c5c2]' : 'text-[#1a1917]'}`
          }
        >
          Experiments
        </NavLink>
      </div>

      <div className="text-sm text-[#1a1917]/50 leading-snug">
        Design &amp; Engineering<br />
      </div>

      <a
        href="mailto:manukyan.robert@gmail.com"
        className="text-sm text-[#1a1917] hover:opacity-50 transition-opacity text-right whitespace-nowrap"
      >
        Contact
      </a>
    </nav>
  )
}
