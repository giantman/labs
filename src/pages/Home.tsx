import { ArrowRight, InfinitySymbol } from '@carbon/icons-react'

export default function Home() {
  return (
    <main className="min-h-screen px-4 pt-4 overflow-hidden pt-40 pb-20">
      <h1 className="text-[#1a1917]">
        Experienced product designer and design leader with 15+ years designing 0<ArrowRight size={36} style={{ width: '1em', height: '1em' }} className="inline align-middle mx-1" />1 products.
        Human-centered design and design engineering.
        <br />
        <br />
        Areas of focus<ArrowRight size={36} style={{ width: '1em', height: '1em' }} className="inline align-middle mx-1" />product design, design engineering, design systems, brand/identity, and visual design.
        <br />
        <br />
        Forever designing<InfinitySymbol size={36} style={{ width: '1em', height: '1em' }} className="inline align-middle ml-1" />
      </h1>
    </main>
  )
}
