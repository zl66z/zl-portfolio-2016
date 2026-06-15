import { profile } from '../data/profile'

/** 首页 Hero — 大标题、简介、头像，深色主题 + 渐变色 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      {/* 背景渐变光晕 */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-from/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-to/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          {/* 头像 — 渐变边框环 */}
          <div className="shrink-0">
            <div className="rounded-full bg-gradient-accent p-1 shadow-lg shadow-accent-from/20">
              <img
                src={profile.avatar}
                alt={profile.avatarAlt}
                width={160}
                height={160}
                loading="eager"
                className="h-36 w-36 rounded-full bg-bg-card object-cover md:h-40 md:w-40"
              />
            </div>
          </div>

          {/* 文字内容 */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-3 text-sm font-medium tracking-widest text-text-secondary uppercase">
              你好，我是
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="mt-4 text-xl font-medium md:text-2xl">
              <span className="text-gradient">{profile.title}</span>
            </p>

            <div className="mt-6 max-w-xl space-y-3">
              {profile.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-text-secondary md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 快捷导航 */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-gradient-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                查看项目
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-from/50 hover:text-gradient"
              >
                联系我
              </a>
            </div>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-secondary transition-colors hover:text-text-primary"
          aria-label="滚动到关于我"
        >
          <svg
            className="h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
