/* eslint-disable react/no-unknown-property */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* <script
          disable-devtool-auto
          src="https://cdn.jsdelivr.net/npm/disable-devtool"
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WD62MGGN');
            `,
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WD62MGGN"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
