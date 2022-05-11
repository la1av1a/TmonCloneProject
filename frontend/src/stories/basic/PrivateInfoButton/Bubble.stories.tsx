import { ComponentMeta } from '@storybook/react';

import PrivateInfoBubbleButton from 'component/basic/PrivateInfoButton/Bubble'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/PrivateInfoButton/Bubble',
  component: PrivateInfoBubbleButton,
} as ComponentMeta<typeof PrivateInfoBubbleButton>;

export const Bubble = () => <PrivateInfoBubbleButton bubbleCount={5} src='https://picsum.photos/200' title='Test2' onClick={action('Bubble Click')} />;


