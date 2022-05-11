import { ComponentMeta, storiesOf } from '@storybook/react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PrivateInfoDefaultButton from 'component/basic/PrivateInfoButton/Default';
import { action } from '@storybook/addon-actions'
import useState from 'storybook-addon-state';

export default {
  title: 'Example/PrivateInfoButton/Default',
  component: PrivateInfoDefaultButton,
} as ComponentMeta<typeof PrivateInfoDefaultButton>;

export const stringsrc = () => <PrivateInfoDefaultButton src='https://picsum.photos/200' title='개인정보' onClick={action('stringsrc click')} />;
export const componentsrc = () => <PrivateInfoDefaultButton src={AccessTimeIcon} title='개인정보' onClick={action('componentsrc click')} />;
