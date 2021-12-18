import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Basket from '../BasketItem'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Basket',
  component: Basket,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    productName: 'Test',
    storeName: 'ssss',
  },
} as unknown as ComponentMeta<typeof Basket>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Basket> = (args: any) => (
  <Basket {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  productName: 'Iphone 13 Pro',
  storeName: 'commercial store',
}
