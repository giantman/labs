import { experiments } from '../data'

function ImagePlaceholder() {
  return <div className="w-full h-full bg-[#D0CECC]" />
}

export default function Labs() {
  return (
    <main className="pt-[91px]">
      {experiments.map((exp, i) => (
        <div key={exp.id} className="border-t border-b border-[#1a1917]/10 [&+&]:border-t-0">
          <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 px-8 pt-6 pb-5">
            <p className="text-sm text-[#1a1917]">{`Experiment 0${i + 1}`}</p>
            <p className="text-sm text-[#1a1917]/40">{exp.title}</p>
            <div className="text-sm text-[#1a1917]/40 leading-snug">
              {Object.entries(exp.metadata).map(([, v]) => (
                <span key={v} className="mr-4">{v}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[1fr_2.5fr_1fr] gap-4 px-8 pb-12 items-start">
            <div className="text-sm text-[#1a1917] leading-[1.55]">
              <p className="font-medium mb-3">{exp.shortDescription}</p>
            </div>

            <div className="aspect-[16/9]">
              <ImagePlaceholder />
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <div className="aspect-square"><ImagePlaceholder /></div>
                <p className="text-xs text-[#1a1917]/40 mt-1.5">Detail 1</p>
              </div>
              <div>
                <div className="aspect-square"><ImagePlaceholder /></div>
                <p className="text-xs text-[#1a1917]/40 mt-1.5">Detail 2</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
