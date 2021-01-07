import { storiesOf } from '@storybook/react';
import { Image } from '.';

const stories = storiesOf('components/Image', module);

stories.add('default', () => {
  return <Image src="/images/chihiro001.jpg" layout="fill" />;
});
