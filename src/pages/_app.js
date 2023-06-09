import React from "react";
import Script from "next/script";
import Head from "next/head";
import "../styles/preloader.css";
import "../styles/globals.css";
import dotenv from "dotenv"

dotenv.config()

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Smavy</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Component {...pageProps} />

      <Script
        data-pace-options='{ "ajax": false, "restartOnRequestAfter": false, "document": false, "eventLag": false }'
        strategy="beforeInteractive"
        src="/assets/js/lib/pace.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/bootstrap.bundle.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/mixitup.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/wow.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/html5shiv.min.js"
      ></Script>
      <Script strategy="lazyOnload" src="/assets/js/main.js"></Script>
    </>
  );
}

export default MyApp;
