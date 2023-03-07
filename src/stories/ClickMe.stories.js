import ClickMe from './ClickMe';

export default {
    title: 'ClickMe',
    component: ClickMe,
};

const Template = (args) => <ClickMe {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

