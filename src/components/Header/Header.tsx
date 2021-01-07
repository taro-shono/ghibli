import { FC } from 'react';
import { SPACE, TITLE } from '../../constants';

type Props = {
  title: string;
};

export const headerSpace = '32';

export const Header: FC<Props> = ({ title, ...other }) => {
  return (
    <header
      className={`h-${headerSpace} px-${SPACE} flex items-center`}
      {...other}
    >
      <h2 className="text-3xl">{title === 'all' ? 'all' : TITLE[title]}</h2>
    </header>
  );
};
