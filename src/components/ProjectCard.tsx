import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

/** 单个项目卡片 — 截图、标题、描述、技术栈标签 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-from/30 hover:shadow-lg hover:shadow-accent-from/10">
      {/* 项目截图 */}
      <div className="relative overflow-hidden bg-bg-secondary">
        <img
          src={project.image}
          alt={`${project.name} 项目截图`}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      {/* 卡片内容 */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold text-text-primary">{project.name}</h3>

        <p className="flex-1 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* 技术栈标签 */}
        <ul className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-bg-secondary px-3 py-0.5 text-xs text-text-secondary transition-colors group-hover:border-accent-from/20"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* 项目链接（PRD 要求） */}
        {(project.links.demo || project.links.github) && (
          <div className="flex gap-4 border-t border-border pt-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gradient hover:opacity-80"
              >
                在线预览 →
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
