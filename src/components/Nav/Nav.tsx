import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

type Props = {
  className: string;
};

export const nav = [
  { name: 'all', path: '/' },
  { name: 'chihiro', path: '/chihiro' },
  { name: 'howl', path: '/howl' },
  { name: 'majo', path: '/majo' },
  { name: 'totoro', path: '/totoro' },
].map((item, index) => ({
  ...item,
  id: index + 1,
}));

export const Nav: FC<Props> = ({ ...other }) => {
  const { asPath } = useRouter();

  return (
    <nav {...other}>
      <ul>
        {nav.map((item, index) => (
          <li key={item.id} className={index !== 0 ? 'mt-2' : ''}>
            <Link href={item.path}>
              <a
                className={`rounded flex items-center px-2 hover:bg-gray-100 dark:hover:bg-gray-900 ${
                  asPath === item.path ? 'bg-gray-100 dark:bg-gray-900' : ''
                }`}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
