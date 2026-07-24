import { useEffect, useRef, useState } from 'react'
import {
  Briefcase,
  GraduationCap,
  Home,
  Layers,
  Mail,
} from 'lucide-react'

const links = [
  { href: '#inicio', label: 'Inicio', icon: Home },
  { href: '#proyecto-estrella', label: 'Tesis', icon: GraduationCap },
  { href: '#experiencia', label: 'Experiencia', icon: Briefcase },
  { href: '#stack', label: 'Stack', icon: Layers },
  { href: '#contacto', label: 'Contacto', icon: Mail },
]

const SECTION_SCROLL_NUDGE = 1

function getHeaderOffset() {
  const header = document.querySelector('header')
  if (!header) return 72
  return Math.ceil(header.getBoundingClientRect().height) + 8
}

function getActiveSectionFromScroll() {
  const headerOffset = getHeaderOffset()

  if (window.scrollY < 48) return '#inicio'

  const scrollBottom = window.scrollY + window.innerHeight
  const docHeight = document.documentElement.scrollHeight
  if (scrollBottom >= docHeight - 32) {
    return links[links.length - 1].href
  }

  // Marca la sección en cuanto su inicio entra en el 60% superior del viewport
  const switchLine = headerOffset + window.innerHeight * 0.6
  let active = links[0].href

  for (const link of links) {
    const el = document.getElementById(link.href.slice(1))
    if (!el) continue

    if (el.getBoundingClientRect().top <= switchLine) {
      active = link.href
    }
  }

  return active
}

function scrollToSection(href) {
  if (href === '#inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const el = document.getElementById(href.slice(1))
  if (!el) return

  const headerOffset = getHeaderOffset()
  const top = el.offsetTop - headerOffset + SECTION_SCROLL_NUDGE
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

function OdysseyNavLink({ href, label, icon: Icon, isActive, onClick, className = '' }) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      aria-current={isActive ? 'page' : undefined}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${className} ${
        isActive
          ? 'bg-zinc-800 text-white'
          : 'text-zinc-500 hover:text-zinc-200'
      }`}
    >
      <Icon size={15} strokeWidth={1.75} aria-hidden />
      {label}
    </a>
  )
}

function IconNavLink({ href, label, icon: Icon, isActive, onClick }) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      aria-label={label}
      title={label}
      aria-current={isActive ? 'page' : undefined}
      className={`inline-flex items-center justify-center rounded-full p-2.5 transition-colors duration-200 ${
        isActive
          ? 'bg-zinc-800 text-white'
          : 'text-zinc-500 hover:text-zinc-200'
      }`}
    >
      <Icon size={18} strokeWidth={1.75} aria-hidden />
    </a>
  )
}

export default function Header() {
  const [activeSection, setActiveSection] = useState(links[0].href)
  const isNavigatingRef = useRef(false)
  const navigationTimerRef = useRef(null)

  useEffect(() => {
    let ticking = false

    const updateActiveSection = () => {
      if (isNavigatingRef.current) return
      setActiveSection(getActiveSectionFromScroll())
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    updateActiveSection()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateActiveSection)
      if (navigationTimerRef.current) {
        window.clearTimeout(navigationTimerRef.current)
      }
    }
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setActiveSection(href)

    isNavigatingRef.current = true
    if (navigationTimerRef.current) {
      window.clearTimeout(navigationTimerRef.current)
    }

    scrollToSection(href)

    navigationTimerRef.current = window.setTimeout(() => {
      isNavigatingRef.current = false
      setActiveSection(getActiveSectionFromScroll())
    }, 900)
  }

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 py-4">
      <nav className="hidden items-center gap-0.5 rounded-full border border-zinc-800/90 bg-zinc-950 p-1 md:flex">
        {links.map((link) => (
          <OdysseyNavLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            isActive={activeSection === link.href}
            onClick={handleNavClick}
          />
        ))}
      </nav>

      <nav className="flex items-center gap-0.5 rounded-full border border-zinc-800/90 bg-zinc-950 p-1 md:hidden">
        {links.map((link) => (
          <IconNavLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            isActive={activeSection === link.href}
            onClick={handleNavClick}
          />
        ))}
      </nav>
    </header>
  )
}
