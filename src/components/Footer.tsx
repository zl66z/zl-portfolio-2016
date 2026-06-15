/** 页脚 — 版权信息 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 text-center text-sm text-text-secondary">
      <p>&copy; {year} 你的名字. All rights reserved.</p>
    </footer>
  )
}
