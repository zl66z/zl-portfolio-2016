import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

/** 项目展示 — 卡片列表布局 */
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gradient md:text-4xl">项目展示</h2>
        <p className="mt-3 max-w-xl text-text-secondary">
          以下是我参与或独立完成的部分项目，涵盖 Web 应用与工具开发。
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
