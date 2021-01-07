import { FC } from 'react';
import { SPACE } from '../../constants';
import { Nav } from '../Nav';

type Props = {};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Nav className={`fixed w-32 pt-${SPACE} pl-${SPACE}`} />
      <main className="flex-1 pl-32">{children}</main>
    </div>
  );
};

export { Layout };
