import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { SPACE, TITLE } from '../../constants';
import { zeroPadding } from '../../utils';
import { Image, StaticRequire } from '../Image/Image';
import styles from './ImageList.module.css';

type Props = {
  name: string;
  length: number;
};

export const imageListContainerClassName = `${SPACE.PADDING_B} ${SPACE.PADDING_X} grid ${SPACE.GAP} lg:grid-cols-3 2xl:grid-cols-6`;

export const ImageList: FC<Props> = ({ length, name, ...other }) => {
  const [images, setImages] = useState<
    { id: number; src: StaticRequire }[] | null
  >(null);
  useEffect(() => {
    const set = async () => {
      const list = await Promise.all(
        Array.from(Array(length)).map(async (_, index) => {
          const item = (await import(
            `/public/images/${name}/${name}${zeroPadding(index + 1)}.jpg`
          )) as StaticRequire;
          return {
            id: index + 1,
            src: item,
          };
        }),
      );
      setImages(list);
    };
    set();
  }, [name]);

  if (!images) return null;

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
                placeholder="blur"
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
