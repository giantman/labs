import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import { caseStudies, hasCaseStudy } from '../data'
import { navigateWithViewTransition, projectRowTransitionName, supportsViewTransitions } from '../lib/viewTransition'
import { EXIT_TRANSITION_MS, PROJECT_LINKS_ENABLED } from '../lib/projects'
import ProjectRow from '../components/ProjectRow'

const ROMAN_NUMERALS: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
]

function toRoman(num: number) {
  let result = ''
  let remaining = num
  for (const [value, symbol] of ROMAN_NUMERALS) {
    while (remaining >= value) {
      result += symbol
      remaining -= value
    }
  }
  return result
}

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const index = caseStudies.findIndex((s) => s.id === id)
  const study = index === -1 ? undefined : caseStudies[index]
  const [entered, setEntered] = useState(supportsViewTransitions())
  const [exitingId, setExitingId] = useState<string | null>(null)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (supportsViewTransitions()) {
      setEntered(true)
      return
    }
    setEntered(false)
    const frame = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(frame)
  }, [id])

  const handleProjectClick = (projectId: string) => {
    if (exitingId) return
    if (supportsViewTransitions()) {
      navigateWithViewTransition(() => navigate(`/work/${projectId}`))
      return
    }
    setExitingId(projectId)
    setTimeout(() => navigate(`/work/${projectId}`), EXIT_TRANSITION_MS)
  }

  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div>
          <p className="text-base text-[#1a1917]/50 mb-4">Not found.</p>
          <Link to="/" className="text-base text-[#1a1917] underline underline-offset-2">
            ← Home
          </Link>
        </div>
      </main>
    )
  }

  const images = study.images ?? (study.thumbnail ? [study.thumbnail] : [])
  const paragraph = [study.shortDescription, ...study.description].join(' ')
  const role = study.metadata['Role']

  return (
    <main className="pt-[52px]">
      <div
        className={`grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,0.5fr)] gap-x-[25px] gap-y-6 px-4 py-6 items-start transition-all duration-300 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        style={{ viewTransitionName: projectRowTransitionName(study.id) }}
      >
        {/* Left panel — scrolling image feed */}
        <div className="flex flex-col gap-[2px]">
          {images.map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-auto block" />
          ))}
          <div className="w-full aspect-[4/3] bg-[#D0CECC]" />
          <div className="w-full aspect-[4/3] bg-[#D0CECC]" />
        </div>

        {/* Right panel — fixed while images scroll */}
        <div className="md:sticky md:top-[76px] flex flex-col gap-6 text-base font-medium text-[#1a1917]/50 leading-[1.5]">
          <p className="flex gap-3">
            <span className="shrink-0">{toRoman(index + 1)}.</span>
            <span>{study.title}</span>
          </p>
          <p className="indent-[40px] md:indent-[88px]">{paragraph}</p>
          {role && (
            <p>
              SOW.<br />
              — {role}
            </p>
          )}
        </div>
      </div>

      {/* Other projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 p-4">
        {caseStudies.map((s) => {
          if (s.id === study.id) return null
          return (
            <ProjectRow
              key={s.id}
              project={{
                id: s.id,
                title: s.title,
                year: s.metadata['Year'] ?? '',
                role: s.metadata['Role'] ?? '',
                description: s.shortDescription,
                thumbnail: s.thumbnail,
                video: s.id === 'share-vc' ? '/projects/share-vc/share-vc-cover.mp4' : undefined,
              }}
              onClick={PROJECT_LINKS_ENABLED && hasCaseStudy(s) ? () => handleProjectClick(s.id) : undefined}
              isExiting={exitingId === s.id}
              viewTransitionName={projectRowTransitionName(s.id)}
              comingSoon={!hasCaseStudy(s)}
            />
          )
        })}
      </div>
    </main>
  )
}
