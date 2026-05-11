// url=https://www.figma.com/design/5c3GjsFzuUEYkArQmiHHJc/WebScience-DS?node-id=17-47
// source=src/components/Icon.astro
// component=Icon
const figma = require('figma')
const instance = figma.selectedInstance

// VARIANT: size=sm|md|lg — maps directly to the size prop
const size = instance.getEnum('size', {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
})

// TEXT: color — optional CSS color value passed to the Icon color prop.
// Empty means "inherit currentColor" from the parent/class, matching Icon.astro.
const color = instance.getString('color')

// INSTANCE_SWAP: which vector glyph is shown (vectors/sparkles → name="sparkles", etc.)
// When connected, propagate the icon name through template metadata for use in parent templates.
const iconInst = instance.getInstanceSwap('icon')
let name = 'sparkles'
if (iconInst && iconInst.type === 'INSTANCE' && iconInst.hasCodeConnect()) {
  name = iconInst.executeTemplate().metadata?.props?.name ?? 'sparkles'
}

export default {
  example: figma.tsx`<Icon name="${name}" size="${size}" ${color ? figma.tsx`color="${color}"` : ''} />`,
  imports: ['import Icon from "../components/Icon.astro"'],
  id: 'icon',
  metadata: {
    nestable: true,
    props: { name, size, color },
  },
}
