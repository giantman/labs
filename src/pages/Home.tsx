import logoSrc from '../assets/logo.svg'
import { caseStudies } from '../data'

const projects = caseStudies.map((cs) => ({
  id: cs.id,
  title: cs.title,
  year: cs.metadata['Year'] ?? '',
  role: cs.metadata['Role'] ?? '',
  description: cs.shortDescription,
  thumbnail: cs.thumbnail,
  video: cs.id === 'share-vc' ? '/projects/share-vc/share-vc-cover.mp4' : undefined,
}))

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="flex flex-col pt-[84px]" style={{ minHeight: '100vh' }}>
        {/* Content area — text top-right, wordmark bottom-left, space-between */}
        <div className="flex-1 flex flex-col justify-between px-4 py-6">

          {/* Text block — right half only */}
          <div className="grid grid-cols-2 gap-x-[25px] py-6">
            <div />
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
      <div className="grid grid-cols-1 gap-4 p-4">
        <div className="grid grid-cols-[4fr_2fr_2fr_2fr] gap-x-4 border-b border-[#1a1917]/15 pb-6">
          <p className="text-base font-medium text-[#1a1917] leading-none whitespace-nowrap">Select work. 2012—now</p>
          <p className="text-base text-[#1a1917]/50 leading-[1.35]">P(B).</p>
          <p className="text-base text-[#1a1917]/50 leading-[1.35]">Role, Year</p>
          <p className="text-base text-[#1a1917]/50 leading-[1.35]">—</p>
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-[4fr_2fr_2fr_2fr] gap-x-4 border-b border-[#1a1917]/15 pb-6 items-start"
          >
            <div className="justify-self-stretch h-[374px] bg-[#d9d9d9] overflow-hidden">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : project.thumbnail ? (
                <img src={project.thumbnail} alt="" className="w-full h-full object-cover" />
              ) : null}
            </div>
            <p className="justify-self-start text-base font-medium text-[#1a1917] leading-none whitespace-nowrap">
              {project.title}
            </p>
            <div className="justify-self-stretch text-base text-[#1a1917]/50 leading-[1.35]">
              <p>{project.role}</p>
              <p>&nbsp;</p>
              <p>{project.year}</p>
            </div>
            <p className="justify-self-stretch text-base text-[#1a1917]/50 leading-[1.35]">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
