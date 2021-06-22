import { FC, useEffect, useState } from 'react';
import { SPACE } from '../../../constants';
import { zeroPadding } from '../../../utils';
import { Image, StaticRequire } from '../../Image';

type Props = {
  id: string;
  title: string;
};

export const ImageDetail: FC<Props> = ({ id, title, ...other }) => {
  const [src, setSrc] = useState<StaticRequire | null>(null);

  useEffect(() => {
    if (!title || !id) return;
    const set = async () => {
      const item = await import(
        `/public/images/${title}/${title}${zeroPadding(Number(id))}.jpg`
      );
      setSrc(item);
    };
    set();
  }, [title, id]);

  if (!src) return null;

  return (
    <div className={`${SPACE.PADDING}`} {...other}>
      <figure className="bg-gray-100 dark:bg-gray-900">
        <Image
          src={src}
          placeholder="blur"
          layout="responsive"
          width="1920"
          height="1038"
        />
      </figure>
    </div>
  );
};
