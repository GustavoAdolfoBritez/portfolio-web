import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-400 sm:flex-row sm:px-6">
        <p>&copy; {year} {site.name}</p>
        <p>{site.location}</p>
      </div>
    </footer>
  )
}
