import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PrivateInfoDefaultButton from 'component/basic/PrivateInfoButton/Default';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/PrivateInfoButton/Default',
  component: PrivateInfoDefaultButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PrivateInfoDefaultButton>;

export const stringsrc = () => <PrivateInfoDefaultButton src='https://picsum.photos/200' title='개인정보' onClick={() => {}} />;
export const componentsrc = () => <PrivateInfoDefaultButton src={AccessTimeIcon} title='개인정보' onClick={() => {}} />;

