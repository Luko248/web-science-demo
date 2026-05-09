// url=https://www.figma.com/design/5c3GjsFzuUEYkArQmiHHJc/WebScience-DS?node-id=21-37
// source=src/components/Input.astro
// component=Input
const figma = require('figma')
const instance = figma.selectedInstance

// TEXT: visible strings in the field
const label = instance.getString('label')
const placeholder = instance.getString('placeholder')
const hint = instance.getString('hint')

// VARIANT type=text|email|date|password|number — maps directly to the HTML input type
const type = instance.getEnum('type', {
  text:     'text',
  email:    'email',
  date:     'date',
  password: 'password',
  number:   'number',
})

// BOOLEAN props — map directly to Astro boolean attributes
const required = instance.getBoolean('required')
const disabled = instance.getBoolean('disabled')
const hasHint  = instance.getBoolean('hasHint')

// Derive a stable id from the label (matches codebase convention)
const id = label.toLowerCase().replace(/\s+/g, '-')

export default {
  example: figma.tsx`
    <Input
      id="${id}"
      label="${label}"
      ${type !== 'text' ? figma.tsx`type="${type}"` : ''}
      ${placeholder ? figma.tsx`placeholder="${placeholder}"` : ''}
      ${required ? 'required' : ''}
      ${disabled ? 'disabled' : ''}
      ${hasHint ? figma.tsx`hint="${hint}"` : ''}
    />
  `,
  imports: ['import Input from "../components/Input.astro"'],
  id: 'input',
}
