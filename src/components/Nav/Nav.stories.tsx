import { storiesOf } from '@storybook/react';
import { Nav } from '.';

const stories = storiesOf('components/Nav', module);

stories.add('default', () => {
  return <Nav className="" />;
});
