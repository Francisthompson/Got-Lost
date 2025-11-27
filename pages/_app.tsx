import ClientThemeWrapper from '@/context/ClientThemeWrapper';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Got Lost? - Interactive Campus Map</title>
        <meta name="description" content="Explore our university campus in immersive 360° view" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ThemeProvider>
          <ClientThemeWrapper>
              <Component {...pageProps} />
          </ClientThemeWrapper>
        </ThemeProvider>
      </div>
    </>
  );
}
