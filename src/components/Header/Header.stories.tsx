import { storiesOf } from '@storybook/react';
import { Header } from '.';

const stories = storiesOf('components/Header', module);

stories.add('default', () => {
  return <Header title="title" />;
});
