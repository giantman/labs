import { useEffect, useState } from 'react'

const SLIDE_INTERVAL_MS = 1000

export interface ProjectSplitItem {
  id: string
  title: string
  year: string
  role: string
  thumbnail?: string
  slides?: string[]
  video?: string
}

export default function ProjectSplit({
  project,
  onClick,
  viewTransitionName,
  disabled = false,
}: {
  project: ProjectSplitItem
  onClick?: () => void
  viewTransitionName?: string
  disabled?: boolean
}) {
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null)
  const [slide, setSlide] = useState(0)
  const [hovered, setHovered] = useState(false)
  const slides = project.slides ?? []

  // Slideshow only plays while hovered; it rests on the first slide.
  useEffect(() => {
    if (!hovered || slides.length < 2) return
    setSlide(1)
    const timer = setInterval(() => setSlide((i) => (i + 1) % slides.length), SLIDE_INTERVAL_MS)
    return () => {
      clearInterval(timer)
      setSlide(0)
    }
  }, [hovered, slides.length])

  return (
    <div
      role={disabled ? undefined : 'link'}
      tabIndex={disabled ? undefined : 0}
      onClick={disabled ? undefined : onClick}
      onKeyDown={disabled ? undefined : (e) => { if (e.key === 'Enter') onClick?.() }}
      aria-disabled={disabled || undefined}
      className={`group flex flex-col ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div
        className={`overflow-hidden rounded-[8px] transition-opacity duration-300 ease-out ${disabled ? '' : 'group-hover:opacity-80'}`}
        style={viewTransitionName ? { viewTransitionName } : undefined}
        onPointerMove={(e) => {
          if (e.pointerType === 'mouse') setTooltip({ x: e.clientX, y: e.clientY })
        }}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => {
          setHovered(false)
          setTooltip(null)
        }}
      >
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block pointer-events-none"
          />
        ) : slides.length > 0 ? (
          <div className="relative">
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={i === 0 ? project.title : ''}
                draggable={false}
                className={`w-full block pointer-events-none ${i === 0 ? 'h-auto' : 'absolute inset-0 h-full object-cover'} ${i === slide ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        ) : project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            draggable={false}
            className="w-full h-auto block pointer-events-none"
          />
        ) : null}
      </div>

      {tooltip && (
        <span
          className="fixed z-20 pointer-events-none px-[10px] py-[5px] rounded-full bg-[#eeeeee]/70 backdrop-blur-sm text-sm text-black leading-none whitespace-nowrap"
          style={{ left: tooltip.x + 14, top: tooltip.y + 14 }}
        >
          {disabled ? 'Coming soon' : 'View details'}
        </span>
      )}

      <div className="flex flex-col gap-1 mt-4">
        <p className="text-sm font-medium text-[#1a1917] leading-none">{project.title}</p>
        <p className="text-sm font-medium text-[#1a1917]/50 leading-none">{project.role}</p>
        <p className="text-sm font-medium text-[#1a1917]/50 leading-none">{project.year}</p>
      </div>
    </div>
  )
}
