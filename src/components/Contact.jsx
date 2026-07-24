import { Code2, Link2, Mail } from 'lucide-react'
import { site } from '../data/site'

const contactLinks = [
  {
    href: `mailto:${site.email}`,
    icon: Mail,
    label: 'Email',
    external: false,
  },
  {
    href: site.linkedin,
    icon: Link2,
    label: 'LinkedIn',
    external: true,
  },
  {
    href: site.github,
    icon: Code2,
    label: 'GitHub',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contacto</h2>
          <p className="mt-4 text-lg font-medium text-zinc-200">Trabajemos juntos</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
            Estoy disponible para proyectos y nuevas oportunidades laborales. No dudes en
            escribirme.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-sm grid-cols-3 gap-6 sm:max-w-md sm:gap-8">
          {contactLinks.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="group flex flex-col items-center gap-2.5 text-zinc-500 transition-colors hover:text-zinc-100"
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                className="transition-transform group-hover:scale-105"
              />
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
