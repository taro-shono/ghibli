import { FC } from 'react';
import { Header } from '../../Header';
import { ImageList, imageListContainerClassName } from '../../ImageList';

type Props = {};

export const Top: FC<Props> = ({ ...other }) => {
  return (
    <div>
      <Header title="all" />
      <div className={imageListContainerClassName} {...other}>
        <ImageList name="chihiro" length={50} />
        <ImageList name="howl" length={50} />
        <ImageList name="majo" length={50} />
        <ImageList name="totoro" length={50} />
      </div>
    </div>
  );
};
