import { Link } from 'react-router-dom'
import logoSrc from '../assets/logo.svg'
import { caseStudies } from '../data'

const thumbnail = (id: string) => caseStudies.find((cs) => cs.id === id)?.thumbnail

const projects = [
  { id: 'altruist', title: 'Altruist', year: '2021—now', role: 'Product design, design leadership', description: 'Altruist is making financial advice, better, more affordable and accessible to all. A modern day custodian design for the modern financial advisor.' },
  { id: 'hazel', title: 'Hazel', year: '2024—2025', role: 'Product design, design engineering', description: '....' },
  { id: 'ethos', title: 'ethos', year: '2022—now', role: 'Product design, design engineering', description: 'Altruists unofficial design system (soon to be official). Purpose built for AI native teams.' },
  { id: 'feedback-intelligence', title: 'Feedback Intelligence', year: '2025 (acquired by ActiveCampaign)', role: 'Branding', description: 'Feedback Intelligence, an AI evaluation and analytics tool that turns raw conversations into actionable performance insights.' },
  { id: 'alleron', title: 'Alleron', year: '2025', role: 'Brand strategy, visual design', description: 'A tech firm that offers cloud advisory as a service. Guaranteed 100% uptime.' },
  { id: 'cardshoplive', title: 'CardShopLive', year: '2025', role: 'Brand strategy, product design', description: 'Live' },
  { id: 'oxen', title: 'OXEN', year: '2024', role: 'Branding, Identity', description: 'An AI platform for creators and builders.' },
  { id: 'share-vc', title: 'Share VC', year: '2022', role: 'Design, design engineering', description: 'A venture capital fund exploring new entrepreneurial models and building for scale.' },
  { id: 'zest-ai', title: 'Zest AI', year: '2020—2021', role: 'Design, branding, design engineering', description: 'Build, adopt, and operate AI models for credit risk assessment.' },
  { id: 'stick-ai', title: 'Stick AI', year: '2019—2020', role: 'Product design, design engineering', description: 'AI purpose built for marketing and sales team (pre GPT-3.5)' },
  { id: 'crexi', title: 'CREXi', year: '2019—2020', role: 'Product design, design leadership', description: 'Commercial real estate data platform and marketplace.' },
  { id: 'tradesy', title: 'Tradesy', year: '2012—2018 (acquired by Vestiaire Collective)', role: 'Product design, design engineering, design leadership', description: 'Peer to peer marketplace for designer goods.' },
  { id: 'juice-served-here', title: 'Juice Served Here', year: '2017', role: 'Design, engineering', description: 'E-commerce' },
  { id: 'icelink', title: 'IceLink', year: '2019', role: 'Design, engineering', description: 'E-commerce' },
  { id: 'torani-1', title: 'Torani', year: '2018', role: 'Engineering', description: 'E-commerce' },
  { id: 'torani-2', title: 'Torani', year: '2018', role: 'Engineering', description: 'E-commerce' },
  { id: 'cordwain', title: 'Cordwain', year: '2017', role: 'Design, engineering', description: 'E-commerce' },
  { id: 'platefit', title: 'Platefit', year: '2017', role: 'Engineering', description: 'Marketing website' },
].map((project) => ({ ...project, thumbnail: thumbnail(project.id) }))

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
        <div className="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-x-4 gap-y-2.5 text-base font-medium text-[#1a1917]/30 leading-none whitespace-nowrap">
          <p className="justify-self-start">Select work</p>
          <p className="justify-self-start">P(B)</p>
          <p className="justify-self-start">Y.</p>
          <p className="justify-self-start">R(s)</p>
        </div>

        {projects.map((project) => {
          const hasCaseStudy = caseStudies.some((cs) => cs.id === project.id)
          const rowClassName = `grid grid-cols-[repeat(5,minmax(0,1fr))] gap-x-4 border-b border-[#1a1917]/15 pb-6 items-start transition-opacity ${hasCaseStudy ? 'hover:opacity-70' : ''}`
          const rowContent = (
            <>
              <div className="h-[178px] justify-self-stretch bg-[#d9d9d9] overflow-hidden">
                {project.thumbnail && (
                  <img src={project.thumbnail} alt="" className="w-full h-full object-cover" />
                )}
              </div>
              <p className="justify-self-start text-base font-medium text-[#1a1917] leading-none whitespace-nowrap">
                {project.title}
              </p>
              <p className="justify-self-stretch text-base text-[#1a1917]/50 leading-[1.25]">
                {project.year}
              </p>
              <p className="justify-self-stretch text-base text-[#1a1917]/50 leading-[1.25]">
                {project.role}
              </p>
              <p className="justify-self-stretch text-base text-[#1a1917]/50 leading-[1.25]">
                {project.description}
              </p>
            </>
          )
          return hasCaseStudy ? (
            <Link key={project.id} to={`/work/${project.id}`} className={rowClassName}>
              {rowContent}
            </Link>
          ) : (
            <div key={project.id} className={rowClassName}>
              {rowContent}
            </div>
          )
        })}
      </div>
    </main>
  )
}
