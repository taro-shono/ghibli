import '../../src/styles/styles.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Meta } from '../components/Meta';

type Component = {
  theme: string;
} & AppProps['Component'];
type Props = {
  Component: Component;
} & AppProps;

function MyApp({ Component, pageProps }: Props) {
  return (
    <ThemeProvider
      forcedTheme={Component.theme || undefined}
      defaultTheme="system"
      attribute="class"
    >
      <Meta />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
