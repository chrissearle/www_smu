import Head from "next/head";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/overrides.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="d-flex">
        <main className="container flex-grow-1">
          <Component {...pageProps} />
        </main>
        <Sidebar />
      </div>
    </>
  );
}

export default MyApp;
