import sharp from 'sharp'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const DISPLAY_WIDTH = 1024

const screenshots = [
  { id: 'dashboard', label: 'Panel de control' },
  { id: 'auditoria', label: 'Auditoría' },
  { id: 'cierre', label: 'Cierre mensual' },
]

const themes = ['light', 'dark']

for (const { id } of screenshots) {
  for (const theme of themes) {
    const source = join(publicDir, `${id}-${theme}.png`)
    const output1x = join(publicDir, `${id}-${theme}.webp`)
    const output2x = join(publicDir, `${id}-${theme}@2x.webp`)

    const metadata = await sharp(source).metadata()
    const displayHeight = Math.round((DISPLAY_WIDTH * metadata.height) / metadata.width)

    await sharp(source).webp({ quality: 95, effort: 6 }).toFile(output2x)

    await sharp(source)
      .resize(DISPLAY_WIDTH, displayHeight, { kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 92, effort: 6 })
      .toFile(output1x)

    console.log(`[${id}-${theme}] ${metadata.width}x${metadata.height} → 1x + @2x`)
  }
}

console.log('\nDone.')
