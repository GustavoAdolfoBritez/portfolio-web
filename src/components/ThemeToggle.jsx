import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        theme === 'dark'
          ? 'Ver capturas en modo claro'
          : 'Ver capturas en modo oscuro'
      }
      title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
      className="rounded-lg border border-zinc-700 bg-zinc-800/80 p-2 text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
    >
      {theme === 'dark' ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
    </button>
  )
}
