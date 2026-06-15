/** 项目展示数据 — 修改此文件即可更新项目列表 */
export interface Project {
  id: string
  name: string
  description: string
  image: string
  techStack: string[]
  links: {
    demo?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    name: '个人作品集',
    description: '基于 React + TypeScript + Tailwind CSS 构建的响应式作品集网站，支持深色主题与平滑滚动导航。',
    image: '/projects/portfolio.svg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    links: {
      demo: '#',
      github: 'https://github.com/example/portfolio',
    },
  },
  {
    id: '2',
    name: '电子黑板',
    description: '仿真粉笔质感的在线画板，支持多色绘画、橡皮擦、撤销与 PNG 图片导出，兼容触控设备。',
    image: '/projects/blackboard.svg',
    techStack: ['HTML5 Canvas', 'JavaScript', 'CSS'],
    links: {
      demo: '#',
      github: 'https://github.com/example/blackboard',
    },
  },
  {
    id: '3',
    name: '任务管理器',
    description: '轻量级待办应用，支持任务增删、状态切换与本地持久化存储，界面简洁易用。',
    image: '/projects/todo.svg',
    techStack: ['React', 'TypeScript', 'LocalStorage'],
    links: {
      github: 'https://github.com/example/todo',
    },
  },
]
