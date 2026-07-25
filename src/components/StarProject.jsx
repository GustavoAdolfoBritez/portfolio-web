import { useState } from 'react'
import { CheckCircle2, ExternalLink, Info, Lock, Monitor } from 'lucide-react'
import { ZoomableScreenshot } from './ImageLightbox'
import ThemeToggle from './ThemeToggle'
import { starProject } from '../data/site'

export default function StarProject() {
  const [activeScreen, setActiveScreen] = useState(starProject.screenshots[0].id)
  const [screenshotTheme, setScreenshotTheme] = useState('dark')
  const [imageError, setImageError] = useState(false)
  const isRepoPrivate = Boolean(starProject.repoNote)

  const screen =
    starProject.screenshots.find((item) => item.id === activeScreen) ??
    starProject.screenshots[0]
  const themeImages =
    screen.imagesByTheme[screenshotTheme] ?? screen.imagesByTheme.dark

  const toggleScreenshotTheme = () =>
    setScreenshotTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <section id="proyecto-estrella" className="scroll-mt-20 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="text-sm font-medium text-zinc-400">Proyecto estrella</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          {starProject.title}
        </h2>
        {starProject.subtitle && (
          <p className="mt-1 text-sm text-zinc-400">{starProject.subtitle}</p>
        )}

        <article className="mt-10 overflow-hidden rounded-xl border border-zinc-800">
          {starProject.modulesLabel && (
            <div className="flex items-center justify-between gap-3 border-b border-zinc-800 px-4 py-3 sm:px-6">
              <p className="text-sm font-medium text-zinc-400">
                {starProject.modulesLabel}
              </p>
              <ThemeToggle
                theme={screenshotTheme}
                onToggle={toggleScreenshotTheme}
              />
            </div>
          )}
          <div
            className="grid gap-1 border-b border-zinc-800 bg-zinc-900/50 p-2 sm:flex sm:flex-wrap"
            style={{ gridTemplateColumns: `repeat(${starProject.screenshots.length}, minmax(0, 1fr))` }}
          >
            {starProject.screenshots.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveScreen(item.id)
                  setImageError(false)
                }}
                aria-pressed={activeScreen === item.id}
                className={`min-w-0 rounded-md px-2 py-1.5 text-center text-xs leading-tight font-medium transition-colors sm:px-3 sm:text-sm ${
                  activeScreen === item.id
                    ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-b border-zinc-800 bg-zinc-900/50">
            {!imageError ? (
              <ZoomableScreenshot
                key={`${activeScreen}-${screenshotTheme}`}
                src={themeImages.zoom}
                srcSet={themeImages.srcSet}
                sizes={starProject.imageSizes}
                zoomSrc={themeImages.zoom}
                zoomWidth={starProject.imageZoomWidth}
                zoomHeight={starProject.imageZoomHeight}
                alt={screen.alt}
                width={starProject.imageZoomWidth}
                height={starProject.imageZoomHeight}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center gap-3 text-zinc-400">
                <Monitor size={48} strokeWidth={1.5} />
                <p className="text-sm">No se pudo cargar la captura de {screen.label}</p>
              </div>
            )}
          </div>

          <p className="flex items-center justify-center gap-1.5 border-b border-zinc-800 bg-zinc-900/30 px-4 py-2 text-center text-xs text-zinc-500 sm:px-6">
            <Info size={13} className="shrink-0" aria-hidden />
            Los datos mostrados en las capturas son ficticios, solo con fines demostrativos.
          </p>

          <div className="p-6 sm:p-8">
            <p className="text-zinc-400">{starProject.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {starProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2">
              {starProject.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-zinc-300"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-zinc-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={starProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-zinc-300"
              >
                <ExternalLink size={16} />
                {starProject.demoLabel}
              </a>
              <a
                href={isRepoPrivate ? '#contacto' : starProject.repoUrl}
                target={isRepoPrivate ? undefined : '_blank'}
                rel={isRepoPrivate ? undefined : 'noreferrer'}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100"
              >
                {isRepoPrivate ? <Lock size={16} /> : <ExternalLink size={16} />}
                {starProject.repoLabel}
                {starProject.repoNote && (
                  <span className="font-normal text-zinc-400">— {starProject.repoNote}</span>
                )}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
