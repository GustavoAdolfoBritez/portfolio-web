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
      <span>{text}</span>
      <span className="ml-0.5 inline-block w-[2px] animate-pulse text-zinc-300">|</span>
    </p>
  )
}
