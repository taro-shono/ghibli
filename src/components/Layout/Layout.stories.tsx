import { storiesOf } from '@storybook/react';
import { Layout } from '.';

const stories = storiesOf('components/Layout', module);

stories.add('default', () => {
  return <Layout />;
});
