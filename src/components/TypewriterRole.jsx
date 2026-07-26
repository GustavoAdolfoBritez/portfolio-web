import { useEffect, useState } from 'react'

export default function TypewriterRole({
  phrases,
  typingMs = 70,
  deletingMs = 45,
  pauseMs = 2200,
  className = '',
}) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let delay = isDeleting ? deletingMs : typingMs

    if (!isDeleting && text === current) {
      delay = pauseMs
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true)
        return
      }

      if (isDeleting) {
        if (text.length === 0) {
          setIsDeleting(false)
          setPhraseIndex((index) => (index + 1) % phrases.length)
          return
        }
        setText(current.slice(0, text.length - 1))
        return
      }

      setText(current.slice(0, text.length + 1))
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingMs, deletingMs, pauseMs])

  return (
    <p className={className} aria-live="polite">
      {/* El cursor va como border-right del mismo span de texto (no un
          elemento aparte) para que nunca quede "huérfano" en su propia
          línea cuando el texto llega justo al borde en pantallas chicas. */}
      <span className="animate-caret-blink border-r-2 border-zinc-300 pr-0.5">
        {text}
      </span>
    </p>
  )
}
