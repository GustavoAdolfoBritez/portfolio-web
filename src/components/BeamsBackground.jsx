/**
 * Beams Background — adapted from Kokonut UI (MIT)
 * https://github.com/kokonut-labs/kokonutui
 */

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'

const opacityMap = {
  subtle: 0.7,
  medium: 0.85,
  strong: 1,
}

function createBeam(width, height) {
  const angle = -35 + Math.random() * 10

  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }
}

const MOBILE_QUERY = '(max-width: 767px)'
const MOBILE_FPS = 30

export default function BeamsBackground({ className, intensity = 'medium' }) {
  const canvasRef = useRef(null)
  const beamsRef = useRef([])
  const animationFrameRef = useRef(0)
  const isMobileRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_QUERY)
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncState = () => {
      setIsMobile(mobileQuery.matches)
      setPrefersReducedMotion(reducedQuery.matches)
    }
    syncState()

    mobileQuery.addEventListener('change', syncState)
    reducedQuery.addEventListener('change', syncState)

    return () => {
      mobileQuery.removeEventListener('change', syncState)
      reducedQuery.removeEventListener('change', syncState)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const updateCanvasSize = () => {
      const isMobile = window.matchMedia(MOBILE_QUERY).matches
      isMobileRef.current = isMobile

      // Cap el device pixel ratio: en celulares de alta densidad (DPR 3)
      // dibujar a resolución nativa multiplica por 9 la cantidad de píxeles.
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const minimumBeams = isMobile ? 8 : 20
      const totalBeams = Math.round(minimumBeams * 1.5)
      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeam(window.innerWidth, window.innerHeight),
      )
    }

    function resetBeam(beam, index, totalBeams) {
      const column = index % 3
      const spacing = window.innerWidth / 3

      beam.y = window.innerHeight + 100
      beam.x =
        column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 100 + Math.random() * 100
      beam.speed = 0.5 + Math.random() * 0.4
      beam.hue = 190 + (index * 70) / totalBeams
      beam.opacity = 0.2 + Math.random() * 0.1
      return beam
    }

    function drawBeam(beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsingOpacity =
        beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity]

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)

      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`)
      gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
      gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
      gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
      gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    function renderFrame() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      // El desenfoque se aplica por CSS sobre el <canvas> (GPU, una sola pasada)
      // en vez de ctx.filter, que recalcula un blur por software en cada beam
      // y en cada frame — muy costoso en navegadores móviles.
      beamsRef.current.forEach((beam) => drawBeam(beam))
    }

    let lastFrameTime = 0

    function animate(time) {
      const targetFps = isMobileRef.current ? MOBILE_FPS : 60
      const minFrameGap = 1000 / targetFps

      if (time - lastFrameTime >= minFrameGap) {
        lastFrameTime = time

        const totalBeams = beamsRef.current.length
        beamsRef.current.forEach((beam, index) => {
          beam.y -= beam.speed
          beam.pulse += beam.pulseSpeed

          if (beam.y + beam.length < -100) {
            resetBeam(beam, index, totalBeams)
          }
        })

        renderFrame()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameRef.current)
      } else if (!prefersReducedMotion) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    if (prefersReducedMotion) {
      renderFrame()
    } else {
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [intensity])

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-950',
        className,
      )}
      aria-hidden
    >
      <canvas
        className="absolute inset-0"
        ref={canvasRef}
        style={{ filter: `blur(${isMobile ? 18 : 24}px)` }}
      />

      {!prefersReducedMotion && (
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          className="absolute inset-0 bg-neutral-950/5"
          style={{ backdropFilter: `blur(${isMobile ? 20 : 50}px)` }}
          transition={{
            duration: 10,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      )}
    </div>
  )
}
