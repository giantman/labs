export interface ProjectRowData {
  id: string
  title: string
  year: string
  role: string
  description: string
  thumbnail?: string
  video?: string
}

export default function ProjectRow({
  project,
  onClick,
  isExiting = false,
  viewTransitionName,
}: {
  project: ProjectRowData
  onClick?: () => void
  isExiting?: boolean
  viewTransitionName?: string
}) {
  const isLinked = !!onClick
  const wrapperClassName = `flex flex-col gap-3 transition-all duration-300 ease-out ${isLinked ? 'cursor-pointer hover:opacity-70' : ''} ${isExiting ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`

  return (
    <div
      role={isLinked ? 'link' : undefined}
      tabIndex={isLinked ? 0 : undefined}
      onClick={onClick}
      onKeyDown={isLinked ? (e) => { if (e.key === 'Enter') onClick?.() } : undefined}
      className={wrapperClassName}
    >
      <div className="bg-[#d9d9d9] overflow-hidden" style={viewTransitionName ? { viewTransitionName } : undefined}>
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />
        ) : project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className="w-full h-auto block" />
        ) : null}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-medium text-[#1a1917] leading-none">{project.title}</p>
        <p className="text-sm text-[#1a1917]/50 leading-[1.35]">
          {project.role}
          {project.role && project.year ? ' — ' : ''}
          {project.year}
        </p>
      </div>
    </div>
  )
}
