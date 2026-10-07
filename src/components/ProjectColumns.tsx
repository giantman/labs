import { Children, type ReactNode } from 'react'

/**
 * Splits projects into two independently stacking columns on desktop —
 * odd-numbered projects on the left, even-numbered on the right. On mobile
 * the columns dissolve and `order` restores the original sequence.
 */
export default function ProjectColumns({ children }: { children: ReactNode }) {
  const items = Children.toArray(children).map((child, i) => (
    <div key={i} style={{ order: i }}>
      {child}
    </div>
  ))

  return (
    <div className="flex flex-col gap-[80px] md:grid md:grid-cols-[1fr_2fr] md:gap-x-6 md:items-start">
      <div className="contents md:flex md:flex-col md:gap-[80px]">{items.filter((_, i) => i % 2 === 0)}</div>
      <div className="contents md:flex md:flex-col md:gap-[80px]">{items.filter((_, i) => i % 2 === 1)}</div>
    </div>
  )
}
