import { Meta, Story } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Components/Avatar',
  component: AvatarComponent
} as Meta;

const avatarUrl =
  'https://scontent.fisb1-2.fna.fbcdn.net/v/t1.18169-9/1913549_198386941044_6051918_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBScV711tD91ZhaDy5nzwcYYBaCn3GUIxhgFoKfcZQjNO7dX1-bOWCMeG7cWtcJ20&_nc_ohc=BNY-z2YqXuYAX_dd7tk&_nc_ht=scontent.fisb1-2.fna&oh=00_AT-PDZDFTdnvzFppd-AiThlNUsofNdXmVsJ5G9zG9gMh2w&oe=62F86961';

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  component: AvatarComponent,
  props: args
});

export const Rounded: Story<AvatarComponent> = Template.bind({});
Rounded.args = {
  avatarUrl,
  size: 64
};

export const Square: Story<AvatarComponent> = Template.bind({});
Square.args = {
  avatarUrl,
  size: 64,
  rounded: false
};
