import { describe, expect, it } from 'vitest'
import { experience, site, starProject, techStack } from './site'

describe('site data', () => {
  it('define datos críticos del hero y contacto', () => {
    expect(site.heroName).toBeTruthy()
    expect(site.heroRoles.length).toBeGreaterThan(0)
    expect(site.heroDescription).toMatch(/Front-End/i)
    expect(site.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    expect(site.cvPath).toMatch(/\.pdf$/)
    expect(site.github).toMatch(/^https:\/\//)
    expect(site.linkedin).toMatch(/^https:\/\//)
  })

  it('expone el proyecto destacado con demo y repositorio', () => {
    expect(starProject.title).toBeTruthy()
    expect(starProject.demoUrl).toMatch(/^https:\/\//)
    expect(starProject.repoUrl).toMatch(/^https:\/\//)
    expect(starProject.screenshots.length).toBeGreaterThan(0)
  })

  it('mantiene experiencia laboral como Front-End', () => {
    expect(experience.role).toMatch(/Front-End/i)
    expect(experience.contributions.length).toBeGreaterThan(0)
  })

  it('incluye categorías del stack técnico', () => {
    expect(Object.keys(techStack)).toEqual(
      expect.arrayContaining(['Frontend', 'Backend', 'Base de Datos', 'Herramientas']),
    )
  })
})
