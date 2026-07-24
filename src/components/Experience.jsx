import { Briefcase } from 'lucide-react'
import { experience } from '../data/site'

export default function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-20 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Experiencia práctica
        </h2>

        <article className="mt-10 rounded-xl border border-zinc-800 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-zinc-800 p-3">
              <Briefcase size={22} className="text-zinc-300" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">{experience.company}</h3>
                <span className="text-sm text-zinc-400">{experience.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-zinc-400">{experience.role}</p>
              <ul className="mt-4 space-y-2">
                {experience.contributions.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-400 before:mr-2 before:content-['—']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
