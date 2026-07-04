import { Link } from 'react-router-dom'
import logoSrc from '../assets/logo.svg'
import { caseStudies } from '../data'
import type { CaseStudy } from '../data'

function Card({ study }: { study: CaseStudy }) {
  return (
    <Link to={`/work/${study.id}`} className="group block">
      <div className="w-full overflow-hidden group-hover:brightness-95 transition-all duration-300" style={{ aspectRatio: '706 / 495' }}>
        <img src={study.thumbnail ?? '/labs/skeleton.png'} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="pt-[10px]">
        <p className="text-sm text-[#1a1917]">{study.title}</p>
        <p className="text-xs text-[#1a1917]/40 mt-1">{study.tags[0]}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  const leftStudies = caseStudies.filter((_, i) => i % 2 === 0)
  const rightStudies = caseStudies.filter((_, i) => i % 2 !== 0)

  return (
    <main>
      {/* Hero — right column is flush to top (sits behind transparent fixed nav) */}
      <div>
        <div className="grid grid-cols-2" style={{ minHeight: '60vh' }}>
          <div className="flex flex-col justify-end px-8 pb-10 pt-[91px]">
            <div className="grid grid-cols-2 gap-6">
              <p className="text-sm text-[#1a1917] leading-snug">
                Onsite/Offsite is the design practice of Robert Manukyan, designer and design leader based in Los Angeles, CA.
              </p>
              <p className="text-sm text-[#1a1917] leading-snug">
                Multi-disciplinary designer with a focus on AI, product design, design engineering, brand/identity, and visual design.
              </p>
            </div>
          </div>
          <div className="bg-[#C8C6C3]" />
        </div>

        {/* Wordmark — inside hero, white ground */}
        <div className="px-8 pt-14 pb-8">
          <img src={logoSrc} alt="Onsite/Offsite" className="block w-full h-auto" />
        </div>
      </div>

      {/* Project grid — 2 independent columns, 32px padding, 24px gap */}
      <div className="grid grid-cols-2 gap-6 px-8 pt-8 pb-20">
        <div className="flex flex-col gap-6">
          {leftStudies.map((study) => (
            <Card key={study.id} study={study} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {rightStudies.map((study) => (
            <Card key={study.id} study={study} />
          ))}
        </div>
      </div>
    </main>
  )
}
