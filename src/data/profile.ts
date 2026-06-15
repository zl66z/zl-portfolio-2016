/** 首页 Hero 个人信息 — 修改此文件即可更新展示内容 */
export interface Profile {
  name: string
  title: string
  bio: string[]
  avatar: string
  avatarAlt: string
}

export const profile: Profile = {
  name: '张三',
  title: '前端工程师',
  bio: [
    '热爱用代码构建优雅、高效的 Web 体验，专注于 React 生态与现代前端工程化。',
    '擅长将设计稿落地为响应式界面，并持续追求性能与可访问性的平衡。',
  ],
  avatar: '/avatar.svg',
  avatarAlt: '张三的头像',
}
