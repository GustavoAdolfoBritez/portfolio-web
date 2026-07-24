import { ArrowDown, Code2, Download, Link2 } from 'lucide-react'
import TypewriterRole from './TypewriterRole'
import { site } from '../data/site'

function Avatar() {
  return (
    <div className="mx-auto size-32 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10 sm:size-40">
      <img
        src={site.avatarPath}
        srcSet={site.avatarSrcSet}
        sizes={site.avatarSizes}
        alt={site.heroName}
        width={576}
        height={576}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-4 py-16 sm:px-6"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {site.availability}
        </div>

        <div className="mt-6">
          <Avatar />
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {site.heroName}
        </h1>
        <TypewriterRole
          phrases={site.heroRoles}
          className="mt-3 min-h-8 text-xl text-zinc-400 sm:min-h-9 sm:text-2xl md:text-3xl"
        />
        <p className="mt-4 max-w-lg text-sm text-zinc-400 sm:text-base">
          {site.heroDescription}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#proyecto-estrella"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Ver proyectos
          </a>
          <a
            href={site.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
          >
            <Download size={16} />
            Descargar CV (PDF)
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <Code2 size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <Link2 size={18} />
          </a>
        </div>

        <a
          href="#proyecto-estrella"
          aria-label="Ir a proyectos"
          className="mt-16 flex flex-col items-center gap-1 text-[11px] font-medium tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-300"
        >
          Bajar
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
