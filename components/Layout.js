import { useEffect } from "react";

import Head from "next/head";

import Prism from "prismjs";

import "prismjs/components/prism-ini";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-bash";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ files, children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="d-flex">
        <main className="container flex-grow-1">{children}</main>
        <Sidebar files={files} />
      </div>
    </>
  );
}
