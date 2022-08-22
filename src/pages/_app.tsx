import AppContextProvider from '@/components/AppContextProvider/AppContextProvider';
import Layout from '@/components/Layout';
import AuthWrapper from '@/components/Wrappers/AuthWrapper';
import { darkTheme, lightTheme, ThemeEnum } from '@/lib/theme/defaultTheme';
import GlobalStyle from '@/lib/theme/globalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(ThemeEnum.LIGHT);

  const toggleTheme = React.useCallback(() => {
    if (theme === ThemeEnum.LIGHT) {
      setTheme(ThemeEnum.DARK);
      localStorage.setItem('current-theme', JSON.stringify(ThemeEnum.DARK));
    } else {
      setTheme(ThemeEnum.LIGHT);
      localStorage.setItem('current-theme', JSON.stringify(ThemeEnum.LIGHT));
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <AppContextProvider>
          <ThemeProvider theme={theme == ThemeEnum.LIGHT ? lightTheme : darkTheme}>
            <GlobalStyle />
            <AuthWrapper>
              <Layout toggleTheme={toggleTheme}>
                <Component {...pageProps} />
                <ToastContainer position="top-right" hideProgressBar autoClose={2000} />
              </Layout>
            </AuthWrapper>
          </ThemeProvider>
        </AppContextProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
