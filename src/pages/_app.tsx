import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import AuthWrapper from '@/components/Wrappers/AuthWrapper';
import Layout from '@/components/Layout';
import GlobalStyle from '@/lib/theme/globalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/lib/theme/defaultTheme';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <AuthWrapper>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthWrapper>
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
