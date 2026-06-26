import { ArrowRight, InfinitySymbol } from '@carbon/icons-react'
import { caseStudies } from '../data'

function DarkPlaceholder({ label }: { label?: string }) {
  return (
    <div
      className="relative w-full h-full min-h-[180px]"
      style={{
        backgroundColor: '#252320',
        backgroundImage: `
          linear-gradient(rgba(200,198,195,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,198,195,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
      }}
    >
      {label && (
        <span className="absolute bottom-3 left-3 text-[0.64rem] font-mono text-[#c8c5c2]/40 leading-tight uppercase tracking-wide">
          {label}
        </span>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen px-4 pt-4 overflow-hidden pt-40 pb-20">
      <h1 className="text-[#1a1917] tracking-tight">
        Experienced product designer and design leader with 15+ years designing 0<ArrowRight size={36} style={{ width: '1em', height: '1em' }} className="inline align-middle mx-1" />1 products.
        Human-centered design and design engineering.
        <br />
        <br />
        Areas of focus<ArrowRight size={36} style={{ width: '1em', height: '1em' }} className="inline align-middle mx-1" />product design, design engineering, design systems, brand/identity, and visual design.
        <br />
        <br />
        Select work of Robert Manukyan<ArrowRight size={36} style={{ width: '1em', height: '1em' }} className="inline align-middle mx-1" />
        forever designing<InfinitySymbol size={36} style={{ width: '1em', height: '1em' }} className="inline align-middle ml-1" />
      </h1>

      <div className="mt-20 -mx-4">
        <div className="border-t border-[#1a1917]/25 mx-4" />

        {caseStudies.map((study, i) => (
          <div key={study.id}>
            <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 px-4 pt-5 pb-6 border-t border-[#1a1917]/25">
              <p className="text-[1.1rem] text-[#1a1917]">{`Project 0${i + 1}`}</p>
              <p className="text-[1.1rem] text-[#1a1917]/50">{study.tags.join(', ')}</p>
              <div className="text-base text-[#1a1917] leading-snug">
                {Object.entries(study.metadata).map(([k, v]) => (
                  <p key={k}>{v}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-[1fr_2.5fr] gap-4 px-4 pb-12 items-start">
              <div className="text-base text-[#1a1917] leading-[1.55]">
                <p className="font-bold mb-3">{study.shortDescription}</p>
                {study.description.map((para, j) => (
                  <p key={j} className="mb-3">{para}</p>
                ))}
              </div>

              <div className="aspect-[4/3]">
                <DarkPlaceholder label={`0${i + 1} — Placeholder Image`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
