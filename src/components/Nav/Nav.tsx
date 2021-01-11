import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useTheme } from 'next-themes';

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

export const Nav: FC<Props> = ({ className, ...other }) => {
  const { asPath } = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <div className={`h-screen ${className}`} {...other}>
      <nav>
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
      <div
        className="cursor-pointer absolute left-6 bottom-6 px-4 py-1 text-black dark:text-white border-gray-300 dark:border-gray-900 border rounded"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        {!theme || theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ padding: '0 0 1px' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
