/** 联系方式 — 邮箱、GitHub、社交媒体 */
const contacts = [
  { label: '邮箱', href: 'mailto:your@email.com', text: 'your@email.com' },
  { label: 'GitHub', href: 'https://github.com/yourname', text: 'github.com/yourname' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', text: 'LinkedIn' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold text-gradient">联系方式</h2>
      <ul className="space-y-4">
        {contacts.map((item) => (
          <li key={item.label}>
            <span className="mr-3 text-text-secondary">{item.label}:</span>
            <a
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-text-primary underline-offset-4 hover:underline"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
