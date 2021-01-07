import { FC } from 'react';
import { Header } from '../../Header';
import { ImageList, imageListContainerClassName } from '../../ImageList';

type Props = { title: string };

export const Title: FC<Props> = ({ title, ...other }) => {
  return (
    <div>
      <Header title={title} />
      <div className={imageListContainerClassName} {...other}>
        <ImageList name={title} length={50} />
      </div>
    </div>
  );
};
