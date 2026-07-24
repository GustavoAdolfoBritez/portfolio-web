import OrbitingSkills from './OrbitingSkills'
import { techStack } from '../data/site'

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Tech Stack & Habilidades
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            Tecnologías con las que construyo y despliego productos.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <OrbitingSkills />
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {Object.entries(techStack).map(([category, skills]) => (
            <div key={category} className="rounded-xl border border-zinc-700/80 bg-zinc-900/40 px-4 py-3">
              <p className="text-xs font-semibold tracking-wide text-zinc-300 uppercase">
                {category}
              </p>
              <p className="mt-1.5 text-sm text-zinc-400/75">{skills.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
