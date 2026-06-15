import { skills } from '../data/skills'

/** 关于我 — 详细介绍与技能列表 */
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold text-gradient">关于我</h2>
      <p className="mb-10 max-w-2xl leading-relaxed text-text-secondary">
        在这里详细介绍你的背景、经历与兴趣。可以分段描述教育背景、工作经验以及个人追求。
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="rounded-xl border border-border bg-bg-card p-6">
            <h3 className="mb-4 font-semibold text-text-primary">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-bg-secondary px-3 py-1 text-sm text-text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
