import { storiesOf } from '@storybook/react';
import { ImageList } from '.';

const stories = storiesOf('components/ImageList', module);

stories.add('default', () => {
  return <ImageList name="hawl" length={10} />;
});
