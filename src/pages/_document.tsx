import { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import MyApp from './_app';

export default function Document() {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(sheet.collectStyles(<MyApp {...props} />));
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    sheet.seal();
  }
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
