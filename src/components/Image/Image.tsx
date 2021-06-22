import { FC } from 'react';
import NextImage, { ImageProps } from 'next/image';

type Props = {} & ImageProps;
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
export type StaticRequire = {
  default: StaticImageData;
};

const Image: FC<Props> = (props) => {
  return <NextImage {...props} />;
};

export { Image };
