import Link from 'next/link';
import { FC } from 'react';
import { SPACE, TITLE } from '../../constants';
import { zeroPadding } from '../../utils';
import { Image } from '../Image/Image';
import styles from './ImageList.module.css';

type Props = {
  name: string;
  length: number;
};

export const imageListContainerClassName = `${SPACE.PADDING_B} ${SPACE.PADDING_X} grid ${SPACE.GAP} lg:grid-cols-3 2xl:grid-cols-6`;

export const ImageList: FC<Props> = ({ length, name, ...other }) => {
  const images = Array.from(Array(length)).map((_, index) => ({
    id: index + 1,
    src: `/images/${name}/${name}${zeroPadding(index + 1)}.webp`,
  }));

  return (
    <>
      {images.map((item) => (
        <figure
          className={`${styles.figure} bg-gray-100 dark:bg-gray-900 rounded-lg`}
          key={item.id}
          {...other}
        >
          <Link href={`/${name}/${item.id}`}>
            <a aria-label={`ghibli's ${TITLE[name]} pictures`}>
              <Image
                className="rounded-lg"
                src={item.src}
                layout="fill"
                objectFit="cover"
                quality={75}
                alt=""
              />
            </a>
          </Link>
        </figure>
      ))}
    </>
  );
};
