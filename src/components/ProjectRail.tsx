import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navigateWithViewTransition, projectRowTransitionName } from '../lib/viewTransition'

export interface ProjectRailItem {
  id: string
  title: string
  year: string
  role: string
  thumbnail?: string
  video?: string
}

/** Pointer travel (px) past which a drag is no longer treated as a click. */
const DRAG_THRESHOLD = 6

/** Duration (ms) of the keyboard-driven glide between cards. */
const GLIDE_MS = 450

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export default function ProjectRail({ items }: { items: ProjectRailItem[] }) {
  const navigate = useNavigate()
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [progress, setProgress] = useState(0)

  // Mutable drag state — kept off React state so the move handler stays cheap.
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 })
  const glideFrame = useRef<number | null>(null)

  const cancelGlide = useCallback(() => {
    if (glideFrame.current !== null) {
      cancelAnimationFrame(glideFrame.current)
      glideFrame.current = null
    }
  }, [])

  /**
   * Hand-driven so the glide keeps a consistent curve regardless of the UA's
   * smooth-scroll implementation. Each step lands exactly on a card's snap
   * position, which keeps the browser from re-snapping afterwards.
   */
  const glideTo = useCallback(
    (target: number) => {
      const el = trackRef.current
      if (!el) return
      cancelGlide()
      const from = el.scrollLeft
      const distance = target - from
      if (Math.abs(distance) < 1) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.scrollLeft = target
        return
      }
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min((now - start) / GLIDE_MS, 1)
        el.scrollLeft = from + distance * easeOutCubic(t)
        glideFrame.current = t < 1 ? requestAnimationFrame(step) : null
      }
      glideFrame.current = requestAnimationFrame(step)
    },
    [cancelGlide],
  )

  useEffect(() => cancelGlide, [cancelGlide])

  const updateProgress = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateProgress()
    el.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      el.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [updateProgress])

  function onPointerDown(e: React.PointerEvent) {
    const el = trackRef.current
    if (!el) return
    cancelGlide()
    // Let touch devices keep their native momentum scrolling, but clear any
    // travel left over from an earlier mouse drag so taps still register.
    if (e.pointerType === 'touch') {
      drag.current.moved = 0
      return
    }
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0 }
    setIsDragging(true)
    el.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current.active) return
    const el = trackRef.current
    if (!el) return
    const dx = e.clientX - drag.current.startX
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx))
    el.scrollLeft = drag.current.startScroll - dx
  }

  function endDrag(e: React.PointerEvent) {
    if (!drag.current.active) return
    drag.current.active = false
    setIsDragging(false)
    trackRef.current?.releasePointerCapture(e.pointerId)
  }

  /** scrollLeft that would align `card` with the start of the scrollport. */
  function snapPositionOf(el: HTMLElement, card: HTMLElement) {
    const gutter = parseFloat(getComputedStyle(el).paddingLeft) || 0
    const delta = card.getBoundingClientRect().left - el.getBoundingClientRect().left - gutter
    return el.scrollLeft + delta
  }

  function scrollByItem(direction: 1 | -1) {
    const el = trackRef.current
    if (!el) return
    const cards = Array.from(el.children) as HTMLElement[]
    const max = el.scrollWidth - el.clientWidth
    const positions = cards.map((card) => Math.min(Math.max(snapPositionOf(el, card), 0), max))
    const current = el.scrollLeft
    const next =
      direction === 1
        ? positions.find((p) => p > current + 1)
        : [...positions].reverse().find((p) => p < current - 1)
    glideTo(next ?? (direction === 1 ? max : 0))
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollByItem(1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollByItem(-1)
    }
  }

  function openProject(id: string) {
    if (drag.current.moved > DRAG_THRESHOLD) return
    navigateWithViewTransition(() => navigate(`/work/${id}`))
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={trackRef}
        role="group"
        aria-label="Select work"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
        className={`flex gap-4 overflow-x-auto overscroll-x-contain -mx-4 px-4 scroll-px-4 pb-1 outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? 'cursor-grabbing select-none' : 'cursor-grab snap-x snap-proximity'
        }`}
        style={{ scrollBehavior: isDragging ? 'auto' : undefined }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            role="link"
            tabIndex={0}
            onClick={() => openProject(item.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.stopPropagation()
                openProject(item.id)
              }
            }}
            className="group shrink-0 snap-start w-[160vw] sm:w-[105vw] md:w-[77vw] lg:w-[31vw] flex flex-col gap-3"
          >
            <div
              className="relative w-full bg-[#d9d9d9] transition-opacity duration-300 ease-out group-hover:opacity-80"
              style={{ viewTransitionName: projectRowTransitionName(item.id) }}
            >
              {item.video ? (
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block pointer-events-none"
                />
              ) : item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-auto block pointer-events-none"
                />
              ) : (
                <div className="w-full aspect-[16/9]" />
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium text-[#1a1917] leading-none">{item.title}</p>
              <p className="text-sm text-[#1a1917]/50 leading-[1.35]">
                {item.role}
                {item.role && item.year ? ' — ' : ''}
                {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scrub indicator */}
      <div className="relative h-px w-full bg-[#1a1917]/15">
        <div
          className="absolute inset-y-0 left-0 bg-[#1a1917]/50 transition-[width,transform] duration-150 ease-out"
          style={{ width: '20%', transform: `translateX(${progress * 400}%)` }}
        />
      </div>
    </div>
  )
}
