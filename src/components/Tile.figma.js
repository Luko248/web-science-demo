// url=https://www.figma.com/design/5c3GjsFzuUEYkArQmiHHJc/WebScience-DS?node-id=28-60
// source=src/components/Tile.astro
// component=Tile
const figma = require('figma')
const instance = figma.selectedInstance

// TEXT: content strings
const title = instance.getString('title')
const subtitle = instance.getString('subtitle')
const cta = instance.getString('cta')

// VARIANT image=True|False — controls whether the image prop is passed
// In code, image is a URL string; Figma uses True/False to show/hide the area
const hasImage = instance.getEnum('image', { True: true, False: false })

// VARIANT hasSubtitle=True|False — controls whether subtitle is shown
const hasSubtitle = instance.getEnum('hasSubtitle', { True: true, False: false })

// BOOLEAN hasCta — controls whether the CTA row is rendered
const hasCta = instance.getBoolean('hasCta')

export default {
  example: figma.tsx`
    <Tile
      href="#"
      ${hasImage ? figma.tsx`image="https://example.com/image.jpg"` : ''}
      title="${title}"
      ${hasSubtitle ? figma.tsx`subtitle="${subtitle}"` : ''}
      ${hasCta ? figma.tsx`cta="${cta}"` : ''}
    >
      {/* default slot: plain-text body content */}
      Slot content
    </Tile>
  `,
  imports: ['import Tile from "../components/Tile.astro"'],
  id: 'tile',
}
