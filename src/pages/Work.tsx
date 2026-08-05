import { caseStudies } from '../data'
import ProjectPreview from '../components/ProjectPreview'

export default function Work() {
  return (
    <main className="pt-[52px]">
      {caseStudies.map((study, i) => (
        <ProjectPreview key={study.id} study={study} index={i} />
      ))}
    </main>
  )
}
