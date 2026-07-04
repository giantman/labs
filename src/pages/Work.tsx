import { Link } from 'react-router-dom'
import { caseStudies } from '../data'

function ImagePlaceholder() {
  return <div className="w-full h-full bg-[#D0CECC]" />
}

export default function Work() {
  return (
    <main className="pt-[91px]">
      {caseStudies.map((study, i) => (
        <div key={study.id} className="border-t border-b border-[#1a1917]/10 [&+&]:border-t-0">
          {/* Project header */}
          <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 px-8 pt-6 pb-5">
            <p className="text-sm text-[#1a1917]">{`Project 0${i + 1}`}</p>
            <p className="text-sm text-[#1a1917]/40">{study.tags.join(', ')}</p>
            <div className="text-sm text-[#1a1917]/40 leading-snug">
              {Object.entries(study.metadata).map(([, v]) => (
                <span key={v} className="mr-4">{v}</span>
              ))}
            </div>
          </div>

          {/* Project content */}
          <div className="grid grid-cols-[1fr_2.5fr_1fr] gap-4 px-8 pb-12 items-start">
            <div className="text-sm text-[#1a1917] leading-[1.55]">
              <p className="font-medium mb-3">{study.shortDescription}</p>
              {study.description.map((para, j) => (
                <p key={j} className="mb-3 text-[#1a1917]/70">{para}</p>
              ))}
              <Link
                to={`/work/${study.id}`}
                className="inline-block mt-2 text-sm text-[#1a1917] underline underline-offset-2 hover:opacity-50 transition-opacity"
              >
                View case study
              </Link>
            </div>

            <div className="aspect-[4/3]">
              <ImagePlaceholder />
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <div className="aspect-square">
                  <ImagePlaceholder />
                </div>
                <p className="text-xs text-[#1a1917]/40 mt-1.5">Figure 1</p>
              </div>
              <div>
                <div className="aspect-square">
                  <ImagePlaceholder />
                </div>
                <p className="text-xs text-[#1a1917]/40 mt-1.5">Figure 2</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
