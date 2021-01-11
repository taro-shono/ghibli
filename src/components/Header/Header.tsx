import { FC } from 'react';
import { SPACE, TITLE } from '../../constants';

type Props = {
  title: string;
};

export const Header: FC<Props> = ({ title, ...other }) => {
  return (
    <header className={`h-32 ${SPACE.PADDING_X} flex items-center`} {...other}>
      <h2 className="text-3xl">{title === 'all' ? 'all' : TITLE[title]}</h2>
    </header>
  );
};
