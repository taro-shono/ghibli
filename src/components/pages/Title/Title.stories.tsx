import { storiesOf } from '@storybook/react';
import { Title } from '.';

const stories = storiesOf('components/Title', module);

stories.add('default', () => {
  return <Title title="title" />;
});
