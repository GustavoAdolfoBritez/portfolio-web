import { useEffect, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export default function ImageLightbox({ src, alt, width, height, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada de la captura"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar vista ampliada"
        className="fixed top-4 right-4 z-[101] rounded-lg bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
      >
        <X size={20} />
      </button>

      <div
        className="w-fit max-w-[calc(100vw-3rem)] overflow-hidden rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block max-h-[calc(100vh-3rem)] max-w-[calc(100vw-3rem)] h-auto w-auto"
        />
      </div>
    </div>
  )
}

export function ZoomableScreenshot({
  src,
  srcSet,
  sizes,
  zoomSrc,
  zoomWidth,
  zoomHeight,
  alt,
  width,
  height,
  caption = 'Clic para ampliar',
  onError,
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full cursor-zoom-in text-left"
        aria-label="Ampliar captura del proyecto"
      >
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading="eager"
          decoding="async"
          onError={onError}
          className="w-full transition-opacity group-hover:opacity-95"
        />
        <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          <ZoomIn size={14} />
          {caption}
        </span>
      </button>

      <ImageLightbox
        src={zoomSrc}
        alt={alt}
        width={zoomWidth ?? width}
        height={zoomHeight ?? height}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
