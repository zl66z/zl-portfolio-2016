/** 技能分组数据 — 修改此文件即可更新技能展示 */
export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: '前端',
    items: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: '工具',
    items: ['Git', 'Vite', 'VS Code'],
  },
]
