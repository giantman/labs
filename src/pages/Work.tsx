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
        <span className="absolute bottom-3 left-3 text-[9px] font-mono text-[#c8c5c2]/40 leading-tight uppercase tracking-wide">
          {label}
        </span>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <main>
      <div className="border-t border-[#1a1917]/25 mx-4" />

      {caseStudies.map((study, i) => (
        <div key={study.id}>
          {/* Project header row */}
          <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 px-4 pt-5 pb-6 border-t border-[#1a1917]/25">
            <p className="text-[15px] text-[#1a1917]">{`Project 0${i + 1}`}</p>
            <p className="text-[15px] text-[#1a1917]/50">{study.tags.join(', ')}</p>
            <div className="text-[13px] text-[#1a1917] leading-snug">
              {Object.entries(study.metadata).map(([k, v]) => (
                <p key={k}>{v}</p>
              ))}
            </div>
          </div>

          {/* Project content: text | large image | two figures */}
          <div className="grid grid-cols-[1fr_2.5fr_1fr] gap-4 px-4 pb-12 items-start">
            {/* Left: description */}
            <div className="text-[13px] text-[#1a1917] leading-[1.55]">
              <p className="font-bold mb-3">{study.shortDescription}</p>
              {study.description.map((para, j) => (
                <p key={j} className="mb-3">{para}</p>
              ))}
            </div>

            {/* Center: large image */}
            <div className="aspect-[4/3]">
              <DarkPlaceholder label={`0${i + 1} — Placeholder Image`} />
            </div>

            {/* Right: two stacked figures */}
            <div className="flex flex-col gap-3">
              <div>
                <div className="aspect-square">
                  <DarkPlaceholder />
                </div>
                <p className="text-[12px] text-[#1a1917]/50 mt-1.5">Figure 1</p>
              </div>
              <div>
                <div className="aspect-square">
                  <DarkPlaceholder />
                </div>
                <p className="text-[12px] text-[#1a1917]/50 mt-1.5">Figure 2</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
