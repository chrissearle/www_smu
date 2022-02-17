import Head from "next/head";

import Header from "../components/Header";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/overrides.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
