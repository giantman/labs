import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoSrc from '../assets/logo.svg'
import { caseStudies, hasCaseStudy } from '../data'
import ProjectSplit from '../components/ProjectSplit'
import ProjectColumns from '../components/ProjectColumns'
import { navigateWithViewTransition, projectRowTransitionName } from '../lib/viewTransition'
import { PROJECT_LINKS_ENABLED } from '../lib/projects'

const projects = caseStudies.map((cs) => ({
  id: cs.id,
  title: cs.title,
  year: cs.metadata['Year'] ?? '',
  role: cs.metadata['Role'] ?? '',
  thumbnail: cs.thumbnail,
  slides: cs.thumbnailSlides,
  hasCaseStudy: hasCaseStudy(cs),
}))

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.hash === '#work') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <main>
      {/* Hero */}
      <div className="pt-[52px] px-4 py-6">
        {/* Text block — right half only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[25px] py-6">
          <div className="hidden md:block" />
          <div className="flex flex-col gap-6">
            <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">
             <span className="text-[#eeeeee]">Forever designing&copy;</span>Onsite/Offsite is the design practice of Robert Manukyan. A multi-disciplinary designer with a focus on product design, AI, design engineering, brand/identity, and visual design. Based in Los Angeles, CA. Currently leading design at Altruist.
            </p>
            <div>
              <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">Forever designing &copy;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="work" className="p-4 scroll-mt-[52px]">
        <div className="flex items-baseline justify-between gap-4 border-b border-[#1a1917]/15 pb-6 mb-4">
          <p className="text-base font-medium text-[#1a1917]/50 leading-none whitespace-nowrap">
            Select work. 2012—now
          </p>
        </div>

        <ProjectColumns>
          {projects.map((project) => (
            <ProjectSplit
              key={project.id}
              project={project}
              onClick={
                PROJECT_LINKS_ENABLED && project.hasCaseStudy
                  ? () => navigateWithViewTransition(() => navigate(`/work/${project.id}`))
                  : undefined
              }
              viewTransitionName={projectRowTransitionName(project.id)}
              disabled={!PROJECT_LINKS_ENABLED || !project.hasCaseStudy}
            />
          ))}
        </ProjectColumns>
      </div>

      {/* Wordmark — bottom of page, below project thumbnails */}
      <div className="px-4 pb-6">
        <img
          src={logoSrc}
          alt="Onsite/Offsite"
          className="block h-auto"
          style={{ width: '91.5%', filter: 'brightness(0) invert(1)' }}
        />
      </div>
    </main>
  )
}
