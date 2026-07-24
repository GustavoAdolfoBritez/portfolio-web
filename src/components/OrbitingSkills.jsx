/**
 * Orbiting Skills — inspired by olova js / Sera UI (21st.dev)
 * https://21st.dev/@olovajs/components/orbiting-skills
 */

import { useRef, useState } from 'react'
import { Code2 } from 'lucide-react'
import { orbitingSkills } from '../data/site'
import { cn } from '../lib/utils'

function skillIconUrl(slug, color) {
  return `https://cdn.simpleicons.org/${slug}/${color}`
}

function OrbitRing({ radius, glow }) {
  const size = radius * 2 + 48
  return (
    <div
      className={cn(
        'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border',
        glow === 'cyan'
          ? 'border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.12)]'
          : glow === 'purple'
            ? 'border-purple-400/20 shadow-[0_0_70px_rgba(168,85,247,0.12)]'
            : 'border-violet-400/15 shadow-[0_0_60px_rgba(139,92,246,0.1)]',
      )}
      style={{ width: size, height: size }}
      aria-hidden
    />
  )
}

function OrbitLayer({ skills, radius, duration, reverse, glow, paused, onIconEnter, onIconLeave }) {
  const spin = reverse ? 'animate-orbit-spin-reverse' : 'animate-orbit-spin'
  const counter = reverse ? 'animate-orbit-spin' : 'animate-orbit-spin-reverse'

  return (
    <>
      <OrbitRing radius={radius} glow={glow} />
      <div className="absolute left-1/2 top-1/2 size-0">
        <div
          className={cn('relative size-0', spin)}
          style={{
            animationDuration: `${duration}s`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index
            return (
              <div
                key={skill.id}
                className="absolute left-0 top-0"
                style={{ transform: `rotate(${angle}deg) translateX(${radius}px)` }}
              >
                <div
                  className={cn('relative', counter)}
                  style={{
                    animationDuration: `${duration}s`,
                    animationPlayState: paused ? 'paused' : 'running',
                  }}
                >
                  <div
                    className="relative"
                    style={{ transform: `rotate(${-angle}deg)` }}
                  >
                    <div
                      className="group pointer-events-auto flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-800/90 bg-zinc-950/95 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 sm:size-12"
                      title={skill.label}
                      onMouseEnter={onIconEnter}
                      onMouseLeave={onIconLeave}
                    >
                      <img
                        src={skillIconUrl(skill.slug, skill.color)}
                        alt={skill.label}
                        width={22}
                        height={22}
                        className="size-5 sm:size-[22px]"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900/95 px-2 py-0.5 text-[10px] font-medium text-zinc-300 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                        {skill.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default function OrbitingSkills() {
  const hoverCountRef = useRef(0)
  const [paused, setPaused] = useState(false)

  function handleIconEnter() {
    hoverCountRef.current += 1
    setPaused(true)
  }

  function handleIconLeave() {
    hoverCountRef.current = Math.max(0, hoverCountRef.current - 1)
    if (hoverCountRef.current === 0) {
      setPaused(false)
    }
  }

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[min(100%,420px)] items-center justify-center sm:max-w-[480px]">
      <OrbitLayer
        skills={orbitingSkills.outer}
        radius={168}
        duration={48}
        reverse
        glow="purple"
        paused={paused}
        onIconEnter={handleIconEnter}
        onIconLeave={handleIconLeave}
      />
      <OrbitLayer
        skills={orbitingSkills.middle}
        radius={118}
        duration={36}
        glow="violet"
        paused={paused}
        onIconEnter={handleIconEnter}
        onIconLeave={handleIconLeave}
      />
      <OrbitLayer
        skills={orbitingSkills.inner}
        radius={72}
        duration={28}
        reverse
        glow="cyan"
        paused={paused}
        onIconEnter={handleIconEnter}
        onIconLeave={handleIconLeave}
      />

      <div className="relative z-10 flex size-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 shadow-[0_0_40px_rgba(99,102,241,0.25)] sm:size-[4.5rem]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/15 via-transparent to-purple-500/15" />
        <Code2 size={28} strokeWidth={1.75} className="relative text-cyan-300" aria-hidden />
      </div>
    </div>
  )
}
