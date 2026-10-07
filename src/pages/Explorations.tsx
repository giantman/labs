import { useLayoutEffect } from 'react'

const PAGE_BG = '#e2e2e2'

const explorations = [
  { src: '/explorations/open-poster-01.png', alt: 'Yes! We’re open. C’mon in! poster, green and pink' },
  { src: '/explorations/open-poster-02.png', alt: 'Yes! We’re open. C’mon in! poster, dark green and lilac' },
  { src: '/explorations/open-poster-03.png', alt: 'Yes! We’re open. C’mon in! poster, purple and mint' },
  { src: '/explorations/open-poster-04.png', alt: 'Yes! We’re open. C’mon in! poster, teal and coral' },
  { src: '/explorations/polaris-poster-01.png', alt: 'Polaris Weightlifting poster, grey and red pixel type' },
  { src: '/explorations/polaris-poster-02.png', alt: 'Polaris Weightlifting Club poster, black with white headline' },
  { src: '/explorations/polaris-poster-03.png', alt: 'Polaris Weightlifting Club poster, green and orange pixel type' },
  { src: '/explorations/polaris-poster-04.png', alt: 'Polaris Weightlifting poster, pale blue and green rounded type' },
  { src: '/explorations/polaris-poster-05.png', alt: 'Polaris Weightlifting poster, black on black pixel type' },
  { src: '/explorations/polaris-poster-06.png', alt: 'Polaris Weightlifting poster, orange and red rounded type' },
]

// Shown larger, as a 2×2 block that breaks the 4-column grid.
const featured = [
  { src: '/explorations/super-giant-poster-01.png', alt: 'Super Giant Extra Large Print Series For Us poster, red and pink' },
  { src: '/explorations/super-giant-poster-02.png', alt: 'Super Giant Extra Large Print Series For Us poster, grey and violet' },
  { src: '/explorations/super-giant-poster-03.png', alt: 'Super Giant Extra Large Print Series For Us poster, green and lime' },
  { src: '/explorations/super-giant-poster-04.png', alt: 'Super Giant Extra Large Print Series For Us poster, grey and lime' },
]

export default function Explorations() {
  useLayoutEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--page-bg', PAGE_BG)
    return () => {
      root.style.removeProperty('--page-bg')
    }
  }, [])

  return (
    <main className="pt-[52px] px-4 pb-6">
      <div className="flex flex-col gap-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {explorations.map((item) => (
            <img key={item.src} src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto block" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featured.map((item) => (
            <img key={item.src} src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto block" />
          ))}
        </div>
      </div>
    </main>
  )
}
