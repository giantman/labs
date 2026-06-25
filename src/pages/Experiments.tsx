import { experiments } from '../data'

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

export default function Experiments() {
  return (
    <main>
      <div className="border-t border-[#1a1917]/25 mx-4" />

      {experiments.map((exp, i) => (
        <div key={exp.id}>
          <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 px-4 pt-5 pb-6 border-t border-[#1a1917]/25">
            <p className="text-[15px] text-[#1a1917]">{`Experiment 0${i + 1}`}</p>
            <p className="text-[15px] text-[#1a1917]/50">{exp.title}</p>
            <div className="text-[13px] text-[#1a1917] leading-snug">
              {Object.entries(exp.metadata).map(([k, v]) => (
                <p key={k}>{v}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[1fr_2.5fr_1fr] gap-4 px-4 pb-12 items-start">
            <div className="text-[13px] text-[#1a1917] leading-[1.55]">
              <p className="font-bold mb-3">{exp.shortDescription}</p>
            </div>

            <div className="aspect-[16/9]">
              <DarkPlaceholder label={`Experiment 0${i + 1} — Preview`} />
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <div className="aspect-square">
                  <DarkPlaceholder />
                </div>
                <p className="text-[12px] text-[#1a1917]/50 mt-1.5">Detail 1</p>
              </div>
              <div>
                <div className="aspect-square">
                  <DarkPlaceholder />
                </div>
                <p className="text-[12px] text-[#1a1917]/50 mt-1.5">Detail 2</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
