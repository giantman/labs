import { useEffect, useState } from 'react'

export interface ThumbnailCycleItem {
  id: string
  title: string
  thumbnail?: string
  video?: string
}

const INTERVAL_MS = 500

export default function ThumbnailCycle({ items }: { items: ThumbnailCycleItem[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="relative w-full aspect-[16/9] bg-[#d9d9d9] overflow-hidden">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-150 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          {item.video ? (
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : item.thumbnail ? (
            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
          ) : null}
        </div>
      ))}
    </div>
  )
}
