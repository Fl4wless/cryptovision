import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import AuthWrapper from '@/components/Wrappers/AuthWrapper';
import Layout from '@/components/Layout';
import GlobalStyle from '@/lib/theme/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <GlobalStyle />
      <AuthWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthWrapper>
    </SessionProvider>
  );
}

export default MyApp;
