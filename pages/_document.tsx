import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/icons/apple-180x180-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="120x120"
          href="/icons/apple-120x120-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="152x152"
          href="/icons/apple-152x152-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Family Feast"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
