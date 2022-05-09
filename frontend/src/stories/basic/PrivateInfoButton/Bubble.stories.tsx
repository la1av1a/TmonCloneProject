import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PrivateInfoBubbleButton from 'component/basic/PrivateInfoButton/Bubble'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/PrivateInfoButton/Bubble',
  component: PrivateInfoBubbleButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PrivateInfoBubbleButton>;

export const Bubble = () => <PrivateInfoBubbleButton src='Test' title='Test2' onClick={() => {}} />;


