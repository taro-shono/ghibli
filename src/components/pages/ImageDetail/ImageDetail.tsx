import { FC } from 'react';
import { SPACE } from '../../../constants';
import { zeroPadding } from '../../../utils';
import { Image } from '../../Image';

type Props = {
  id: string;
  title: string;
};

export const ImageDetail: FC<Props> = ({ id, title, ...other }) => {
  return (
    <div className={`${SPACE.PADDING}`} {...other}>
      <figure className="bg-gray-100 dark:bg-gray-900">
        <Image
          src={`/images/${title}/${title}${zeroPadding(Number(id))}.jpg`}
          layout="responsive"
          width="1920"
          height="1038"
        />
      </figure>
    </div>
  );
};
