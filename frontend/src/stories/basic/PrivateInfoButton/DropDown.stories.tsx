import { ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import PrivateInfoDropDownButton from 'component/basic/PrivateInfoButton/DropDown';
import PrivateInfoDefaultButton from 'component/basic/PrivateInfoButton/Default';
import { Box } from '@mui/system';

export default {
  title: 'Example/PrivateInfoButton/Dropdown',
  component: PrivateInfoDropDownButton,
} as ComponentMeta<typeof PrivateInfoDropDownButton>;

export const Dropdown = () => (
<Box display="flex">
  <PrivateInfoDefaultButton src='https://picsum.photos/200' title='개인정보' onClick={action('Drop Down Click')} />
  <PrivateInfoDropDownButton src='https://picsum.photos/200' title='개인정보' onDropDownClick={action('Drop Down Click')} />
</Box>
);
