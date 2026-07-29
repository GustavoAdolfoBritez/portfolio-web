import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import App from './App'
import { site } from './data/site'

vi.mock('./components/BeamsBackground', () => ({
  default: () => <div data-testid="beams-background" />,
}))

describe('App', () => {
  it('renderiza las secciones principales del portfolio', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: site.heroName })).toBeInTheDocument()
    expect(screen.getByText(site.availability)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Sistema de Gestión Académica y Auditoría/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Experiencia/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Tech Stack & Habilidades/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contacto/i })).toBeInTheDocument()
  })

  it('expone el enlace de descarga del CV', () => {
    render(<App />)

    const cvLink = screen.getByRole('link', { name: /Descargar CV/i })
    expect(cvLink).toHaveAttribute('href', site.cvPath)
    expect(cvLink).toHaveAttribute('download')
  })
})
