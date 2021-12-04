import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Product from '../Product';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Product',
    component: Product,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        productName: 'Test',
        storeName: 'ssss'
    },
} as unknown as ComponentMeta<typeof Product>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    productName: 'Iphone 13 Pro',
    storeName: 'commercial store'
};


