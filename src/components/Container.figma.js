// url=https://www.figma.com/design/5c3GjsFzuUEYkArQmiHHJc/WebScience-DS?node-id=24-33
// source=src/components/Container.astro
// component=Container
const figma = require('figma')
const instance = figma.selectedInstance

// TEXT: title — rendered as the card header heading
const title = instance.getString('title')

// VARIANT hasIcon=True|False — controls whether the icon prop is passed
const hasIcon = instance.getEnum('hasIcon', { True: true, False: false })

// INSTANCE_SWAP: icon — an Icon component instance; read its name via metadata
// iconSize / iconColor can be set as additional props (see Container.astro)
let iconName
if (hasIcon) {
  const iconInst = instance.getInstanceSwap('icon')
  if (iconInst && iconInst.type === 'INSTANCE' && iconInst.hasCodeConnect()) {
    iconName = iconInst.executeTemplate().metadata?.props?.name
  }
  iconName = iconName ?? 'sparkles'
}

export default {
  example: figma.tsx`
    <Container
      title="${title}"
      ${hasIcon && iconName ? figma.tsx`icon="${iconName}"` : ''}
    >
      {/* default slot: main content goes here */}
      <p>Content here</p>

      {/* footer slot: actions, buttons, links */}
      <div slot="footer">
        {/* footer actions */}
      </div>
    </Container>
  `,
  imports: ['import Container from "../components/Container.astro"'],
  id: 'container',
}
