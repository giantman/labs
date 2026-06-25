import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="grid grid-cols-[auto_1fr_1fr_auto] gap-8 px-4 pt-4 pb-6 items-start">
      <Link to="/" className="text-[13px] text-[#1a1917] hover:opacity-50 transition-opacity leading-snug">
        gmco
      </Link>

      <div className="flex flex-col">
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `text-[13px] leading-snug transition-opacity hover:opacity-50 ${isActive ? 'text-[#c8c5c2]' : 'text-[#1a1917]'}`
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/experiments"
          className={({ isActive }) =>
            `text-[13px] leading-snug transition-opacity hover:opacity-50 ${isActive ? 'text-[#c8c5c2]' : 'text-[#1a1917]'}`
          }
        >
          Experiments
        </NavLink>
      </div>

      <div className="text-[13px] text-[#1a1917]/50 leading-snug">
        Design &amp; Engineering<br />
        Visual Experiments
      </div>

      <a
        href="mailto:hello@gmco.studio"
        className="text-[13px] text-[#1a1917] hover:opacity-50 transition-opacity text-right whitespace-nowrap"
      >
        Email, Instagram↗
      </a>
    </nav>
  )
}
