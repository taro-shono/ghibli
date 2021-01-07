import React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageDetail } from '.';

const stories = storiesOf('components/ImageDetail', module);

stories.add('default', () => {
  return <ImageDetail title="hawl" id="1" />;
});
