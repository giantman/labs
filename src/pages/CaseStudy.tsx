import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import { caseStudies, hasCaseStudy } from '../data'
import { navigateWithViewTransition, projectRowTransitionName, supportsViewTransitions } from '../lib/viewTransition'
import { PROJECT_LINKS_ENABLED } from '../lib/projects'
import ProjectSplit from '../components/ProjectSplit'
import ProjectColumns from '../components/ProjectColumns'

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const index = caseStudies.findIndex((s) => s.id === id)
  const study = index === -1 ? undefined : caseStudies[index]
  const [entered, setEntered] = useState(supportsViewTransitions())

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

  const gallery = study.images ?? []
  const images = study.thumbnail
    ? [study.thumbnail, ...gallery.filter((src) => src !== study.thumbnail)]
    : gallery
  const paragraph = [study.shortDescription, ...study.description].join(' ')
  const roleItems = (study.metadata['Role'] ?? '').split(',').map((r) => r.trim()).filter(Boolean).map((r) => r[0].toUpperCase() + r.slice(1))

  return (
    <main className="pt-[52px]">
      <div
        className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-[25px] gap-y-6 px-4 py-6 items-start transition-all duration-300 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        style={{ viewTransitionName: projectRowTransitionName(study.id) }}
      >
        {/* Left panel — fixed while images scroll */}
        <div className="md:sticky md:top-[76px] flex flex-col gap-6 text-base font-medium text-[#1a1917]/50 leading-[1.5]">
          <p>{study.title}</p>
          <p className="indent-[40px] md:indent-[88px]">{paragraph}</p>
          {study.impact && study.impact.length > 0 && (
            <div>
              <p>Impact.</p>
              {study.impact.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          )}
          {roleItems.length > 0 && (
            <div>
              <p>Scope of work.</p>
              <ul className="list-disc pl-[18px]">
                {roleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {study.metadata['Year'] && (
            <div>
              <p>Year.</p>
              <p>{study.metadata['Year']}</p>
            </div>
          )}
        </div>

        {/* Right panel — scrolling image feed */}
        <div className="flex flex-col gap-[2px]">
          {images.map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-auto block rounded-[8px]" />
          ))}
          <div className="w-full aspect-[4/3] bg-[#D0CECC] rounded-[8px]" />
          <div className="w-full aspect-[4/3] bg-[#D0CECC] rounded-[8px]" />
        </div>
      </div>

      {/* Other projects */}
      <div className="p-4">
        <ProjectColumns>
          {caseStudies.filter((s) => s.id !== study.id).map((s) => {
            const linked = PROJECT_LINKS_ENABLED && hasCaseStudy(s)
            return (
              <ProjectSplit
                key={s.id}
                project={{
                  id: s.id,
                  title: s.title,
                  year: s.metadata['Year'] ?? '',
                  role: s.metadata['Role'] ?? '',
                  thumbnail: s.thumbnail,
                  slides: s.thumbnailSlides,
                }}
                onClick={linked ? () => navigateWithViewTransition(() => navigate(`/work/${s.id}`)) : undefined}
                viewTransitionName={projectRowTransitionName(s.id)}
                disabled={!linked}
              />
            )
          })}
        </ProjectColumns>
      </div>
    </main>
  )
}
