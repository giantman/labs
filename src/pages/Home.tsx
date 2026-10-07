import { Fragment, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoSrc from '../assets/logo.svg'
import { caseStudies } from '../data'
import ProjectSplit from '../components/ProjectSplit'
import { navigateWithViewTransition, projectRowTransitionName } from '../lib/viewTransition'

const projects = caseStudies.map((cs) => ({
  id: cs.id,
  title: cs.title,
  year: cs.metadata['Year'] ?? '',
  role: cs.metadata['Role'] ?? '',
  thumbnail: cs.thumbnail,
  video: cs.id === 'share-vc' ? '/projects/share-vc/share-vc-cover.mp4' : undefined,
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
      <div className="flex flex-col pt-[52px]" style={{ minHeight: '100vh' }}>
        {/* Content area — text top-right, wordmark bottom-left, space-between */}
        <div className="flex-1 flex flex-col justify-between px-4 py-6">

          {/* Text block — right half only */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[25px] py-6">
            <div className="hidden md:block" />
            <div className="flex flex-col gap-6">
              <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">
               <span className="text-[#eeeeee]">Forever designing &copy;</span>Onsite/Offsite is the design practice of Robert Manukyan. A multi-disciplinary designer with a focus on product design, AI, design engineering, brand/identity, and visual design. Based in Los Angeles, CA. Currently leading design at Altruist.
              </p>
              <div>
                <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">Forever designing &copy;</p>
              </div>
              <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">Work coming soon...</p>
            </div>
          </div>

          {/* Wordmark — white, bottom-left */}
          <div>
            <img
              src={logoSrc}
              alt="Onsite/Offsite"
              className="block h-auto"
              style={{ width: '91.5%', filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

      </div>

      {/* Projects */}
      <div id="work" className="p-4 scroll-mt-[52px]">
        <div className="flex items-baseline justify-between gap-4 border-b border-[#1a1917]/15 pb-6 mb-4">
          <p className="text-base font-medium text-[#1a1917] leading-none whitespace-nowrap">
            Select work. 2012—now
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <Fragment key={project.id}>
              {index > 0 && <div className="h-px bg-[#1a1917]/15" />}
              <ProjectSplit
                project={project}
                onClick={() => navigateWithViewTransition(() => navigate(`/work/${project.id}`))}
                viewTransitionName={projectRowTransitionName(project.id)}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  )
}
