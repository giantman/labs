export interface ProjectSplitItem {
  id: string
  title: string
  year: string
  role: string
  thumbnail?: string
  video?: string
}

export default function ProjectSplit({
  project,
  onClick,
  viewTransitionName,
  disabled = false,
  comingSoon = false,
}: {
  project: ProjectSplitItem
  onClick?: () => void
  viewTransitionName?: string
  disabled?: boolean
  comingSoon?: boolean
}) {
  return (
    <div
      role={disabled ? undefined : 'link'}
      tabIndex={disabled ? undefined : 0}
      onClick={disabled ? undefined : onClick}
      onKeyDown={disabled ? undefined : (e) => { if (e.key === 'Enter') onClick?.() }}
      aria-disabled={disabled || undefined}
      className={`group grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-12 items-start ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className="flex flex-col gap-4 order-2 md:order-1">
        <p className="text-sm font-medium text-[#1a1917]/50 leading-tight">{project.title}</p>
        <p className="text-sm font-medium text-[#1a1917]/50 leading-tight">
          {project.role}
          {project.role && project.year ? ' — ' : ''}
          {project.year}
        </p>
        {comingSoon && (
          <p className="text-sm font-medium text-[#1a1917]/30 leading-tight">Case study coming soon</p>
        )}
      </div>

      <div
        className={`order-1 md:order-2 bg-[#d9d9d9] overflow-hidden transition-opacity duration-300 ease-out ${disabled ? '' : 'group-hover:opacity-80'}`}
        style={viewTransitionName ? { viewTransitionName } : undefined}
      >
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block pointer-events-none"
          />
        ) : project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            draggable={false}
            className="w-full h-auto block pointer-events-none"
          />
        ) : null}
      </div>
    </div>
  )
}
