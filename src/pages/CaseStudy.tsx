import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data'

function DarkPlaceholder({ label }: { label?: string }) {
  return (
    <div
      className="relative w-full h-full"
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

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const study = caseStudies.find((s) => s.id === id)

  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div>
          <p className="text-[13px] text-[#1a1917]/50 mb-4">Not found.</p>
          <Link to="/work" className="text-[13px] text-[#1a1917] underline underline-offset-2">
            ← Work
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="border-t border-[#1a1917]/25 mx-4" />

      {/* Header */}
      <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 px-4 pt-5 pb-6 border-t border-[#1a1917]/25">
        <p className="text-[15px] text-[#1a1917]">{study.title}</p>
        <p className="text-[15px] text-[#1a1917]/50">{study.tags.join(', ')}</p>
        <div className="text-[13px] text-[#1a1917] leading-snug">
          {Object.entries(study.metadata).map(([k, v]) => (
            <p key={k}>{v}</p>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[1fr_2.5fr_1fr] gap-4 px-4 pb-12 items-start">
        <div className="text-[13px] text-[#1a1917] leading-[1.55]">
          <p className="font-bold mb-3">{study.shortDescription}</p>
          {study.description.map((para, i) => (
            <p key={i} className="mb-3">{para}</p>
          ))}
        </div>

        <div className="aspect-[4/3]">
          <DarkPlaceholder label="01 — Placeholder Image" />
        </div>

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

      <div className="border-t border-[#1a1917]/25 mx-4 py-4">
        <Link to="/work" className="text-[13px] text-[#1a1917] hover:opacity-50 transition-opacity">
          ← Work
        </Link>
      </div>
    </main>
  )
}
