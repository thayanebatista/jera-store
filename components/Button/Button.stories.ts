import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'Variante de estilo do botão'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado desabilitado do botão'
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Botão Primário</Button>'
  })
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Botão Secundário</Button>'
  })
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'medium'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Botão de Perigo</Button>'
  })
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Botão Desabilitado</Button>'
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex gap-4">
        <Button variant="primary" size="small">Pequeno</Button>
        <Button variant="primary" size="medium">Médio</Button>
        <Button variant="primary" size="large">Grande</Button>
      </div>
    `
  })
}
